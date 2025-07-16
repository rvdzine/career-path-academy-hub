from django.db import models

# Create your models here.

class Contact(models.Model):

    INTERESTED_COURSES_CHOICES = [
        ('digitalmarketing', 'Complete Digital Marketing'),
        ('seomastery', 'SEO Mastery'),
        ('socialmediamarketingpro', 'Social Media Marketing Pro'),
        ('googleads', 'Google Ads & PPC Expert'),
        ('emailmarketing', 'Email Marketing Specialist'),
        ('analyticsanddatainsights', 'Analytics & Data Insights'),
        ('content', 'Content Strategy & Creation'),
    ]

    EXPERIENCE_CHOICES = [
        ('fresher', 'Fresher / Student'),
        ('0-2', '0-2 Years'),
        ('2-5', '2-5 Years'),
        ('5+', '5+ Years'),
        ('switcher', 'Career Switcher'),
    ]
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    interested_courses = models.CharField(max_length=50, choices=INTERESTED_COURSES_CHOICES, blank=True, null=True)
    experience = models.CharField(max_length=20, choices=EXPERIENCE_CHOICES, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['full_name', 'email', 'phone'], name='unique_contact_entry')
        ]

    def __str__(self):
        return f"{self.full_name}"