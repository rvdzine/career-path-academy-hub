from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from django.utils import timezone
from .models import Vacancy
from .serializers import (
    VacancyListSerializer,
    VacancyDetailSerializer,
    VacancyCreateUpdateSerializer
)


class VacancyViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Vacancy CRUD operations
    - List: GET /api/vacancies/ (public - only published)
    - Retrieve: GET /api/vacancies/<slug>/ (public - only published)
    - Create: POST /api/vacancies/ (authenticated)
    - Update: PUT/PATCH /api/vacancies/<slug>/ (authenticated)
    - Delete: DELETE /api/vacancies/<slug>/ (authenticated)
    """
    queryset = Vacancy.objects.all()
    lookup_field = 'slug'
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'company', 'location', 'skills']
    ordering_fields = ['created_at', 'published_at', 'views_count']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return VacancyListSerializer
        elif self.action == 'retrieve':
            return VacancyDetailSerializer
        else:
            return VacancyCreateUpdateSerializer
    
    def get_queryset(self):
        """
        Public users see only published vacancies
        Authenticated users see all vacancies
        """
        queryset = Vacancy.objects.all()
        
        # If user is not authenticated, show only published vacancies
        if not self.request.user.is_authenticated:
            queryset = queryset.filter(status='published')
        
        # Filter by status if provided
        status_param = self.request.query_params.get('status', None)
        if status_param:
            queryset = queryset.filter(status=status_param)
        
        # Filter by job type
        job_type = self.request.query_params.get('job_type', None)
        if job_type:
            queryset = queryset.filter(job_type=job_type)
        
        return queryset
    
    def retrieve(self, request, *args, **kwargs):
        """Get single vacancy and increment view count"""
        instance = self.get_object()
        
        # Increment view count
        instance.views_count += 1
        instance.save(update_fields=['views_count'])
        
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    def perform_create(self, serializer):
        """Set the creator when creating a vacancy"""
        serializer.save(created_by=self.request.user)
    
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def my_vacancies(self, request):
        """Get all vacancies created by the current user"""
        vacancies = Vacancy.objects.filter(created_by=request.user)
        serializer = VacancyListSerializer(vacancies, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def publish(self, request, slug=None):
        """Publish a draft vacancy"""
        vacancy = self.get_object()
        
        if vacancy.status == 'published':
            return Response(
                {'message': 'Vacancy is already published'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        vacancy.status = 'published'
        vacancy.published_at = timezone.now()
        vacancy.save()
        
        serializer = VacancyDetailSerializer(vacancy)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def unpublish(self, request, slug=None):
        """Unpublish a vacancy (set to draft)"""
        vacancy = self.get_object()
        
        if vacancy.status == 'draft':
            return Response(
                {'message': 'Vacancy is already a draft'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        vacancy.status = 'draft'
        vacancy.save()
        
        serializer = VacancyDetailSerializer(vacancy)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def close(self, request, slug=None):
        """Close a vacancy"""
        vacancy = self.get_object()
        
        if vacancy.status == 'closed':
            return Response(
                {'message': 'Vacancy is already closed'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        vacancy.status = 'closed'
        vacancy.save()
        
        serializer = VacancyDetailSerializer(vacancy)
        return Response(serializer.data)
