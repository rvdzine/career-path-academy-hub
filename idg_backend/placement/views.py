from .serializers import PlacementSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
# Create your views here.

@api_view(['POST'])
def intern(request):
    serializer = PlacementSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "You are registered successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)