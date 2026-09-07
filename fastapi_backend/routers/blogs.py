from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Query
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime, timezone
from ..database import get_db
from ..models.blog import Blog
from ..models.user import User
from ..schemas.blog import BlogListItem, BlogDetail, BlogCreate, BlogUpdate, ImageUploadResponse
from ..dependencies import get_current_user, get_optional_user
from ..utils.slug import generate_unique_slug
from ..utils.file_storage import save_upload_file

router = APIRouter(prefix="/api/blogs", tags=["Blogs"])

def enrich_blog_author(blog: Blog) -> dict:
    author_name = blog.author.username if blog.author else "Institute of Digital Studies"
    data = {c.name: getattr(blog, c.name) for c in blog.__table__.columns}
    data["author_name"] = author_name
    return data

@router.get("/", response_model=List[BlogListItem])
def list_blogs(
    status_filter: Optional[str] = Query(None, alias="status"),
    is_featured: Optional[bool] = Query(None),
    current_user: Optional[User] = Depends(get_optional_user),
    db: Session = Depends(get_db)
):
    """
    Public users see published blogs only.
    Authenticated users can see all blogs or filter by status.
    """
    query = db.query(Blog)

    if not current_user:
        # Unauthenticated users only see published blogs
        query = query.filter(Blog.status == "published")
    elif status_filter:
        query = query.filter(Blog.status == status_filter)

    if is_featured is not None:
        query = query.filter(Blog.is_featured == is_featured)

    blogs = query.order_by(Blog.created_at.desc()).all()
    return [enrich_blog_author(b) for b in blogs]

@router.get("/my_blogs/", response_model=List[BlogListItem])
def get_my_blogs(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Get all blogs created by the current logged in user.
    """
    blogs = db.query(Blog).filter(Blog.author_id == current_user.id).order_by(Blog.created_at.desc()).all()
    return [enrich_blog_author(b) for b in blogs]

@router.post("/upload_image/", response_model=ImageUploadResponse, status_code=status.HTTP_201_CREATED)
def upload_blog_image(
    image: UploadFile = File(...),
    current_user: User = Depends(get_current_user)
):
    """
    Upload blog featured image directly to Cloudinary CDN (or local disk).
    """
    if not image or not image.filename:
        raise HTTPException(status_code=400, detail="No image provided.")

    url = save_upload_file(
        image,
        subfolder="blog_images",
        allowed_extensions=[".jpg", ".jpeg", ".png", ".webp", ".avif"],
        max_size_mb=5
    )
    return ImageUploadResponse(url=url, filename=image.filename)

@router.get("/{slug}/", response_model=BlogDetail)
def get_blog_detail(
    slug: str,
    db: Session = Depends(get_db)
):
    """
    Retrieve single blog by slug and increment view count.
    """
    blog = db.query(Blog).filter(Blog.slug == slug).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    # Increment views
    blog.views_count += 1
    db.commit()
    db.refresh(blog)

    return enrich_blog_author(blog)

@router.post("/", response_model=BlogDetail, status_code=status.HTTP_201_CREATED)
def create_blog(
    payload: BlogCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Create a new blog article. Auto-generates unique slug.
    """
    slug = generate_unique_slug(Blog, db, payload.title)
    
    published_at = datetime.now(timezone.utc) if payload.status == "published" else None

    blog = Blog(
        title=payload.title,
        slug=slug,
        excerpt=payload.excerpt,
        content=payload.content,
        meta_description=payload.meta_description,
        meta_keywords=payload.meta_keywords,
        featured_image=payload.featured_image,
        author_id=current_user.id,
        status=payload.status or "draft",
        is_featured=payload.is_featured or False,
        published_at=published_at
    )
    db.add(blog)
    db.commit()
    db.refresh(blog)
    return enrich_blog_author(blog)

@router.put("/{slug}/", response_model=BlogDetail)
def update_blog(
    slug: str,
    payload: BlogUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Update an existing blog by slug.
    """
    blog = db.query(Blog).filter(Blog.slug == slug).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    update_data = payload.model_dump(exclude_unset=True)
    
    # If title changed, update slug
    if "title" in update_data and update_data["title"] and update_data["title"] != blog.title:
        blog.slug = generate_unique_slug(Blog, db, update_data["title"], current_id=blog.id)

    # If publishing
    if update_data.get("status") == "published" and not blog.published_at:
        blog.published_at = datetime.now(timezone.utc)

    for field, value in update_data.items():
        if field != "title":
            setattr(blog, field, value)

    if "title" in update_data:
        blog.title = update_data["title"]

    db.commit()
    db.refresh(blog)
    return enrich_blog_author(blog)

@router.delete("/{slug}/", status_code=status.HTTP_204_NO_CONTENT)
def delete_blog(
    slug: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Delete blog article.
    """
    blog = db.query(Blog).filter(Blog.slug == slug).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    db.delete(blog)
    db.commit()
    return None

@router.post("/{slug}/publish/", response_model=BlogDetail)
def publish_blog(
    slug: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Publish a draft blog.
    """
    blog = db.query(Blog).filter(Blog.slug == slug).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    if blog.status == "published":
        raise HTTPException(status_code=400, detail="Blog is already published")

    blog.status = "published"
    blog.published_at = datetime.now(timezone.utc)
    db.commit()
    db.refresh(blog)
    return enrich_blog_author(blog)

@router.post("/{slug}/unpublish/", response_model=BlogDetail)
def unpublish_blog(
    slug: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """
    Unpublish a blog (set to draft).
    """
    blog = db.query(Blog).filter(Blog.slug == slug).first()
    if not blog:
        raise HTTPException(status_code=404, detail="Blog not found")

    if blog.status == "draft":
        raise HTTPException(status_code=400, detail="Blog is already a draft")

    blog.status = "draft"
    db.commit()
    db.refresh(blog)
    return enrich_blog_author(blog)
