from rest_framework import serializers
from .models import Blog
from django.contrib.auth.models import User


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name']


class BlogListSerializer(serializers.ModelSerializer):
    """Serializer for blog listing page"""
    author = AuthorSerializer(read_only=True)
    
    class Meta:
        model = Blog
        fields = [
            'id', 'title', 'slug', 'excerpt', 'featured_image',
            'author', 'status', 'published_at', 'is_featured', 'views_count'
        ]
        read_only_fields = ['slug', 'published_at', 'views_count']


class BlogDetailSerializer(serializers.ModelSerializer):
    """Serializer for blog detail page"""
    author = AuthorSerializer(read_only=True)
    
    class Meta:
        model = Blog
        fields = [
            'id', 'title', 'slug', 'excerpt', 'content',
            'meta_description', 'meta_keywords', 'featured_image',
            'author', 'status', 'created_at', 'updated_at', 'published_at',
            'is_featured', 'views_count'
        ]
        read_only_fields = ['slug', 'created_at', 'updated_at', 'published_at', 'views_count']


class BlogCreateUpdateSerializer(serializers.ModelSerializer):
    """Serializer for creating and updating blogs"""
    
    class Meta:
        model = Blog
        fields = [
            'title', 'slug', 'excerpt', 'content',
            'meta_description', 'meta_keywords', 'featured_image',
            'status', 'is_featured'
        ]
        extra_kwargs = {
            'slug': {'required': False}
        }
    
    def validate_meta_description(self, value):
        """Ensure meta description is within SEO best practices"""
        if len(value) > 160:
            raise serializers.ValidationError("Meta description should be 160 characters or less for optimal SEO.")
        if len(value) < 50:
            raise serializers.ValidationError("Meta description should be at least 50 characters for better SEO.")
        return value
    
    def validate_title(self, value):
        """Ensure title is not too long"""
        if len(value) > 500:
            raise serializers.ValidationError("Title is too long. Maximum 500 characters.")
        return value
