from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime, timezone
from ..database import get_db
from ..models.vacancy import Vacancy
from ..models.user import User
from ..schemas.vacancy import VacancyListItem, VacancyDetail
from ..dependencies import get_current_user, get_optional_user
from ..utils.slug import generate_unique_slug
from ..utils.file_storage import save_upload_file

router = APIRouter(prefix="/api/vacancies", tags=["Vacancies"])

def enrich_vacancy(vac: Vacancy) -> dict:
    data = {c.name: getattr(vac, c.name) for c in vac.__table__.columns}
    skills_raw = vac.skills or ""
    reqs_raw = vac.requirements or ""
    data["skills_list"] = [s.strip() for s in skills_raw.split(",") if s.strip()]
    data["requirements_list"] = [r.strip() for r in reqs_raw.split("\n") if r.strip()]
    return data

@router.get("/", response_model=List[VacancyListItem])
def list_vacancies(
    status_filter: Optional[str] = Query(None, alias="status"),
    job_type: Optional[str] = Query(None),
    current_user: Optional[User] = Depends(get_optional_user),
    db: Session = Depends(get_db)
):
    query = db.query(Vacancy)

    if not current_user:
        query = query.filter(Vacancy.status == "published")
    elif status_filter:
        query = query.filter(Vacancy.status == status_filter)

    if job_type:
        query = query.filter(Vacancy.job_type == job_type)

    vacancies = query.order_by(Vacancy.created_at.desc()).all()
    return [enrich_vacancy(v) for v in vacancies]

@router.get("/my_vacancies/", response_model=List[VacancyListItem])
def get_my_vacancies(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    vacancies = db.query(Vacancy).filter(Vacancy.created_by_id == current_user.id).order_by(Vacancy.created_at.desc()).all()
    return [enrich_vacancy(v) for v in vacancies]

@router.get("/{slug}/", response_model=VacancyDetail)
def get_vacancy_detail(
    slug: str,
    db: Session = Depends(get_db)
):
    vac = db.query(Vacancy).filter(Vacancy.slug == slug).first()
    if not vac:
        raise HTTPException(status_code=404, detail="Vacancy not found")

    vac.views_count += 1
    db.commit()
    db.refresh(vac)
    return enrich_vacancy(vac)

@router.post("/", response_model=VacancyDetail, status_code=status.HTTP_201_CREATED)
def create_vacancy(
    title: str = Form(...),
    company: Optional[str] = Form(None),
    location: str = Form(...),
    job_type: str = Form("hybrid"),
    stipend: str = Form(...),
    job_description_header: Optional[str] = Form(""),
    job_description_body: Optional[str] = Form(None),
    requirements: str = Form(...),
    skills: str = Form(...),
    status: Optional[str] = Form("draft"),
    job_description_file: Optional[UploadFile] = File(None),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    slug_base = f"{title}-{company}" if company else title
    slug = generate_unique_slug(Vacancy, db, slug_base)

    jd_url = None
    if job_description_file and job_description_file.filename:
        jd_url = save_upload_file(
            job_description_file,
            subfolder="job_descriptions",
            allowed_extensions=[".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"],
            max_size_mb=5
        )

    published_at = datetime.now(timezone.utc) if status == "published" else None

    vac = Vacancy(
        title=title,
        slug=slug,
        company=company,
        location=location,
        job_type=job_type,
        stipend=stipend,
        job_description_header=job_description_header,
        job_description_body=job_description_body,
        job_description_file=jd_url,
        requirements=requirements,
        skills=skills,
        status=status or "draft",
        created_by_id=current_user.id,
        published_at=published_at
    )
    db.add(vac)
    db.commit()
    db.refresh(vac)
    return enrich_vacancy(vac)

@router.put("/{slug}/", response_model=VacancyDetail)
def update_vacancy(
    slug: str,
    title: Optional[str] = Form(None),
    company: Optional[str] = Form(None),
    location: Optional[str] = Form(None),
    job_type: Optional[str] = Form(None),
    stipend: Optional[str] = Form(None),
    job_description_header: Optional[str] = Form(None),
    job_description_body: Optional[str] = Form(None),
    requirements: Optional[str] = Form(None),
    skills: Optional[str] = Form(None),
    status: Optional[str] = Form(None),
    job_description_file: Optional[UploadFile] = File(None),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    vac = db.query(Vacancy).filter(Vacancy.slug == slug).first()
    if not vac:
        raise HTTPException(status_code=404, detail="Vacancy not found")

    if title and title != vac.title:
        vac.title = title
        slug_base = f"{title}-{company or vac.company}" if (company or vac.company) else title
        vac.slug = generate_unique_slug(Vacancy, db, slug_base, current_id=vac.id)

    if company is not None:
        vac.company = company
    if location is not None:
        vac.location = location
    if job_type is not None:
        vac.job_type = job_type
    if stipend is not None:
        vac.stipend = stipend
    if job_description_header is not None:
        vac.job_description_header = job_description_header
    if job_description_body is not None:
        vac.job_description_body = job_description_body
    if requirements is not None:
        vac.requirements = requirements
    if skills is not None:
        vac.skills = skills
    if status is not None:
        vac.status = status
        if status == "published" and not vac.published_at:
            vac.published_at = datetime.now(timezone.utc)

    if job_description_file and job_description_file.filename:
        vac.job_description_file = save_upload_file(
            job_description_file,
            subfolder="job_descriptions",
            allowed_extensions=[".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"],
            max_size_mb=5
        )

    db.commit()
    db.refresh(vac)
    return enrich_vacancy(vac)

@router.delete("/{slug}/", status_code=status.HTTP_204_NO_CONTENT)
def delete_vacancy(
    slug: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    vac = db.query(Vacancy).filter(Vacancy.slug == slug).first()
    if not vac:
        raise HTTPException(status_code=404, detail="Vacancy not found")

    db.delete(vac)
    db.commit()
    return None

@router.post("/{slug}/publish/", response_model=VacancyDetail)
def publish_vacancy(
    slug: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    vac = db.query(Vacancy).filter(Vacancy.slug == slug).first()
    if not vac:
        raise HTTPException(status_code=404, detail="Vacancy not found")

    vac.status = "published"
    vac.published_at = datetime.now(timezone.utc)
    db.commit()
    db.refresh(vac)
    return enrich_vacancy(vac)

@router.post("/{slug}/unpublish/", response_model=VacancyDetail)
def unpublish_vacancy(
    slug: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    vac = db.query(Vacancy).filter(Vacancy.slug == slug).first()
    if not vac:
        raise HTTPException(status_code=404, detail="Vacancy not found")

    vac.status = "draft"
    db.commit()
    db.refresh(vac)
    return enrich_vacancy(vac)

@router.post("/{slug}/close/", response_model=VacancyDetail)
def close_vacancy(
    slug: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    vac = db.query(Vacancy).filter(Vacancy.slug == slug).first()
    if not vac:
        raise HTTPException(status_code=404, detail="Vacancy not found")

    vac.status = "closed"
    db.commit()
    db.refresh(vac)
    return enrich_vacancy(vac)
