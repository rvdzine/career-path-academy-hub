from sqlalchemy import Column, Integer, String, Text, DateTime, UniqueConstraint
from sqlalchemy.sql import func
from ..database import Base

class OnlineDemo(Base):
    __tablename__ = "online_demo_bookings"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(200), nullable=False)
    phone = Column(String(15), nullable=False)
    email = Column(String(254), nullable=False)
    course = Column(String(100), nullable=False)
    course_title = Column(String(300), nullable=False)
    experience_level = Column(String(100), nullable=False)
    learning_goals = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    __table_args__ = (
        UniqueConstraint('full_name', 'email', 'phone', 'course', name='unique_online_demo_booking'),
    )
