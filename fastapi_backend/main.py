from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from sqlalchemy import text
from pathlib import Path
import time
from datetime import datetime, timezone

from .config import settings
from .database import get_db, engine, Base
from .routers import (
    auth,
    blogs,
    vacancies,
    placed_students,
    contact,
    demo,
    online_demo,
    courses,
    salary_report,
    placement,
    students,
)

# Auto-create tables for models
Base.metadata.create_all(bind=engine)

# Safe column migration check for existing tables
try:
    with engine.connect() as conn:
        conn.execute(text("ALTER TABLE enrolled_students ADD COLUMN IF NOT EXISTS course_code VARCHAR(20);"))
        conn.execute(text("ALTER TABLE enrolled_students ADD COLUMN IF NOT EXISTS course_duration VARCHAR(50);"))
        conn.commit()
except Exception:
    pass

START_TIME = time.time()

app = FastAPI(
    title="Institute of Digital Studies (IDS) API",
    description="High-performance backend API powering the iDigital Studies education platform.",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount local media directory for fallback static serving
MEDIA_DIR = Path(__file__).resolve().parent / "media"
MEDIA_DIR.mkdir(parents=True, exist_ok=True)
app.mount("/media", StaticFiles(directory=str(MEDIA_DIR)), name="media")

# ==================== ROUTERS ====================
# Authentication
app.include_router(auth.router)

# Content & Showcase
app.include_router(blogs.router)
app.include_router(vacancies.router)
app.include_router(placed_students.router)

# Inbound Leads & Forms
app.include_router(contact.router)
app.include_router(demo.router)
app.include_router(online_demo.router)
app.include_router(courses.router)
app.include_router(salary_report.router)
app.include_router(placement.router)
app.include_router(students.router)

@app.get("/api/health/", tags=["Health"])
@app.get("/health", tags=["Health"])
def health_check(db: Session = Depends(get_db)):
    """
    Live production health check endpoint.
    Performs live database ping and checks external service statuses.
    """
    db_status = "connected"
    try:
        db.execute(text("SELECT 1"))
    except Exception as e:
        db_status = f"error: {str(e)}"

    is_healthy = db_status == "connected"

    return {
        "status": "healthy" if is_healthy else "degraded",
        "database": db_status,
        "cloudinary": settings.is_cloudinary_configured,
        "cloud_name": settings.CLOUDINARY_CLOUD_NAME if settings.is_cloudinary_configured else None,
        "service": "IDS FastAPI Backend",
        "version": "2.0.0",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "uptime_seconds": int(time.time() - START_TIME)
    }
