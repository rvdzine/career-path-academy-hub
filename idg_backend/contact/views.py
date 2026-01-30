from .serializers import ContactSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from idg_backend.email_utils import send_lead_notification

@api_view(['POST'])
def contact_info(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        contact = serializer.save()
        
        # Prepare lead data for email
        lead_data = {
            'full_name': contact.full_name,
            'email': contact.email,
            'phone': contact.phone,
            'interested_courses': contact.get_interested_courses_display() if contact.interested_courses else 'Not specified',
            'experience': contact.get_experience_display() if contact.experience else 'Not specified',
            'message': contact.message or 'No message provided',
        }
        
        # Send email notification
        send_lead_notification('Contact Form', lead_data)
        
        return Response({"message": "ok"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)