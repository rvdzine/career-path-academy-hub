from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import OnlineDemo
from .serializers import OnlineDemoSerializer

class OnlineDemoBookingView(APIView):
    def post(self, request):
        serializer = OnlineDemoSerializer(data=request.data)
        
        if serializer.is_valid():
            try:
                serializer.save()
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
