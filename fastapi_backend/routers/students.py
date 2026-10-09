from fastapi import APIRouter, Depends, HTTPException, status, Query, Response
from sqlalchemy.orm import Session
from sqlalchemy import func, or_
from typing import List, Optional
from datetime import datetime, timezone, date
import requests

from ..database import get_db
from ..models.student import EnrolledStudent
from ..schemas.student import (
    StudentEnrollRequest,
    StudentResponse,
    IssueCertificateRequest,
    StudentStatsResponse,
)
from ..services.certificate_service import (
    generate_certificate_buffers,
    upload_certificate_to_storage,
)
from ..services.email_service import send_student_certificate_email
from ..config import settings

router = APIRouter(prefix="/api/students", tags=["Students"])

def generate_next_student_id(db: Session) -> str:
    """
    Generates incremental unique Student ID starting from IDS00100.
    Format: IDS followed by 5 digits (e.g., IDS00100, IDS00101, etc.)
    """
    latest = (
        db.query(EnrolledStudent.student_id)
        .filter(EnrolledStudent.student_id.like("IDS%"))
        .order_by(
            func.length(EnrolledStudent.student_id).desc(),
            EnrolledStudent.student_id.desc(),
        )
        .first()
    )

    if not latest or not latest[0]:
        return "IDS00100"

    latest_id_str = str(latest[0])
    numeric_str = latest_id_str.replace("IDS", "")

    try:
        current_num = int(numeric_str)
        next_num = max(100, current_num + 1)
    except ValueError:
        next_num = 100

    return f"IDS{next_num:05d}"

COURSE_CODE_MAP = {
    "digital marketer for business owners": "DM01B",
    "master in digital marketing": "DM01M",
    "digital marketing specialist course": "DM01S",
    "customised course in digital marketing": "DM01C",
}

def resolve_course_code(course_name: str, provided_code: Optional[str] = None) -> str:
    if provided_code and provided_code.strip():
        return provided_code.strip().upper()

    clean_name = course_name.strip().lower()
    for key, code in COURSE_CODE_MAP.items():
        if key in clean_name or clean_name in key:
            return code

    if "business" in clean_name:
        return "DM01B"
    elif "master" in clean_name:
        return "DM01M"
    elif "specialist" in clean_name:
        return "DM01S"
    elif "custom" in clean_name:
        return "DM01C"

    return "DM01C"

def generate_certificate_id(
    student: EnrolledStudent,
    issue_date: Optional[date] = None,
    course_code: Optional[str] = None,
) -> str:
    """
    Generates certificate ID in format: IDS/{course_code}/{current_year}-{incremental_number}
    Example: IDS/DM01S/2026-00100
    - 'IDS': static fixed prefix
    - course_code: student's course code (e.g. DM01S, DM01B, DM01M, DM01C)
    - current_year: 4-digit year of completion / issuance (e.g. 2026)
    - incremental_number: 5-digit incremental number (e.g. 00100, 00101, etc.)
    """
    code = (
        course_code
        or student.course_code
        or resolve_course_code(student.course_name)
        or "DM01S"
    )
    code = code.strip().upper()

    if issue_date:
        year_str = str(issue_date.year)
    elif student.course_completion_date:
        year_str = str(student.course_completion_date.year)
    else:
        year_str = str(datetime.now().year)

    raw_digits = "".join(filter(str.isdigit, student.student_id or ""))
    if raw_digits:
        num_str = f"{int(raw_digits):05d}"
    else:
        num_str = f"{student.id:05d}"

    return f"IDS/{code}/{year_str}-{num_str}"

@router.post("/enroll/", response_model=StudentResponse, status_code=status.HTTP_201_CREATED)
def enroll_student(payload: StudentEnrollRequest, db: Session = Depends(get_db)):
    """
    Enroll a new student and automatically assign an incremental Student ID starting from IDS00100.
    """
    student_id = generate_next_student_id(db)
    course_code = resolve_course_code(payload.course_name, payload.course_code)

    student = EnrolledStudent(
        student_id=student_id,
        name=payload.name.strip(),
        email=payload.email.strip().lower(),
        phone=payload.phone.strip(),
        location=payload.location.strip(),
        course_mode=payload.course_mode.strip().lower(),
        course_name=payload.course_name.strip(),
        course_code=course_code,
        certificate_status="pending",
    )

    db.add(student)
    db.commit()
    db.refresh(student)

    return student

@router.get("/stats/", response_model=StudentStatsResponse)
def get_student_stats(db: Session = Depends(get_db)):
    """
    Returns high-level statistics for enrolled students.
    """
    total = db.query(EnrolledStudent).count()
    online = db.query(EnrolledStudent).filter(EnrolledStudent.course_mode == "online").count()
    offline = db.query(EnrolledStudent).filter(EnrolledStudent.course_mode == "offline").count()
    hybrid = db.query(EnrolledStudent).filter(EnrolledStudent.course_mode == "hybrid").count()
    issued = db.query(EnrolledStudent).filter(EnrolledStudent.certificate_status == "issued").count()
    pending = total - issued

    return StudentStatsResponse(
        total=total,
        online=online,
        offline=offline,
        hybrid=hybrid,
        certificates_issued=issued,
        certificates_pending=pending,
    )

@router.get("/", response_model=List[StudentResponse])
def list_students(
    q: Optional[str] = Query(None, description="Search by name or student ID"),
    course_mode: Optional[str] = Query(None, description="Filter by mode: online, offline, hybrid"),
    certificate_status: Optional[str] = Query(None, description="Filter by certificate: pending, issued"),
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=500),
    db: Session = Depends(get_db),
):
    """
    List all enrolled students with search and filter capabilities.
    """
    query = db.query(EnrolledStudent)

    if q:
        search_term = f"%{q.strip()}%"
        query = query.filter(
            or_(
                EnrolledStudent.name.ilike(search_term),
                EnrolledStudent.student_id.ilike(search_term),
                EnrolledStudent.email.ilike(search_term),
                EnrolledStudent.phone.ilike(search_term),
                EnrolledStudent.course_name.ilike(search_term),
                EnrolledStudent.course_code.ilike(search_term),
            )
        )

    if course_mode and course_mode.lower() != "all":
        query = query.filter(EnrolledStudent.course_mode == course_mode.lower())

    if certificate_status and certificate_status.lower() != "all":
        query = query.filter(EnrolledStudent.certificate_status == certificate_status.lower())

    students = query.order_by(EnrolledStudent.created_at.desc()).offset(skip).limit(limit).all()
    return students

def find_student_by_identifier(identifier: str, db: Session) -> Optional[EnrolledStudent]:
    """
    Finds a student by student_id (e.g. IDS00100), certificate_id (e.g. IDS/DM01S/2026-00100, CERT-IDS00100),
    or primary key ID, case-insensitively, supporting URL-decoded and sanitized variants.
    """
    import urllib.parse
    clean = urllib.parse.unquote(identifier).strip("/").strip()
    clean_lower = clean.lower()

    # Slash, underscore, and hyphen variants
    slash_variant = clean_lower.replace("_", "/").replace("-", "/")
    underscore_variant = clean_lower.replace("/", "_")

    student = (
        db.query(EnrolledStudent)
        .filter(
            or_(
                func.lower(EnrolledStudent.student_id) == clean_lower,
                func.lower(EnrolledStudent.certificate_id) == clean_lower,
                func.lower(EnrolledStudent.certificate_id) == slash_variant,
                func.lower(func.replace(EnrolledStudent.certificate_id, "/", "_")) == underscore_variant,
                EnrolledStudent.id == int(clean) if clean.isdigit() else False,
            )
        )
        .first()
    )
    if student:
        return student

    # If identifier has numeric part matching student_id (e.g. ends with -00100)
    if "-" in clean:
        parts = clean.split("-")
        suffix = parts[-1]
        if suffix.isdigit():
            possible_student_id = f"IDS{int(suffix):05d}"
            student = (
                db.query(EnrolledStudent)
                .filter(func.lower(EnrolledStudent.student_id) == possible_student_id.lower())
                .first()
            )
            if student:
                return student

    return None

@router.get("/verify/{identifier:path}")
def verify_certificate(identifier: str, db: Session = Depends(get_db)):
    """
    Public verification endpoint for student credentials.
    Supports student_id (e.g., IDS00100) or certificate_id (e.g., IDS/DM01S/2026-00100).
    Returns verified status and course details without exposing third-party storage references.
    """
    clean_id = identifier.strip("/").strip()
    student = find_student_by_identifier(clean_id, db)
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Certificate credential '{clean_id}' could not be found in the registry.",
        )

    cert_id = student.certificate_id or generate_certificate_id(student)

    if student.certificate_status != "issued":
        return {
            "valid": False,
            "status": student.certificate_status,
            "message": "Student is enrolled, but their completion certificate has not been officially issued yet.",
            "student_id": student.student_id,
            "name": student.name,
            "course_name": student.course_name,
        }

    return {
        "valid": True,
        "status": "verified",
        "student_id": student.student_id,
        "certificate_id": cert_id,
        "name": student.name,
        "course_name": student.course_name,
        "course_code": student.course_code or "DM01S",
        "course_mode": student.course_mode,
        "course_duration": student.course_duration or "3 Months",
        "course_completion_date": str(student.course_completion_date) if student.course_completion_date else None,
        "certificate_issued_at": student.certificate_issued_at.isoformat() if student.certificate_issued_at else None,
        "issuer": "Institute of Digital Studies (IDS)",
        "issuer_signatory": "Abhishek Kumar, CEO & Founder",
        "issuer_url": settings.SITE_URL,
        "verification_route": f"/verify-certificate/{cert_id}",
    }

@router.get("/{student_id:path}/certificate-image/")
@router.get("/{student_id:path}/certificate-image")
def get_certificate_image(student_id: str, db: Session = Depends(get_db)):
    """
    Direct internal image streaming endpoint.
    Serves the certificate PNG without exposing external Cloudinary links to client browsers.
    """
    clean_id = student_id.strip("/").strip()
    student = find_student_by_identifier(clean_id, db)
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student or certificate '{clean_id}' not found.",
        )

    safe_filename = (student.certificate_id or student.student_id).replace("/", "_").replace(" ", "_")

    # 1. Stream from Cloudinary cache internally if available
    if student.certificate_url and student.certificate_url.startswith("http"):
        try:
            r = requests.get(student.certificate_url, timeout=10)
            if r.status_code == 200:
                return Response(
                    content=r.content,
                    media_type="image/png",
                    headers={
                        "Cache-Control": "public, max-age=86400",
                        "Content-Disposition": f'inline; filename="{safe_filename}.png"',
                    },
                )
        except Exception as e:
            print(f"[Certificate Image Proxy Warning]: {e}")

    # 2. Dynamic fallback generation
    cert_id = student.certificate_id or generate_certificate_id(student)
    duration = student.course_duration or "3 Months"
    completion_date = student.course_completion_date or date.today()

    png_io, _ = generate_certificate_buffers(
        student_name=student.name,
        course_name=student.course_name,
        duration=duration,
        course_mode=student.course_mode,
        certificate_id=cert_id,
        issue_date=completion_date,
    )

    return Response(
        content=png_io.getvalue(),
        media_type="image/png",
        headers={
            "Cache-Control": "public, max-age=86400",
            "Content-Disposition": f'inline; filename="{safe_filename}.png"',
        },
    )

@router.get("/{student_id:path}/download-certificate/")
@router.get("/{student_id:path}/download-certificate")
def download_certificate(
    student_id: str,
    format: str = Query("png", regex="^(png|pdf)$"),
    db: Session = Depends(get_db),
):
    """
    On-demand download of the student's generated certificate as PNG image or PDF document.
    """
    clean_id = student_id.strip("/").strip()
    student = find_student_by_identifier(clean_id, db)

    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID '{clean_id}' not found.",
        )

    cert_id = student.certificate_id or generate_certificate_id(student)
    safe_filename = cert_id.replace("/", "_").replace(" ", "_")
    duration = student.course_duration or "3 Months"
    completion_date = student.course_completion_date or date.today()

    png_io, pdf_io = generate_certificate_buffers(
        student_name=student.name,
        course_name=student.course_name,
        duration=duration,
        course_mode=student.course_mode,
        certificate_id=cert_id,
        issue_date=completion_date,
    )

    if format.lower() == "pdf":
        return Response(
            content=pdf_io.getvalue(),
            media_type="application/pdf",
            headers={"Content-Disposition": f'attachment; filename="{safe_filename}.pdf"'},
        )
    else:
        return Response(
            content=png_io.getvalue(),
            media_type="image/png",
            headers={"Content-Disposition": f'attachment; filename="{safe_filename}.png"'},
        )

@router.post("/{student_id:path}/issue-certificate/", response_model=StudentResponse)
@router.post("/{student_id:path}/issue-certificate", response_model=StudentResponse)
def issue_certificate(
    student_id: str,
    payload: IssueCertificateRequest,
    db: Session = Depends(get_db),
):
    """
    Marks a student's certificate as issued and records course completion date.
    Generates new certificate format: IDS/{course_code}/{current_year}-{incremental_number}
    (e.g., IDS/DM01S/2026-00100) and renders/uploads to storage.
    """
    clean_id = student_id.strip("/").strip()
    student = find_student_by_identifier(clean_id, db)

    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID '{clean_id}' not found.",
        )

    # Resolve course code and generate certificate ID
    course_code = (
        payload.course_code
        or student.course_code
        or resolve_course_code(student.course_name)
    )
    student.course_code = course_code

    cert_id = generate_certificate_id(
        student=student,
        issue_date=payload.course_completion_date,
        course_code=course_code,
    )
    duration = payload.duration or student.course_duration or "3 Months"

    # Automatically synthesize certificate and upload to Cloudinary/local storage
    try:
        png_io, _ = generate_certificate_buffers(
            student_name=student.name,
            course_name=student.course_name,
            duration=duration,
            course_mode=student.course_mode,
            certificate_id=cert_id,
            issue_date=payload.course_completion_date,
        )
        cloudinary_url = upload_certificate_to_storage(png_io, cert_id)
        student.certificate_url = cloudinary_url
    except Exception as e:
        print(f"[Certificate Generation Warning] Failed to render or upload: {e}")
        if payload.certificate_url:
            student.certificate_url = payload.certificate_url

    student.certificate_status = "issued"
    student.certificate_id = cert_id
    student.course_completion_date = payload.course_completion_date
    student.course_duration = duration
    student.certificate_issued_at = datetime.now(timezone.utc)

    db.commit()
    db.refresh(student)

    return student

@router.post("/{student_id:path}/send-certificate-email/")
@router.post("/{student_id:path}/send-certificate-email")
def send_certificate_email(
    student_id: str,
    db: Session = Depends(get_db),
):
    """
    Emails the student their official Certificate of Completion along with
    the high-resolution PDF certificate attached directly to their email via Zoho SMTP.
    """
    clean_id = student_id.strip("/").strip()
    student = find_student_by_identifier(clean_id, db)

    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID '{clean_id}' not found.",
        )

    if not student.email or not student.email.strip():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Student '{student.name}' does not have an email address on file.",
        )

    # Resolve certificate details
    cert_id = student.certificate_id or generate_certificate_id(student)
    duration = student.course_duration or "3 Months"
    completion_date = student.course_completion_date or date.today()

    # Ensure certificate status is set to issued
    if student.certificate_status != "issued" or not student.certificate_id:
        student.certificate_status = "issued"
        student.certificate_id = cert_id
        if not student.course_completion_date:
            student.course_completion_date = completion_date
        if not student.certificate_issued_at:
            student.certificate_issued_at = datetime.now(timezone.utc)
        db.commit()
        db.refresh(student)

    # Generate print-ready PDF and PNG
    png_io, pdf_io = generate_certificate_buffers(
        student_name=student.name,
        course_name=student.course_name,
        duration=duration,
        course_mode=student.course_mode,
        certificate_id=cert_id,
        issue_date=completion_date,
    )

    verification_url = f"{settings.SITE_URL}/verify-certificate/{cert_id}"

    success, message = send_student_certificate_email(
        student_name=student.name,
        recipient_email=student.email,
        course_name=student.course_name,
        certificate_id=cert_id,
        issue_date=completion_date,
        duration=duration,
        course_mode=student.course_mode,
        pdf_bytes=pdf_io.getvalue(),
        png_bytes=png_io.getvalue(),
        verification_url=verification_url,
    )

    if not success:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=message,
        )

    copy_email = (
        (settings.MAIL_COPY_EMAIL or settings.MAIL_FROM_EMAIL or settings.MAIL_USER).strip().lower()
        if settings.MAIL_COPY_TO_SELF
        else None
    )

    return {
        "success": True,
        "message": message,
        "recipient": student.email,
        "copy_recipient": copy_email,
        "student_id": student.student_id,
        "certificate_id": cert_id,
        "name": student.name,
    }

@router.get("/{student_id:path}/", response_model=StudentResponse)
@router.get("/{student_id:path}", response_model=StudentResponse)
def get_student(student_id: str, db: Session = Depends(get_db)):
    """
    Retrieve an enrolled student by their student_id, certificate_id, or internal database ID.
    """
    clean_id = student_id.strip("/").strip()
    student = find_student_by_identifier(clean_id, db)

    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID '{clean_id}' not found.",
        )

    return student

@router.delete("/{student_id:path}/", status_code=status.HTTP_204_NO_CONTENT)
@router.delete("/{student_id:path}", status_code=status.HTTP_204_NO_CONTENT)
def delete_student(student_id: str, db: Session = Depends(get_db)):
    """
    Delete an enrolled student record.
    """
    clean_id = student_id.strip("/").strip()
    student = find_student_by_identifier(clean_id, db)

    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Student with ID '{clean_id}' not found.",
        )

    db.delete(student)
    db.commit()
    return None
