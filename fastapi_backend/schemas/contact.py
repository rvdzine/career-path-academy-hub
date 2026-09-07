from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class ContactCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    interested_courses: Optional[str] = None
    experience: Optional[str] = None
    message: Optional[str] = None

class ContactResponse(BaseModel):
    message: str = "ok"
