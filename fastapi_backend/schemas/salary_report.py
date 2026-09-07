from pydantic import BaseModel, EmailStr

class SalaryReportCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    course: str

class SalaryReportResponse(BaseModel):
    message: str = "Details submitted successfully"
