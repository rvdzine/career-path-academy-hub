from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from ..database import get_db
from ..models.contact import Contact
from ..schemas.contact import ContactCreate, ContactResponse
from ..services.email_service import send_lead_notification
from ..services.webhook_service import send_lead_to_crm

router = APIRouter(prefix="/api/contact", tags=["Contact"])

@router.post("/contact/", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def submit_contact_form(payload: ContactCreate, db: Session = Depends(get_db)):
    try:
        new_contact = Contact(
            full_name=payload.full_name,
            email=payload.email,
            phone=payload.phone,
            interested_courses=payload.interested_courses,
            experience=payload.experience,
            message=payload.message
        )
        db.add(new_contact)
        db.commit()
        db.refresh(new_contact)

        # Lead notification data
        lead_data = {
            'full_name': new_contact.full_name,
            'email': new_contact.email,
            'phone': new_contact.phone,
            'interested_courses': new_contact.interested_courses or 'Not specified',
            'experience': new_contact.experience or 'Not specified',
            'message': new_contact.message or 'No message provided',
        }

        # Send email and CRM webhook
        send_lead_notification('Contact Form', lead_data)
        send_lead_to_crm(lead_data, lead_source='Contact Form')

        return ContactResponse(message="ok")

    except IntegrityError:
        db.rollback()
        # Contact already submitted, still return 201 or 400 with graceful message
        return ContactResponse(message="ok")
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
