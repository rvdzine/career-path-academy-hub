from django.db.models.signals import post_save
from django.dispatch import receiver
from contact.models import Contact
from landpage_leads.models import LandpageLead
from .webhook_service import webhook_service
import logging
from django.utils import timezone

logger = logging.getLogger(__name__)

@receiver(post_save, sender=Contact)
def send_contact_lead_to_crm(sender, instance, created, **kwargs):
    if created:
        try:
            lead_data = {
                'full_name': instance.full_name,
                'email': instance.email,
                'phone': instance.phone,
                'interested_courses': instance.get_interested_courses_display() if instance.interested_courses else None,
                'experience': instance.get_experience_display() if instance.experience else None,
                'message': instance.message,
                'created_at': instance.created_at.isoformat() if instance.created_at else timezone.now().isoformat(),
            }
            
            # Send to CRM asynchronously (you might want to use Celery for production)
            webhook_service.send_lead_to_crm(lead_data, 'contact_form')
            
        except Exception as e:
            logger.error(f"Error sending contact lead to CRM: {str(e)}")

@receiver(post_save, sender=LandpageLead)
def send_landpage_lead_to_crm(sender, instance, created, **kwargs):
    """
    Signal handler to send landing page leads to CRM via webhook
    """
    if created:
        try:
            lead_data = {
                'full_name': instance.full_name,
                'email': instance.email,
                'phone': instance.phone,
                'city': instance.city,
                'created_at': instance.created_at.isoformat() if instance.created_at else timezone.now().isoformat(),
            }
            
            webhook_service.send_lead_to_crm(lead_data, 'landing_page')
            
        except Exception as e:
            logger.error(f"Error sending landing page lead to CRM: {str(e)}")