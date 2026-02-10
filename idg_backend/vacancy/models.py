from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Vacancy(models.Model):
    TYPE_CHOICES = [
        ('remote', 'Remote'),
        ('on-site', 'On-site'),
        ('hybrid', 'Hybrid'),
    ]
    
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
        ('closed', 'Closed'),
    ]
    
    # Basic Information
    title = models.CharField(max_length=200, help_text="Job title (e.g., Digital Marketing Intern)")
    slug = models.SlugField(max_length=250, unique=True, blank=True)
    company = models.CharField(max_length=200, help_text="Company name", blank=True, null=True)
    location = models.CharField(max_length=200, help_text="Job location (e.g., Mumbai, Maharashtra)")
    
    # Job Details
    job_type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='hybrid')
    stipend = models.CharField(max_length=100, help_text="Stipend/Salary (e.g., ₹8,000/month)")
    
    # Description
    job_description_header = models.CharField(max_length=500, blank=True, default='', help_text="Job description header (1-liner displayed above skills)")
    job_description_body = models.TextField(blank=True, null=True, help_text="Full job description in text format")
    job_description_file = models.FileField(upload_to='job_descriptions/', blank=True, null=True, help_text="Job description file (PDF, DOCX, JPG, JPEG)")
    requirements = models.TextField(help_text="Job requirements (one per line)")
    skills = models.TextField(help_text="Required skills (comma separated)")
    
    # Status
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='draft')
    
    # Metadata
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='vacancies')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(null=True, blank=True)
    
    # Analytics
    views_count = models.IntegerField(default=0)
    applications_count = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = 'Vacancies'
    
    def __str__(self):
        company_name = self.company if self.company else "No Company"
        return f"{self.title} at {company_name}"
    
    def save(self, *args, **kwargs):
        if not self.slug:
            # Use company name if available, otherwise use "company" as placeholder
            company_part = self.company if self.company else "company"
            base_slug = slugify(f"{self.title}-{company_part}")
            slug = base_slug
            counter = 1
            while Vacancy.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)
    
    def get_skills_list(self):
        """Return skills as a list"""
        return [skill.strip() for skill in self.skills.split(',') if skill.strip()]
    
    def get_requirements_list(self):
        """Return requirements as a list"""
        return [req.strip() for req in self.requirements.split('\n') if req.strip()]
