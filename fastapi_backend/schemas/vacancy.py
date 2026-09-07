from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class VacancyListItem(BaseModel):
    id: int
    title: str
    slug: str
    company: Optional[str] = None
    location: str
    job_type: str
    stipend: str
    status: str
    job_description_header: Optional[str] = None
    job_description_body: Optional[str] = None
    job_description_file: Optional[str] = None
    views_count: int
    applications_count: int
    created_at: Optional[datetime] = None
    published_at: Optional[datetime] = None
    skills_list: List[str] = []
    requirements_list: List[str] = []

    class Config:
        from_attributes = True

class VacancyDetail(BaseModel):
    id: int
    title: str
    slug: str
    company: Optional[str] = None
    location: str
    job_type: str
    stipend: str
    job_description_header: Optional[str] = None
    job_description_body: Optional[str] = None
    job_description_file: Optional[str] = None
    requirements: str
    skills: str
    status: str
    views_count: int
    applications_count: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    published_at: Optional[datetime] = None
    skills_list: List[str] = []
    requirements_list: List[str] = []

    class Config:
        from_attributes = True
