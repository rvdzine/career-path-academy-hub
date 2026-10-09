from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, Date
from sqlalchemy.sql import func
from ..database import Base

class EnrolledStudent(Base):
    __tablename__ = "enrolled_students"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(String(20), unique=True, index=True, nullable=False)  # e.g. IDS00100
    name = Column(String(200), nullable=False)
    email = Column(String(254), index=True, nullable=False)
    phone = Column(String(20), nullable=False)
    location = Column(String(200), nullable=False)
    course_mode = Column(String(20), nullable=False)  # 'online', 'offline', 'hybrid'
    course_name = Column(String(250), nullable=False)
    course_code = Column(String(20), nullable=True)  # e.g. 'DM01M', 'DM01B', 'DM01S', 'DM01C'
    
    # Certificate tracking
    certificate_status = Column(String(20), default="pending")  # 'pending', 'issued'
    certificate_id = Column(String(50), unique=True, nullable=True)  # e.g. CERT-IDS00100
    course_completion_date = Column(Date, nullable=True)
    course_duration = Column(String(50), nullable=True, default="3 Months")
    certificate_url = Column(String(500), nullable=True)
    certificate_issued_at = Column(DateTime(timezone=True), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
