from sqlalchemy import Column, Integer, String, DateTime, UniqueConstraint
from sqlalchemy.sql import func
from ..database import Base

class SalaryReportLead(Base):
    __tablename__ = "salary_report_leads"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(254), nullable=False)
    phone = Column(String(15), nullable=False)
    course = Column(String(100), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    __table_args__ = (
        UniqueConstraint('full_name', 'email', 'phone', 'course', name='unique_salary_report_lead'),
    )
