from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import IntegrityError
from .serializers import SalaryReportSerializer
from django.views.decorators.csrf import csrf_exempt


@api_view(['POST'])
@csrf_exempt
def submit_salary_report(request):
    serializer = SalaryReportSerializer(data=request.data)
    if serializer.is_valid():
        try:
            serializer.save()
            return Response({"message": "Details submitted successfully!"}, status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response({"error": "This record already exists!"}, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
