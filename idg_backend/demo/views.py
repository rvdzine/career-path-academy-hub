from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import DemoSerializer
from django.db import IntegrityError

class DemoBookingAPIView(APIView):
    def post(self, request):
        serializer = DemoSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response({"message": "Your Demo is Booked successfully"}, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({"error": "Oops! This demo booking already exists!"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)