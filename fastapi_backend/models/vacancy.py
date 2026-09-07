from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from ..database import Base

class Vacancy(Base):
    __tablename__ = "vacancies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    slug = Column(String(250), unique=True, index=True, nullable=False)
    company = Column(String(200), nullable=True)
    location = Column(String(200), nullable=False)
    job_type = Column(String(20), default="hybrid")  # 'remote', 'on-site', 'hybrid'
    stipend = Column(String(100), nullable=False)
    
    job_description_header = Column(String(500), default="", nullable=True)
    job_description_body = Column(Text, nullable=True)
    job_description_file = Column(String(500), nullable=True)
    requirements = Column(Text, nullable=False)
    skills = Column(Text, nullable=False)
    
    status = Column(String(20), default="draft")  # 'draft', 'published', 'closed'
    created_by_id = Column(Integer, ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    
    views_count = Column(Integer, default=0)
    applications_count = Column(Integer, default=0)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    published_at = Column(DateTime(timezone=True), nullable=True)

    created_by = relationship("User", backref="vacancies")
