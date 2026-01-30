from .serializers import EnrollmentSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.db import IntegrityError
from idg_backend.email_utils import send_lead_notification

@api_view(['POST'])
def student_enroll(request):
    serializer = EnrollmentSerializer(data=request.data)
    if serializer.is_valid():
        try:
            # Save the enrollment
            enrollment = serializer.save()
            
            # Prepare lead data for email
            lead_data = {
                'full_name': enrollment.full_name,
                'email': enrollment.email,
                'phone': enrollment.phone,
                'course_title': enrollment.course_title,
                'experience': enrollment.get_experience_display() if enrollment.experience else 'Not specified',
                'learning_goals': enrollment.learning_goals or 'Not provided',
            }
            
            # Send email notification
            send_lead_notification('Course Enrollment', lead_data)
            
            return Response({"message": "You are registered successfully"}, status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response({"error": "Oops! This account is already registered! Try again."},
                            status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)