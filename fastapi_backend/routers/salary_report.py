from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from ..database import get_db
from ..models.salary_report import SalaryReportLead
from ..schemas.salary_report import SalaryReportCreate, SalaryReportResponse
from ..services.email_service import send_lead_notification
from ..services.webhook_service import send_lead_to_crm

router = APIRouter(prefix="/api/salaryreport", tags=["Salary Report"])

@router.post("/submit/", response_model=SalaryReportResponse, status_code=status.HTTP_201_CREATED)
def submit_salary_report(payload: SalaryReportCreate, db: Session = Depends(get_db)):
    try:
        lead = SalaryReportLead(
            full_name=payload.full_name,
            email=payload.email,
            phone=payload.phone,
            course=payload.course
        )
        db.add(lead)
        db.commit()
        db.refresh(lead)

        lead_data = {
            'full_name': lead.full_name,
            'email': lead.email,
            'phone': lead.phone,
            'course': lead.course,
        }

        send_lead_notification('Salary Report Lead', lead_data)
        send_lead_to_crm(lead_data, lead_source='Salary Report')

        return SalaryReportResponse(message="Details submitted successfully")

    except IntegrityError:
        db.rollback()
        return SalaryReportResponse(message="Details submitted successfully")
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
