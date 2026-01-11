from rest_framework import viewsets, status, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from django.shortcuts import get_object_or_404
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import os
from .models import Blog
from .serializers import (
    BlogListSerializer,
    BlogDetailSerializer,
    BlogCreateUpdateSerializer
)


class BlogViewSet(viewsets.ModelViewSet):
    """
    ViewSet for Blog CRUD operations
    - List: GET /api/blogs/ (public - only published)
    - Retrieve: GET /api/blogs/<slug>/ (public - only published)
    - Create: POST /api/blogs/ (authenticated)
    - Update: PUT/PATCH /api/blogs/<slug>/ (authenticated)
    - Delete: DELETE /api/blogs/<slug>/ (authenticated)
    """
    queryset = Blog.objects.all()
    lookup_field = 'slug'
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'excerpt', 'content']
    ordering_fields = ['created_at', 'published_at', 'views_count']
    
    def get_serializer_class(self):
        if self.action == 'list':
            return BlogListSerializer
        elif self.action == 'retrieve':
            return BlogDetailSerializer
        else:
            return BlogCreateUpdateSerializer
    
    def get_queryset(self):
        """
        Public users see only published blogs
        Authenticated users see all blogs
        """
        queryset = Blog.objects.all()
        
        # If user is not authenticated, show only published blogs
        if not self.request.user.is_authenticated:
            queryset = queryset.filter(status='published')
        
        # Filter by status if provided
        status_param = self.request.query_params.get('status', None)
        if status_param:
            queryset = queryset.filter(status=status_param)
        
        # Filter by featured
        is_featured = self.request.query_params.get('is_featured', None)
        if is_featured:
            queryset = queryset.filter(is_featured=True)
        
        return queryset
    
    def retrieve(self, request, *args, **kwargs):
        """Get single blog and increment view count"""
        instance = self.get_object()
        
        # Increment view count
        instance.views_count += 1
        instance.save(update_fields=['views_count'])
        
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
    
    def perform_create(self, serializer):
        """Set the author when creating a blog"""
        serializer.save(author=self.request.user)
    
    @action(detail=False, methods=['get'], permission_classes=[IsAuthenticated])
    def my_blogs(self, request):
        """Get all blogs created by the current user"""
        blogs = Blog.objects.filter(author=request.user)
        serializer = BlogListSerializer(blogs, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def publish(self, request, slug=None):
        """Publish a draft blog"""
        blog = self.get_object()
        
        if blog.status == 'published':
            return Response(
                {'message': 'Blog is already published'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        blog.status = 'published'
        blog.save()
        
        serializer = BlogDetailSerializer(blog)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'], permission_classes=[IsAuthenticated])
    def unpublish(self, request, slug=None):
        """Unpublish a blog (set to draft)"""
        blog = self.get_object()
        
        if blog.status == 'draft':
            return Response(
                {'message': 'Blog is already a draft'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        blog.status = 'draft'
        blog.save()
        
        serializer = BlogDetailSerializer(blog)
        return Response(serializer.data)
    
    @action(detail=False, methods=['post'], permission_classes=[IsAuthenticated], parser_classes=[MultiPartParser, FormParser])
    def upload_image(self, request):
        """Upload blog image"""
        if 'image' not in request.FILES:
            return Response(
                {'error': 'No image provided'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        image = request.FILES['image']
        
        # Validate file size (max 5MB)
        if image.size > 5 * 1024 * 1024:
            return Response(
                {'error': 'Image size should be less than 5MB'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Validate file type
        allowed_types = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif']
        if image.content_type not in allowed_types:
            return Response(
                {'error': 'Only JPEG, PNG, WEBP, and AVIF images are allowed'},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Save image
        filename = default_storage.save(f'blog_images/{image.name}', ContentFile(image.read()))
        image_url = request.build_absolute_uri(default_storage.url(filename))
        
        return Response({
            'url': image_url,
            'filename': filename
        }, status=status.HTTP_201_CREATED)
