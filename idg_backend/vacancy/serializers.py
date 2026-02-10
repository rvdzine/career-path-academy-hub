from rest_framework import serializers
from .models import Vacancy
from django.contrib.auth.models import User

class VacancyListSerializer(serializers.ModelSerializer):
    """Serializer for listing vacancies"""
    skills_list = serializers.SerializerMethodField()
    requirements_list = serializers.SerializerMethodField()
    created_by_name = serializers.SerializerMethodField()
    
    class Meta:
        model = Vacancy
        fields = [
            'id', 'slug', 'title', 'company', 'location', 'job_type',
            'stipend', 'status', 'created_at', 'published_at',
            'views_count', 'applications_count', 'skills_list', 'requirements_list',
            'created_by_name', 'job_description_header', 'job_description_body', 
            'job_description_file'
        ]
    
    def get_skills_list(self, obj):
        return obj.get_skills_list()
    
    def get_requirements_list(self, obj):
        return obj.get_requirements_list()
    
    def get_created_by_name(self, obj):
        return obj.created_by.username if obj.created_by else None


class VacancyDetailSerializer(serializers.ModelSerializer):
    """Serializer for vacancy details"""
    skills_list = serializers.SerializerMethodField()
    requirements_list = serializers.SerializerMethodField()
    created_by_name = serializers.SerializerMethodField()
    
    class Meta:
        model = Vacancy
        fields = [
            'id', 'slug', 'title', 'company', 'location', 'job_type',
            'stipend', 'job_description_header', 'job_description_body', 
            'job_description_file', 'requirements', 'skills',
            'status', 'created_at', 'updated_at', 'published_at',
            'views_count', 'applications_count', 'skills_list',
            'requirements_list', 'created_by_name'
        ]
    
    def get_skills_list(self, obj):
        return obj.get_skills_list()
    
    def get_requirements_list(self, obj):
        return obj.get_requirements_list()
    
    def get_created_by_name(self, obj):
        return obj.created_by.username if obj.created_by else None


class VacancyCreateUpdateSerializer(serializers.ModelSerializer):
    """Serializer for creating/updating vacancies"""
    
    class Meta:
        model = Vacancy
        fields = [
            'title', 'company', 'location', 'job_type',
            'stipend', 'job_description_header', 'job_description_body', 
            'job_description_file', 'requirements', 'skills', 'status'
        ]
    
    def validate(self, data):
        """Validate that at least one job description method is provided"""
        has_body = data.get('job_description_body') and data.get('job_description_body').strip()
        has_file = data.get('job_description_file')
        
        if not has_body and not has_file:
            raise serializers.ValidationError({
                'job_description': "Either job description body or job description file must be provided"
            })
        return data
