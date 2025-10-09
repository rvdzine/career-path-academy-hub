from django.db import models

class SalaryReportLead(models.Model):
    COURSE_CHOICES = [
        ('seomastery', 'SEO Mastery'),
        ('socialmediapro', 'Social Media Pro'),
        ('googleadsexpert', 'Google Ads Expert'),
        ('cmbootcamp', 'Content Marketing Bootcamp'),
        ('emailmarketingpro', 'Email Marketing Pro'),
        ('advancedseo', 'Advanced SEO'),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    course = models.CharField(max_length=100, choices=COURSE_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('full_name', 'email', 'phone', 'course')

    def __str__(self):
        return f"{self.full_name} - {self.course}"
