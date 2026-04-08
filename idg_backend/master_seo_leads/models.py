from django.db import models

class MasterseoLeads(models.Model):

    ROLES = [
        ('student', 'Student'),
        ('working_professional', 'Working Professional / Career Switchers'),
        ('business_owner', 'Business Owner'),
        ('freelancer', 'Freelancer'),
        ('job_seeker', 'Job Seeker'),
    ]

    full_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    role = models.CharField(max_length=100, choices=ROLES, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


    class Meta:
        app_label = 'master_seo_leads'
        db_table = 'master_seo_leads'
        constraints = [
            models.UniqueConstraint(
                fields=['email', 'phone'], 
                name='unique_master_seo_lead'
            )
        ]
        ordering = ['-created_at']
        verbose_name = 'Master SEO Lead'
        verbose_name_plural = 'Master SEO Leads'
        
    def __str__(self):
        return f"{self.full_name} - {self.email}"
