from pydantic import BaseModel
from typing import Optional, List, Dict
from datetime import datetime, date

class StudentEnrollRequest(BaseModel):
    name: str
    email: str
    phone: str
    location: str
    course_mode: str  # 'online', 'offline', 'hybrid'
    course_name: str
    course_code: Optional[str] = None

class IssueCertificateRequest(BaseModel):
    course_completion_date: date
    duration: Optional[str] = "3 Months"
    certificate_url: Optional[str] = None
    course_code: Optional[str] = None

class StudentResponse(BaseModel):
    id: int
    student_id: str
    name: str
    email: str
    phone: str
    location: str
    course_mode: str
    course_name: str
    course_code: Optional[str] = None
    course_duration: Optional[str] = None
    certificate_status: str
    certificate_id: Optional[str] = None
    course_completion_date: Optional[date] = None
    certificate_url: Optional[str] = None
    certificate_issued_at: Optional[datetime] = None
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class StudentStatsResponse(BaseModel):
    total: int
    online: int
    offline: int
    hybrid: int
    certificates_issued: int
    certificates_pending: int
