# Use official slim Python image
FROM python:3.11-slim

# Prevent Python from writing .pyc files & enable real-time unbuffered log output
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONPATH=/app \
    PORT=8000 \
    WORKERS=2

WORKDIR /app

# Install system dependencies required for psycopg2, curl health checks, etc.
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy and install python dependencies first (enables Docker layer caching)
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r /app/requirements.txt

# Copy the application source code into /app/fastapi_backend
# (Ensures all package-level relative imports resolve cleanly)
COPY . /app/fastapi_backend/

# Ensure local media fallback folder exists
RUN mkdir -p /app/fastapi_backend/media

# Expose default backend port
EXPOSE 8000

# Automated healthcheck hitting the live health check route
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD curl -f http://localhost:${PORT}/api/health/ || exit 1

# Launch ASGI server with configurable PORT and WORKERS
CMD ["sh", "-c", "uvicorn fastapi_backend.main:app --host 0.0.0.0 --port ${PORT} --workers ${WORKERS}"]
