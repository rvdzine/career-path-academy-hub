from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from sqlalchemy.sql import func
from ..database import Base

class PlacedStudent(Base):
    __tablename__ = "placed_students"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(String(20), unique=True, index=True, nullable=False)
    certificate_id = Column(String(20), unique=True, index=True, nullable=False)
    
    student_name = Column(String(200), nullable=False)
    student_image = Column(String(500), nullable=False)  # path/URL to student photo
    company_name = Column(String(200), nullable=False)
    student_role = Column(String(200), nullable=False)
    
    student_bio = Column(Text, nullable=True)
    certificate = Column(String(500), nullable=True)  # path/URL to certificate file
    is_active = Column(Boolean, default=True)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
