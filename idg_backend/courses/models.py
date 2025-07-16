from django.db import models

# Create your models here.

class Enrollment(models.Model):

    EXPERIENCE_CHOICES = [
        ('beginner', 'Beginner (New to Digital Marketing)'),
        ('intermediate', 'Intermediate (Some experience)'),
        ('advanced', 'Advanced (Experienced professional)'),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    experience = models.CharField(max_length=20, choices=EXPERIENCE_CHOICES, blank=True, null=True)
    learning_goals = models.TextField(blank=True, null=True)
    course_title = models.CharField(max_length=200)
    # course_price = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('full_name', 'email', 'phone', 'course_title')

    def __str__(self):
        return f"{self.full_name} - {self.course_title}"