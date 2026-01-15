from django.contrib import admin
from .models import Vacancy

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ['title', 'company', 'location', 'job_type', 'status', 'views_count', 'created_at']
    list_filter = ['status', 'job_type', 'created_at']
    search_fields = ['title', 'company', 'location', 'skills']
    prepopulated_fields = {'slug': ('title', 'company')}
    readonly_fields = ['views_count', 'applications_count', 'created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'company', 'location')
        }),
        ('Job Details', {
            'fields': ('job_type', 'stipend')
        }),
        ('Description', {
            'fields': ('job_description_header', 'job_description_body', 'job_description_file', 'requirements', 'skills')
        }),
        ('Status', {
            'fields': ('status', 'published_at')
        }),
        ('Metadata', {
            'fields': ('created_by', 'views_count', 'applications_count', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def save_model(self, request, obj, form, change):
        if not change:  # If creating new vacancy
            obj.created_by = request.user
        super().save_model(request, obj, form, change)
