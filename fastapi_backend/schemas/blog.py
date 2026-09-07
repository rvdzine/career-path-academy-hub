from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class BlogBase(BaseModel):
    title: str
    excerpt: str
    content: str
    meta_description: str
    meta_keywords: Optional[str] = None
    featured_image: Optional[str] = None
    status: Optional[str] = "draft"
    is_featured: Optional[bool] = False

class BlogCreate(BlogBase):
    pass

class BlogUpdate(BaseModel):
    title: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    meta_description: Optional[str] = None
    meta_keywords: Optional[str] = None
    featured_image: Optional[str] = None
    status: Optional[str] = None
    is_featured: Optional[bool] = None

class BlogListItem(BaseModel):
    id: int
    title: str
    slug: str
    excerpt: str
    featured_image: Optional[str] = None
    status: str
    is_featured: bool
    views_count: int
    created_at: Optional[datetime] = None
    published_at: Optional[datetime] = None
    author_name: Optional[str] = None

    class Config:
        from_attributes = True

class BlogDetail(BaseModel):
    id: int
    title: str
    slug: str
    excerpt: str
    content: str
    meta_description: str
    meta_keywords: Optional[str] = None
    featured_image: Optional[str] = None
    status: str
    is_featured: bool
    views_count: int
    author_id: Optional[int] = None
    author_name: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    published_at: Optional[datetime] = None

    class Config:
        from_attributes = True

class ImageUploadResponse(BaseModel):
    url: str
    filename: str
