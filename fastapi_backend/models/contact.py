from sqlalchemy import Column, Integer, String, Text, DateTime, UniqueConstraint
from sqlalchemy.sql import func
from ..database import Base

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(254), nullable=False)
    phone = Column(String(15), nullable=False)
    interested_courses = Column(String(50), nullable=True)
    experience = Column(String(50), nullable=True)
    message = Column(Text, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    __table_args__ = (
        UniqueConstraint('full_name', 'email', 'phone', name='unique_contact_entry'),
    )
