from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from contact.models import Contact
from landpage_leads.models import LandpageLead
from .webhook_service import webhook_service
import logging

logger = logging.getLogger(__name__)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def resend_contact_webhook(request, contact_id):
    """
    Manually resend webhook for a specific contact lead
    """
    try:
        contact = get_object_or_404(Contact, id=contact_id)
        
        lead_data = {
            'full_name': contact.full_name,
            'email': contact.email,
            'phone': contact.phone,
            'interested_courses': contact.get_interested_courses_display() if contact.interested_courses else None,
            'experience': contact.get_experience_display() if contact.experience else None,
            'message': contact.message,
            'created_at': contact.created_at.isoformat(),
        }
        
        success = webhook_service.send_lead_to_crm(lead_data, 'contact_form_resend')
        
        if success:
            return Response({
                'message': 'Webhook sent successfully',
                'lead_email': contact.email
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                'error': 'Failed to send webhook',
                'lead_email': contact.email
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
    except Exception as e:
        logger.error(f"Error resending contact webhook: {str(e)}")
        return Response({
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def resend_landpage_webhook(request, lead_id):
    """
    Manually resend webhook for a specific landing page lead
    """
    try:
        lead = get_object_or_404(LandpageLead, id=lead_id)
        
        lead_data = {
            'full_name': lead.full_name,
            'email': lead.email,
            'phone': lead.phone,
            'city': lead.city,
            'created_at': lead.created_at.isoformat(),
        }
        
        success = webhook_service.send_lead_to_crm(lead_data, 'landing_page_resend')
        
        if success:
            return Response({
                'message': 'Webhook sent successfully',
                'lead_email': lead.email
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                'error': 'Failed to send webhook',
                'lead_email': lead.email
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
    except Exception as e:
        logger.error(f"Error resending landpage webhook: {str(e)}")
        return Response({
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def webhook_status(request):
    """
    Get webhook configuration status
    """
    return Response({
        'webhook_url': webhook_service.webhook_url,
        'timeout': webhook_service.timeout,
        'retry_attempts': webhook_service.retry_attempts,
        'configured': bool(webhook_service.webhook_url)
    }, status=status.HTTP_200_OK)