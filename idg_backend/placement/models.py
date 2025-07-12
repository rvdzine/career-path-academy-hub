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

    def __str__(self):
        return f"{self.full_name}"