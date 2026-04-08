from django.db import models

class LandpageLead(models.Model):
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    city = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        app_label = 'landpage_leads'
        db_table = 'landpage_leads'
        constraints = [
            models.UniqueConstraint(
                fields=['email', 'phone'], 
                name='unique_landpage_lead'
            )
        ]
        ordering = ['-created_at']
        verbose_name = 'Landing Page Lead'
        verbose_name_plural = 'Landing Page Leads'
        
    def __str__(self):
        return f"{self.full_name} - {self.email}"
