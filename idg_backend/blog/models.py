from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django.utils import timezone


class Blog(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
    ]
    
    title = models.CharField(max_length=500)
    slug = models.SlugField(max_length=600, unique=True, blank=True)
    excerpt = models.TextField(help_text="Short description for blog listing")
    content = models.TextField(help_text="Full HTML content of the blog")
    meta_description = models.TextField(max_length=160, help_text="SEO meta description (150-160 characters)")
    meta_keywords = models.TextField(blank=True, null=True, help_text="SEO keywords (optional)")
    
    # Image can be URL or uploaded file
    featured_image = models.URLField(max_length=1000, help_text="Featured image URL")
    
    # Author and status
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='blogs')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(null=True, blank=True)
    
    # Additional fields
    is_featured = models.BooleanField(default=False, help_text="Show in featured section")
    views_count = models.IntegerField(default=0, help_text="Number of views")
    
    class Meta:
        ordering = ['created_at']
        verbose_name = 'Blog'
        verbose_name_plural = 'Blogs'
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        # Auto-generate slug from title if not provided
        if not self.slug:
            base_slug = slugify(self.title)
            slug = base_slug
            counter = 1
            while Blog.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        
        # Set published_at when status changes to published
        if self.status == 'published' and not self.published_at:
            self.published_at = timezone.now()
        
        super().save(*args, **kwargs)
