from django.db import models

# Create your models here.

class Demo(models.Model):

    COURSES_CHOICES = [
        ('master_dm_internship', 'Master in DM with Internship'),
        ('specialist_dm', 'Specialist in DM'),
        ('dm_business_owners', 'DM for Business Owners'),
        ('foundation_basic_dm', 'Foundation/Basic in DM Course'),
        ('custom_dm', 'Custom DM Course'),
    ]

    EXPERIENCE_CHOICES = [
        ('fresher_student', 'Fresher/Student'),
        ('working_professional', 'Working Professional / Career Switchers'),
        ('business_owner', 'Business Owner'),
        ('freelancer', 'Freelancers / Remote Jobs Seekers'),
        ('home_maker', 'Home Makers'),
        ('others', 'Others'),
    ]

    full_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    course = models.CharField(max_length=100, choices=COURSES_CHOICES, blank=True, null=True)
    experience_level = models.CharField(max_length=100, choices=EXPERIENCE_CHOICES, blank=True, null=True)
    learning_goals = models.TextField(blank=True, null=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['full_name', 'email', 'phone', 'course'], name='unique_demo_booking')
        ]
        
    def __str__(self):
        return f"{self.full_name} - {self.course or 'No course selected'}"