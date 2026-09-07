import os
import uuid
from pathlib import Path
from fastapi import UploadFile, HTTPException
import cloudinary
import cloudinary.uploader
from ..config import settings

MEDIA_ROOT = Path(__file__).resolve().parent.parent / "media"

def configure_cloudinary():
    """
    Dynamically configures Cloudinary using the latest environment settings.
    """
    if settings.is_cloudinary_configured:
        if settings.CLOUDINARY_URL:
            cloudinary.config(cloudinary_url=settings.CLOUDINARY_URL, secure=True)
        else:
            cloudinary.config(
                cloud_name=settings.CLOUDINARY_CLOUD_NAME,
                api_key=settings.CLOUDINARY_API_KEY,
                api_secret=settings.CLOUDINARY_API_SECRET,
                secure=True
            )
        return True
    return False

def save_upload_file(file: UploadFile, subfolder: str, allowed_extensions: list = None, max_size_mb: int = 5) -> str:
    """
    Validates and uploads file to Cloudinary inside the master 'ids/' folder with structured subfolders.
    Fallback to local media disk if Cloudinary is not configured.
    Returns the secure full HTTPS URL (e.g. 'https://res.cloudinary.com/...').
    """
    # 1. Validate file extension
    ext = os.path.splitext(file.filename)[1].lower()
    if allowed_extensions and ext not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported file format '{ext}'. Allowed formats: {', '.join(allowed_extensions)}"
        )

    # 2. Read content and validate size
    content = file.file.read()
    if len(content) > max_size_mb * 1024 * 1024:
        raise HTTPException(
            status_code=400,
            detail=f"File size exceeds maximum limit of {max_size_mb}MB."
        )

    file.file.seek(0)

    # 3. Upload to Cloudinary if configured
    if configure_cloudinary():
        try:
            # Determine resource_type ('image', 'raw' for pdf/docx, 'auto')
            resource_type = "image" if ext in [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"] else "raw"
            
            # Clean filename
            base_name = os.path.splitext(os.path.basename(file.filename))[0]
            clean_filename = f"{uuid.uuid4().hex[:8]}_{base_name}"
            
            # Cloudinary Folder Layout: ids/<subfolder>
            target_folder = f"ids/{subfolder}".strip("/")
            
            upload_result = cloudinary.uploader.upload(
                file.file,
                folder=target_folder,
                public_id=clean_filename,
                resource_type=resource_type,
                use_filename=True,
                unique_filename=True
            )
            file.file.seek(0)
            secure_url = upload_result.get("secure_url") or upload_result.get("url")
            print(f"[Cloudinary] Successfully uploaded to folder '{target_folder}': {secure_url}")
            return secure_url
        except Exception as e:
            print(f"[Cloudinary Error] Upload failed: {e}. Falling back to local disk.")
            file.file.seek(0)

    # 4. Fallback to Local Disk Storage
    dest_dir = MEDIA_ROOT / subfolder
    dest_dir.mkdir(parents=True, exist_ok=True)

    unique_name = f"{uuid.uuid4().hex[:10]}_{os.path.basename(file.filename)}"
    dest_path = dest_dir / unique_name

    with open(dest_path, "wb") as f:
        f.write(content)

    file.file.seek(0)
    return f"/media/{subfolder}/{unique_name}"
