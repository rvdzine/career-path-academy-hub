from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import MasterSeoLeadSerializer
from django.db import IntegrityError
from idg_backend.email_utils import send_lead_notification

class MasterSeoLeadAPIView(APIView):
    def post(self, request):
        serializer = MasterSeoLeadSerializer(data=request.data)
        if serializer.is_valid():
            try:
                lead = serializer.save()
                
                # Prepare lead data for email notification
                lead_data = {
                    'full_name': lead.full_name,
                    'email': lead.email,
                    'phone': lead.phone,
                    'role': lead.role or 'Not specified',
                }
                
                # Send email notification
                send_lead_notification('Master SEO Page Lead', lead_data)
                
                return Response(
                    {"message": "Thank you! We'll contact you soon."}, 
                    status=status.HTTP_201_CREATED
                )
            except IntegrityError:
                return Response(
                    {"error": "This lead already exists in our system."}, 
                    status=status.HTTP_400_BAD_REQUEST
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
