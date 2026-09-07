from pydantic import BaseModel
from typing import Optional

class LoginRequest(BaseModel):
    username: str
    password: str

class TokenResponse(BaseModel):
    access: str
    refresh: str

class RefreshRequest(BaseModel):
    refresh: str

class RefreshResponse(BaseModel):
    access: str
