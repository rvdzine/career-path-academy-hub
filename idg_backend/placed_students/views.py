from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.db.models import Q
from .models import PlacedStudent
from .serializers import PlacedStudentSerializer

class PlacedStudentViewSet(viewsets.ModelViewSet):
    serializer_class = PlacedStudentSerializer
    permission_classes = [AllowAny]  # Allow anyone to create/read/update/delete for now
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['student_name', 'company_name', 'student_role', 'student_id', 'certificate_id']
    ordering_fields = ['created_at', 'student_name']
    ordering = ['-created_at']
    
    def get_queryset(self):
        """
        Return active students, evaluated on each request
        """
        return PlacedStudent.objects.filter(is_active=True).order_by('-created_at')
    
    @action(detail=False, methods=['get'])
    def search(self, request):
        """
        Custom search endpoint for searching by student_id or certificate_id
        """
        query = request.query_params.get('q', '')
        
        if not query:
            return Response(
                {'error': 'Search query parameter "q" is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Search by student_id or certificate_id
        students = self.get_queryset().filter(
            Q(student_id__icontains=query) | 
            Q(certificate_id__icontains=query) |
            Q(student_name__icontains=query) |
            Q(company_name__icontains=query)
        )
        
        serializer = self.get_serializer(students, many=True)
        return Response(serializer.data)
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context
