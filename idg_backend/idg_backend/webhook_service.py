import requests
import json
import logging
from django.conf import settings
from typing import Dict, Any

logger = logging.getLogger(__name__)

class WebhookService:
    """Service to handle webhook notifications to external CRM systems"""
    
    def __init__(self):
        self.webhook_url = getattr(settings, 'CRM_WEBHOOK_URL', None)
        self.timeout = getattr(settings, 'WEBHOOK_TIMEOUT', 30)
        self.retry_attempts = getattr(settings, 'WEBHOOK_RETRY_ATTEMPTS', 3)
    
    def send_lead_to_crm(self, lead_data: Dict[str, Any], lead_source: str) -> bool:        
        if not self.webhook_url:
            logger.warning("CRM webhook URL not configured")
            return False
        
        # Prepare payload for CRM - adjusted format based on CRM requirements
        payload = {
            'name': lead_data.get('full_name'),
            'email': lead_data.get('email'),
            'phone': lead_data.get('phone'),
            'source': lead_source,
            'timestamp': lead_data.get('created_at'),
            # Additionals
            'city': lead_data.get('city'),
            'course_interest': lead_data.get('interested_courses'),
            'experience_level': lead_data.get('experience'),
            'message': lead_data.get('message'),
        }
        
        # Remove None values to keep payload clean
        payload = {k: v for k, v in payload.items() if v is not None}
        
        headers = {
            'Content-Type': 'application/json',
            'User-Agent': 'IDG-Backend-Webhook/1.0'
        }
        
        # Attempt to send webhook with retries
        for attempt in range(self.retry_attempts):
            try:
                logger.info(f"Sending webhook to CRM (attempt {attempt + 1}/{self.retry_attempts})")
                
                response = requests.post(
                    self.webhook_url,
                    json=payload,
                    headers=headers,
                    timeout=self.timeout
                )
                
                if response.status_code in [200, 201, 202]:
                    logger.info(f"Successfully sent lead to CRM: {lead_data.get('email')}")
                    return True
                else:
                    logger.warning(f"CRM webhook returned status {response.status_code}: {response.text}")
                    
            except requests.exceptions.Timeout:
                logger.error(f"Webhook timeout on attempt {attempt + 1}")
            except requests.exceptions.ConnectionError:
                logger.error(f"Connection error on attempt {attempt + 1}")
            except requests.exceptions.RequestException as e:
                logger.error(f"Request error on attempt {attempt + 1}: {str(e)}")
            
            # Don't retry on the last attempt
            if attempt < self.retry_attempts - 1:
                logger.info(f"Retrying webhook in 2 seconds...")
                import time
                time.sleep(2)
        
        logger.error(f"Failed to send lead to CRM after {self.retry_attempts} attempts")
        return False

# Global instance
webhook_service = WebhookService() 