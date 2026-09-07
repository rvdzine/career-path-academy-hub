from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class PlacedStudentItem(BaseModel):
    id: int
    student_id: str
    certificate_id: str
    student_name: str
    student_image: str
    student_image_url: str
    company_name: str
    student_role: str
    student_bio: Optional[str] = None
    certificate: Optional[str] = None
    certificate_url: Optional[str] = None
    is_active: bool
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
