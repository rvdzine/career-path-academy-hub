from django.core.management.base import BaseCommand
from idg_backend.webhook_service import webhook_service
from django.utils import timezone

class Command(BaseCommand):
    help = 'Test webhook functionality by sending a sample lead to CRM'

    def handle(self, *args, **options):
        self.stdout.write('Testing webhook functionality...')
        
        # Sample lead data for testing
        test_lead_data = {
            'full_name': 'Test User',
            'email': 'test@example.com',
            'phone': '+91-9876543210',
            'city': 'Mumbai',
            'interested_courses': 'Master in DM with Internship',
            'experience': 'Working Professional',
            'message': 'This is a test lead from webhook implementation',
            'created_at': timezone.now().isoformat(),
        }
        
        # Test webhook
        success = webhook_service.send_lead_to_crm(test_lead_data, 'test_webhook')
        
        if success:
            self.stdout.write(
                self.style.SUCCESS('✅ Webhook test successful! Lead sent to CRM.')
            )
        else:
            self.stdout.write(
                self.style.ERROR('❌ Webhook test failed. Check logs for details.')
            )
            
        self.stdout.write('Test completed.')