from sqlalchemy import Column, Integer, String, Text, DateTime, JSON
from sqlalchemy.sql import func
from ..database import Base

class JobApplication(Base):
    __tablename__ = "job_applications"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(254), nullable=False)
    phone = Column(String(15), nullable=False)
    experience_level = Column(String(50), nullable=True)
    key_skills = Column(Text, nullable=True)
    resume = Column(String(500), nullable=True)  # path/URL to uploaded resume file
    job_titles = Column(JSON, default=list)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Recruiter(Base):
    __tablename__ = "recruiters"

    id = Column(Integer, primary_key=True, index=True)
    company_name = Column(String(255), nullable=False)
    company_mail = Column(String(254), nullable=False)
    salary_range = Column(String(100), nullable=False)
    company_website = Column(String(200), nullable=True)
    employee_count = Column(String(50), nullable=False)
    industry_type = Column(String(50), nullable=False)
    contact_person_name = Column(String(100), nullable=False)
    phone_number = Column(String(15), nullable=False)
    address = Column(Text, nullable=False)
    pin_code = Column(String(20), nullable=False)
    city = Column(String(100), nullable=False)
    state = Column(String(100), nullable=False)
    country = Column(String(100), nullable=False)
    job_profile = Column(String(255), nullable=False)
    job_opening_count = Column(Integer, nullable=False)
    job_description_type = Column(String(10), nullable=False)  # 'text' or 'file'
    job_description_text = Column(Text, nullable=True)
    job_description_file = Column(String(500), nullable=True)  # path/URL to uploaded JD file
    submitted_at = Column(DateTime(timezone=True), server_default=func.now())
