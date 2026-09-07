from sqlalchemy import Column, Integer, String, Text, DateTime, UniqueConstraint
from sqlalchemy.sql import func
from ..database import Base

class Demo(Base):
    __tablename__ = "demo_bookings"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(200), nullable=False)
    phone = Column(String(15), nullable=False)
    email = Column(String(254), nullable=False)
    course = Column(String(100), nullable=True)
    experience_level = Column(String(100), nullable=True)
    learning_goals = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    __table_args__ = (
        UniqueConstraint('full_name', 'email', 'phone', 'course', name='unique_demo_booking'),
    )
