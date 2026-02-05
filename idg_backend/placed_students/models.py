from django.db import models
from django.core.exceptions import ValidationError
import os

def validate_image_size(file):
    max_size = 2 * 1024 * 1024  # 2MB
    if file.size > max_size:
        raise ValidationError('Image size should not exceed 2MB.')

def validate_image_type(file):
    ext = os.path.splitext(file.name)[1].lower()
    valid_extensions = ['.jpg', '.jpeg', '.png', '.webp']
    if ext not in valid_extensions:
        raise ValidationError('Unsupported image format. Upload JPG, JPEG, PNG, or WEBP.')

def validate_certificate_type(file):
    ext = os.path.splitext(file.name)[1].lower()
    valid_extensions = ['.pdf', '.jpg', '.jpeg', '.png']
    if ext not in valid_extensions:
        raise ValidationError('Unsupported certificate format. Upload PDF, JPG, JPEG, or PNG.')

class PlacedStudent(models.Model):
    # Auto-generated unique IDs
    student_id = models.CharField(max_length=20, unique=True, editable=False)
    certificate_id = models.CharField(max_length=20, unique=True, editable=False)
    
    # Required fields
    student_name = models.CharField(max_length=200)
    student_image = models.ImageField(
        upload_to='placed_students/images/',
        validators=[validate_image_type, validate_image_size]
    )
    company_name = models.CharField(max_length=200)
    student_role = models.CharField(max_length=200)
    
    # Optional fields
    student_bio = models.TextField(blank=True, null=True)
    certificate = models.FileField(
        upload_to='placed_students/certificates/',
        validators=[validate_certificate_type],
        blank=True,
        null=True
    )
    
    # Metadata
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Placed Student'
        verbose_name_plural = 'Placed Students'
    
    def save(self, *args, **kwargs):
        if not self.student_id:
            # Generate unique student ID with 5-digit format
            last_student = PlacedStudent.objects.all().order_by('id').last()
            if last_student:
                # Handle both old format (IDS_001) and new format (IDS00101)
                last_id_str = last_student.student_id
                if '_' in last_id_str:
                    # Old format: IDS_001
                    last_id = int(last_id_str.split('_')[1])
                else:
                    # New format: IDS00101
                    last_id = int(last_id_str.replace('IDS', ''))
                new_id = last_id + 1
            else:
                new_id = 101
            self.student_id = f'IDS{new_id:05d}'
            self.certificate_id = f'IDSC{new_id:05d}'
        super().save(*args, **kwargs)
    
    def __str__(self):
        return f"{self.student_name} - {self.company_name}"
