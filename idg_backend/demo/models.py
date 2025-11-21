from django.db import models

# Create your models here.

class Demo(models.Model):

    COURSES_CHOICES = [
    ('mdm', 'Master in Digital Marketing Course at idigitalstudies'),
    ('dms', 'Digital Marketing Specialist Course at iDigitalStudies'),
    ('smb', 'Best Digital Marketing Course for Business Owners'),
    ('beg', 'Digital Marketing Course for Beginners'),
    ('cus', 'Customised Course in Digital Marketing'),
    ('deg', 'Degree in Digital Marketing'),
    ]

    full_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    course = models.CharField(max_length=100, choices=COURSES_CHOICES, blank=True, null=True)
    learning_goals = models.TextField(blank=True, null=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['full_name', 'email', 'phone', 'course'], name='unique_demo_booking')
        ]
        
    def __str__(self):
        return f"{self.full_name} - {self.course or 'No course selected'}"