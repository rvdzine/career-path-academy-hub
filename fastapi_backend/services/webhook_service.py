import requests
import time
from typing import Dict, Any
from ..config import settings

def send_lead_to_crm(lead_data: Dict[str, Any], lead_source: str, retry_attempts: int = None, timeout: int = None) -> bool:
    """
    Sends lead data to an external CRM webhook endpoint with retry mechanism.
    """
    if not settings.CRM_WEBHOOK_URL:
        return False

    if retry_attempts is None:
        retry_attempts = settings.WEBHOOK_RETRY_ATTEMPTS
    if timeout is None:
        timeout = settings.WEBHOOK_TIMEOUT

    payload = {
        'name': lead_data.get('full_name'),
        'email': lead_data.get('email'),
        'phone': lead_data.get('phone'),
        'source': lead_source,
        'city': lead_data.get('city'),
        'course_interest': lead_data.get('interested_courses') or lead_data.get('course'),
        'experience_level': lead_data.get('experience') or lead_data.get('experience_level'),
        'message': lead_data.get('message') or lead_data.get('learning_goals'),
    }
    payload = {k: v for k, v in payload.items() if v is not None}

    headers = {
        'Content-Type': 'application/json',
        'User-Agent': 'IDS-FastAPI-Backend/1.0'
    }

    for attempt in range(retry_attempts):
        try:
            res = requests.post(settings.CRM_WEBHOOK_URL, json=payload, headers=headers, timeout=timeout)
            if res.status_code in [200, 201, 202]:
                print(f"[CRM Webhook] Successfully sent lead to Converro CRM: {lead_data.get('email')}")
                return True
            else:
                print(f"[CRM Webhook] CRM returned status {res.status_code}: {res.text[:200]}")
        except Exception as e:
            print(f"[CRM Webhook] Attempt {attempt+1}/{retry_attempts} failed: {e}")
        
        if attempt < retry_attempts - 1:
            time.sleep(2)
            
    return False
