from sqlalchemy import Column, Integer, String, Text, DateTime, UniqueConstraint
from sqlalchemy.sql import func
from ..database import Base

class Enrollment(Base):
    __tablename__ = "enrollments"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(254), nullable=False)
    phone = Column(String(15), nullable=False)
    experience = Column(String(50), nullable=True)
    learning_goals = Column(Text, nullable=True)
    course_title = Column(String(200), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    __table_args__ = (
        UniqueConstraint('full_name', 'email', 'phone', 'course_title', name='unique_course_enrollment'),
    )
