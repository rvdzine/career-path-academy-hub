from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from ..database import get_db
from ..models.online_demo import OnlineDemo
from ..schemas.online_demo import OnlineDemoCreate, OnlineDemoResponse
from ..services.email_service import send_lead_notification
from ..services.webhook_service import send_lead_to_crm

router = APIRouter(prefix="/api/online-demo", tags=["Online Demo"])

@router.post("/book/", response_model=OnlineDemoResponse, status_code=status.HTTP_201_CREATED)
def book_online_demo(payload: OnlineDemoCreate, db: Session = Depends(get_db)):
    try:
        new_demo = OnlineDemo(
            full_name=payload.full_name,
            email=payload.email,
            phone=payload.phone,
            course=payload.course,
            course_title=payload.course_title,
            experience_level=payload.experience_level,
            learning_goals=payload.learning_goals
        )
        db.add(new_demo)
        db.commit()
        db.refresh(new_demo)

        lead_data = {
            'full_name': new_demo.full_name,
            'email': new_demo.email,
            'phone': new_demo.phone,
            'course': new_demo.course,
            'course_title': new_demo.course_title,
            'experience_level': new_demo.experience_level,
            'learning_goals': new_demo.learning_goals or 'Not provided',
        }

        send_lead_notification('Online Demo Booking', lead_data)
        send_lead_to_crm(lead_data, lead_source='Online Demo')

        return OnlineDemoResponse(message="Online demo booked successfully")

    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={"error": "Oops! You have already booked a demo for this course."}
        )
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
