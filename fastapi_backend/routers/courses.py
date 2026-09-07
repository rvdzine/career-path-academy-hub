from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from ..database import get_db
from ..models.enrollment import Enrollment
from ..schemas.enrollment import EnrollmentCreate, EnrollmentResponse
from ..services.email_service import send_lead_notification
from ..services.webhook_service import send_lead_to_crm

router = APIRouter(prefix="/api/courses", tags=["Courses"])

@router.post("/enroll/", response_model=EnrollmentResponse, status_code=status.HTTP_201_CREATED)
def enroll_course(payload: EnrollmentCreate, db: Session = Depends(get_db)):
    try:
        enrollment = Enrollment(
            full_name=payload.full_name,
            email=payload.email,
            phone=payload.phone,
            experience=payload.experience,
            learning_goals=payload.learning_goals,
            course_title=payload.course_title
        )
        db.add(enrollment)
        db.commit()
        db.refresh(enrollment)

        lead_data = {
            'full_name': enrollment.full_name,
            'email': enrollment.email,
            'phone': enrollment.phone,
            'course_title': enrollment.course_title,
            'experience': enrollment.experience or 'Not specified',
            'learning_goals': enrollment.learning_goals or 'Not provided',
        }

        send_lead_notification('Course Enrollment', lead_data)
        send_lead_to_crm(lead_data, lead_source='Course Enrollment')

        return EnrollmentResponse(message="Enrolled successfully")

    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={"error": "This account is already registered for this course."}
        )
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
