from django.db import models

# Create your models here.

class Demo(models.Model):

    COURSES_CHOICES = [
    ('Complete Digital Marketing', 'Complete Digital Marketing'),
    ('SEO Specialist', 'SEO Specialist'),
    ('Social Media Marketing', 'Social Media Marketing'),
    ('Google Ads Mastery', 'Google Ads Mastery'),
    ('Content Marketing', 'Content Marketing'),
    ('Email Marketing Pro', 'Email Marketing Pro'),
    ]

    full_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    course = models.CharField(max_length=50, choices=COURSES_CHOICES, blank=True, null=True)
    learning_goals = models.TextField(blank=True, null=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['full_name', 'email', 'phone', 'course'], name='unique_demo_booking')
        ]
        
    def __str__(self):
        return f"{self.full_name} - {self.course or 'No course selected'}"