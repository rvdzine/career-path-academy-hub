from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import DemoSerializer
from django.db import IntegrityError
from idg_backend.email_utils import send_lead_notification

class DemoBookingAPIView(APIView):
    def post(self, request):
        serializer = DemoSerializer(data=request.data)
        if serializer.is_valid():
            try:
                demo = serializer.save()
                
                # Prepare lead data for email
                lead_data = {
                    'full_name': demo.full_name,
                    'email': demo.email,
                    'phone': demo.phone,
                    'course': demo.get_course_display() if demo.course else 'Not specified',
                    'experience_level': demo.get_experience_level_display() if demo.experience_level else 'Not specified',
                    'learning_goals': demo.learning_goals or 'Not provided',
                }
                
                # Send email notification
                send_lead_notification('Demo Booking', lead_data)
                
                return Response({"message": "Your Demo is Booked successfully"}, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({"error": "Oops! This demo booking already exists!"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)