from pydantic_settings import BaseSettings
from typing import List, Optional
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://bufferworks:Q6y1w5t2e4r3@147.79.71.199:5432/ids_db"
    
    # JWT
    SECRET_KEY: str = "ids_secret_key_change_me_in_production_2026_super_secure_hash"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 10080
    REFRESH_TOKEN_EXPIRE_MINUTES: int = 43200
    
    # CORS
    ALLOWED_ORIGINS: str = "http://localhost:3000,http://127.0.0.1:3000,https://www.idigitalstudies.com,https://idigitalstudies.com"
    
    # Cloudinary Storage
    CLOUDINARY_CLOUD_NAME: Optional[str] = None
    CLOUDINARY_API_KEY: Optional[str] = None
    CLOUDINARY_API_SECRET: Optional[str] = None
    CLOUDINARY_URL: Optional[str] = None

    # Email
    EMAIL_HOST_USER: str = ""
    EMAIL_HOST_PASSWORD: str = ""
    DEFAULT_FROM_EMAIL: str = ""
    LEAD_NOTIFICATION_EMAILS: str = ""
    
    # CRM Webhook & Admin
    CRM_WEBHOOK_URL: str = ""
    WEBHOOK_TIMEOUT: int = 30
    WEBHOOK_RETRY_ATTEMPTS: int = 3
    ADMIN_PANEL_URL: str = "http://localhost:3000/admin"

    @property
    def cors_origins(self) -> List[str]:
        return [origin.strip() for origin in self.ALLOWED_ORIGINS.split(",") if origin.strip()]

    @property
    def notification_email_list(self) -> List[str]:
        return [email.strip() for email in self.LEAD_NOTIFICATION_EMAILS.split(",") if email.strip()]

    @property
    def is_cloudinary_configured(self) -> bool:
        return bool(
            (self.CLOUDINARY_CLOUD_NAME and self.CLOUDINARY_API_KEY and self.CLOUDINARY_API_SECRET) 
            or self.CLOUDINARY_URL
        )

    class Config:
        env_file = str(BASE_DIR / ".env")
        env_file_encoding = "utf-8"
        extra = "allow"

settings = Settings()
