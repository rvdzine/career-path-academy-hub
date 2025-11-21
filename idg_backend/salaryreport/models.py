from django.db import models

class SalaryReportLead(models.Model):
    COURSE_CHOICES = [
        ('seomastery', 'Master in Digital Marketing Course at idigitalstudies'),
        ('socialmediapro', 'Digital Marketing Specialist Course at iDigitalStudies'),
        ('googleadsexpert', 'Best Digital Marketing Course for Business Owners'),
        ('cmbootcamp', 'Digital Marketing Course for Beginners'),
        ('emailmarketingpro', 'Customised Course in Digital Marketing'),
        ('advancedseo', 'Degree in Digital Marketing'),
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
