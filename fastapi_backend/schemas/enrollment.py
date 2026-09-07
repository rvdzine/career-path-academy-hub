from pydantic import BaseModel, EmailStr
from typing import Optional

class EnrollmentCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    experience: Optional[str] = None
    learning_goals: Optional[str] = None
    course_title: str

class EnrollmentResponse(BaseModel):
    message: str = "Enrolled successfully"
