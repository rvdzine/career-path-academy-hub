from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from ..database import get_db
from ..models.demo import Demo
from ..schemas.demo import DemoCreate, DemoResponse
from ..services.email_service import send_lead_notification
from ..services.webhook_service import send_lead_to_crm

router = APIRouter(prefix="/api/demo", tags=["Demo Booking"])

@router.post("/book/", response_model=DemoResponse, status_code=status.HTTP_201_CREATED)
def book_demo(payload: DemoCreate, db: Session = Depends(get_db)):
    try:
        new_demo = Demo(
            full_name=payload.full_name,
            email=payload.email,
            phone=payload.phone,
            course=payload.course,
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
            'course': new_demo.course or 'Not specified',
            'experience_level': new_demo.experience_level or 'Not specified',
            'learning_goals': new_demo.learning_goals or 'Not provided',
        }

        send_lead_notification('Demo Booking', lead_data)
        send_lead_to_crm(lead_data, lead_source='Demo Booking')

        return DemoResponse(message="Your Demo is Booked successfully")

    except IntegrityError:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={"error": "Oops! This demo booking already exists!"}
        )
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
