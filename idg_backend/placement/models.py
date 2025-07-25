from django.db import models
from django.core.exceptions import ValidationError
import os

# Create your models here.
def validate_file_type(file):
    ext = os.path.splitext(file.name)[1].lower()
    valid_extensions = ['.pdf', '.doc', '.docx']
    if ext not in valid_extensions:
        raise ValidationError('Unsupported file format. Upload PDF, DOC, or DOCX.')

def validate_file_size(file):
    max_size = 5 * 1024 * 1024  # 5MB
    if file.size > max_size:
        raise ValidationError('File size should not exceed 5MB.')

class Placement(models.Model):

    EXPERIENCE_LEVEL_CHOICES = [
        ('fresher', 'Fresher (0-6 months))'),
        ('beginner', 'Beginner (6 months - 1 year))'),
        ('intermediate', 'Intermediate (1-2 years)'),
        ('experienced', 'experienced (2+ years)'),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    experience_level = models.CharField(max_length=20, choices=EXPERIENCE_LEVEL_CHOICES, blank=True, null=True)
    key_skills = models.TextField(blank=True, null=True)
    resume = models.FileField(
        upload_to='resumes/',
        validators=[validate_file_type, validate_file_size],
        blank=True,
        null=True
    )
    job_titles = models.JSONField(default=list, blank=True)

    def __str__(self):
        return f"{self.full_name}"

class Company(models.Model):
    EMPLOYEE_COUNT_CHOICES = [
        ("1-10", "1-10"),
        ("11-50", "11-50"),
        ("51-200", "51-200"),
        ("201-500", "201-500"),
        ("501-1000", "501-1000"),
        ("1000+", "1000+"),
    ]

    INDUSTRY_TYPE_CHOICES = [
        ("technology", "Technology"),
        ("finance", "Finance"),
        ("healthcare", "Healthcare"),
        ("education", "Education"),
        ("retail", "Retail"),
        ("manufacturing", "Manufacturing"),
        ("consulting", "Consulting"),
        ("media", "Media & Entertainment"),
        ("other", "Other"),
    ]

    company_name = models.CharField(max_length=255)
    company_mail = models.EmailField()
    salary_range = models.CharField(max_length=100)
    company_website = models.URLField(blank=True, null=True)
    employee_count = models.CharField(max_length=20, choices=EMPLOYEE_COUNT_CHOICES)
    industry_type = models.CharField(max_length=50, choices=INDUSTRY_TYPE_CHOICES)
    contact_person_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    pin_code = models.CharField(max_length=10)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    job_profile = models.CharField(max_length=255)
    job_opening_count = models.PositiveIntegerField()
    job_description_type = models.CharField(max_length=10, choices=[('text', 'Text'), ('file', 'File')])
    job_description_text = models.TextField(blank=True, null=True)
    job_description_file = models.FileField(
        upload_to='job_descriptions/',
        validators=[validate_file_type, validate_file_size],
        blank=True,
        null=True
    )

    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.company_name