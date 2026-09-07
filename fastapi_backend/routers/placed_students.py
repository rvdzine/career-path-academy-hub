from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form, Query
from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import List, Optional
from ..database import get_db
from ..models.placed_student import PlacedStudent
from ..schemas.placed_student import PlacedStudentItem
from ..utils.file_storage import save_upload_file

router = APIRouter(prefix="/api/placed-students", tags=["Placed Students"])

def enrich_student(student: PlacedStudent) -> dict:
    data = {c.name: getattr(student, c.name) for c in student.__table__.columns}
    data["student_image_url"] = student.student_image or ""
    data["certificate_url"] = student.certificate or ""
    return data

def generate_next_student_ids(db: Session):
    last_student = db.query(PlacedStudent).order_by(PlacedStudent.id.desc()).first()
    if last_student and last_student.student_id:
        try:
            cleaned = last_student.student_id.replace("IDS_", "").replace("IDS", "")
            next_num = int(cleaned) + 1
        except Exception:
            next_num = 101
    else:
        next_num = 101
    return f"IDS{next_num:05d}", f"IDSC{next_num:05d}"

@router.get("/", response_model=List[PlacedStudentItem])
def list_placed_students(db: Session = Depends(get_db)):
    """
    List all active placed students ordered by newest first.
    """
    students = db.query(PlacedStudent).filter(PlacedStudent.is_active == True).order_by(PlacedStudent.created_at.desc()).all()
    return [enrich_student(s) for s in students]

@router.get("/search/", response_model=List[PlacedStudentItem])
def search_placed_students(
    q: str = Query(..., description="Search query by name, role, company or student ID"),
    db: Session = Depends(get_db)
):
    """
    Search placed students by name, company, role, student_id or certificate_id.
    """
    if not q or not q.strip():
        return list_placed_students(db)

    term = f"%{q.strip()}%"
    students = db.query(PlacedStudent).filter(
        PlacedStudent.is_active == True,
        or_(
            PlacedStudent.student_name.ilike(term),
            PlacedStudent.company_name.ilike(term),
            PlacedStudent.student_role.ilike(term),
            PlacedStudent.student_id.ilike(term),
            PlacedStudent.certificate_id.ilike(term)
        )
    ).order_by(PlacedStudent.created_at.desc()).all()

    return [enrich_student(s) for s in students]

@router.post("/", response_model=PlacedStudentItem, status_code=status.HTTP_201_CREATED)
def add_placed_student(
    student_name: str = Form(...),
    company_name: str = Form(...),
    student_role: str = Form(...),
    student_bio: Optional[str] = Form(None),
    student_image: UploadFile = File(...),
    certificate: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    """
    Add a new placed student. Uploads photo and certificate to Cloudinary CDN (or local disk).
    """
    if not student_image or not student_image.filename:
        raise HTTPException(status_code=400, detail="Student image is required.")

    img_url = save_upload_file(
        student_image,
        subfolder="placed_students/images",
        allowed_extensions=[".jpg", ".jpeg", ".png", ".webp"],
        max_size_mb=2
    )

    cert_url = None
    if certificate and certificate.filename:
        cert_url = save_upload_file(
            certificate,
            subfolder="placed_students/certificates",
            allowed_extensions=[".pdf", ".jpg", ".jpeg", ".png"],
            max_size_mb=5
        )

    student_id, cert_id = generate_next_student_ids(db)

    student = PlacedStudent(
        student_id=student_id,
        certificate_id=cert_id,
        student_name=student_name,
        student_image=img_url,
        company_name=company_name,
        student_role=student_role,
        student_bio=student_bio,
        certificate=cert_url,
        is_active=True
    )
    db.add(student)
    db.commit()
    db.refresh(student)

    return enrich_student(student)

@router.delete("/{student_id_or_pk}/", status_code=status.HTTP_204_NO_CONTENT)
def delete_placed_student(
    student_id_or_pk: str,
    db: Session = Depends(get_db)
):
    """
    Delete placed student by internal integer ID or student_id string.
    """
    student = None
    if student_id_or_pk.isdigit():
        student = db.query(PlacedStudent).filter(PlacedStudent.id == int(student_id_or_pk)).first()
    if not student:
        student = db.query(PlacedStudent).filter(PlacedStudent.student_id == student_id_or_pk).first()

    if not student:
        raise HTTPException(status_code=404, detail="Placed student not found")

    db.delete(student)
    db.commit()
    return None
