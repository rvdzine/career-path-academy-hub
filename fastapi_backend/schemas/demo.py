from pydantic import BaseModel, EmailStr
from typing import Optional

class DemoCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    course: Optional[str] = None
    experience_level: Optional[str] = None
    learning_goals: Optional[str] = None

class DemoResponse(BaseModel):
    message: str = "Your Demo is Booked successfully"
