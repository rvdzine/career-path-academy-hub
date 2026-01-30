from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import OnlineDemo
from .serializers import OnlineDemoSerializer
from idg_backend.email_utils import send_lead_notification

class OnlineDemoBookingView(APIView):
    def post(self, request):
        serializer = OnlineDemoSerializer(data=request.data)
        
        if serializer.is_valid():
            try:
                # Save the online demo booking
                demo = serializer.save()
                
                # Prepare lead data for email
                lead_data = {
                    'full_name': demo.full_name,
                    'email': demo.email,
                    'phone': demo.phone,
                    'course': demo.get_course_display(),
                    'course_title': demo.course_title,
                    'experience_level': demo.get_experience_level_display(),
                    'learning_goals': demo.learning_goals or 'Not provided',
                }
                
                # Send email notification
                send_lead_notification('Online Demo Booking', lead_data)
                
                return Response(
                    {
                        "message": "Demo class booked successfully!",
                        "data": serializer.data
                    },
                    status=status.HTTP_201_CREATED
                )
            except Exception as e:
                if 'unique_online_demo_booking' in str(e):
                    return Response(
                        {"error": "You have already booked a demo for this course."},
                        status=status.HTTP_400_BAD_REQUEST
                    )
                return Response(
                    {"error": str(e)},
                    status=status.HTTP_400_BAD_REQUEST
                )
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)