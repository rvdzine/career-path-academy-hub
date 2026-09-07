import json
from fastapi import APIRouter, Depends, Form, File, UploadFile, status, HTTPException
from sqlalchemy.orm import Session
from typing import Optional
from ..database import get_db
from ..models.placement import JobApplication, Recruiter
from ..schemas.placement import PlacementResponse
from ..utils.file_storage import save_upload_file
from ..services.email_service import send_lead_notification
from ..services.webhook_service import send_lead_to_crm

router = APIRouter(prefix="/api/careers", tags=["Careers & Placement"])

@router.post("/student-placement/", response_model=PlacementResponse, status_code=status.HTTP_201_CREATED)
def student_placement(
    full_name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    experience_level: Optional[str] = Form(None),
    key_skills: Optional[str] = Form(None),
    job_titles: Optional[str] = Form("[]"),
    resume: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    try:
        resume_url = None
        if resume and resume.filename:
            resume_url = save_upload_file(
                resume,
                subfolder="resumes",
                allowed_extensions=[".pdf", ".doc", ".docx"],
                max_size_mb=5
            )

        # Parse job_titles JSON string
        try:
            parsed_job_titles = json.loads(job_titles) if isinstance(job_titles, str) else job_titles
        except Exception:
            parsed_job_titles = [job_titles] if job_titles else []

        application = JobApplication(
            full_name=full_name,
            email=email,
            phone=phone,
            experience_level=experience_level,
            key_skills=key_skills,
            resume=resume_url,
            job_titles=parsed_job_titles
        )
        db.add(application)
        db.commit()
        db.refresh(application)

        lead_data = {
            'full_name': application.full_name,
            'email': application.email,
            'phone': application.phone,
            'experience_level': application.experience_level or 'Not specified',
            'key_skills': application.key_skills or 'Not provided',
            'job_titles': ', '.join(application.job_titles) if application.job_titles else 'None',
            'resume': resume_url or 'No file uploaded',
        }

        send_lead_notification('Student Job Application', lead_data)
        send_lead_to_crm(lead_data, lead_source='Student Job Application')

        return PlacementResponse(message="You are registered successfully")

    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/recruiter-entry/", response_model=PlacementResponse, status_code=status.HTTP_201_CREATED)
def recruiter_entry(
    company_name: str = Form(...),
    company_mail: str = Form(...),
    salary_range: str = Form(...),
    employee_count: str = Form(...),
    industry_type: str = Form(...),
    contact_person_name: str = Form(...),
    phone_number: str = Form(...),
    address: str = Form(...),
    pin_code: str = Form(...),
    city: str = Form(...),
    state: str = Form(...),
    country: str = Form(...),
    job_profile: str = Form(...),
    job_opening_count: int = Form(...),
    job_description_type: str = Form(...),
    company_website: Optional[str] = Form(None),
    job_description_text: Optional[str] = Form(None),
    job_description_file: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    try:
        jd_file_url = None
        if job_description_file and job_description_file.filename:
            jd_file_url = save_upload_file(
                job_description_file,
                subfolder="job_descriptions",
                allowed_extensions=[".pdf", ".doc", ".docx", ".jpg", ".jpeg", ".png"],
                max_size_mb=5
            )

        recruiter = Recruiter(
            company_name=company_name,
            company_mail=company_mail,
            salary_range=salary_range,
            company_website=company_website,
            employee_count=employee_count,
            industry_type=industry_type,
            contact_person_name=contact_person_name,
            phone_number=phone_number,
            address=address,
            pin_code=pin_code,
            city=city,
            state=state,
            country=country,
            job_profile=job_profile,
            job_opening_count=job_opening_count,
            job_description_type=job_description_type,
            job_description_text=job_description_text,
            job_description_file=jd_file_url
        )
        db.add(recruiter)
        db.commit()
        db.refresh(recruiter)

        lead_data = {
            'company_name': recruiter.company_name,
            'company_mail': recruiter.company_mail,
            'contact_person': recruiter.contact_person_name,
            'phone': recruiter.phone_number,
            'job_profile': recruiter.job_profile,
            'openings': str(recruiter.job_opening_count),
            'location': f"{recruiter.city}, {recruiter.state}",
        }

        send_lead_notification('Recruiter Registration', lead_data)
        send_lead_to_crm(lead_data, lead_source='Recruiter Registration')

        return PlacementResponse(message="Company registered successfully")

    except HTTPException:
        raise
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
