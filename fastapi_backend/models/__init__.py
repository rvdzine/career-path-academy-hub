from ..database import Base
from .user import User
from .contact import Contact
from .demo import Demo
from .online_demo import OnlineDemo
from .enrollment import Enrollment
from .salary_report import SalaryReportLead
from .placement import JobApplication, Recruiter
from .blog import Blog
from .vacancy import Vacancy
from .placed_student import PlacedStudent

__all__ = [
    "Base",
    "User",
    "Contact",
    "Demo",
    "OnlineDemo",
    "Enrollment",
    "SalaryReportLead",
    "JobApplication",
    "Recruiter",
    "Blog",
    "Vacancy",
    "PlacedStudent",
]
