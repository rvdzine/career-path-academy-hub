from .serializers import EnrollmentSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.db import IntegrityError
# Create your views here.

@api_view(['POST'])
def student_enroll(request):
    serializer = EnrollmentSerializer(data=request.data)
    if serializer.is_valid():
        try:
            serializer.save()
            return Response({"message": "You are registered successfully"}, status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response({"error": "Oops! This account is already registered! Try again."},
                            status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)