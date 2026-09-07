from pydantic import BaseModel, EmailStr
from typing import Optional

class OnlineDemoCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    course: str
    course_title: str
    experience_level: str
    learning_goals: Optional[str] = None

class OnlineDemoResponse(BaseModel):
    message: str = "Online demo booked successfully"
