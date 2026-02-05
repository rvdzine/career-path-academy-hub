from django.contrib import admin
from .models import PlacedStudent

@admin.register(PlacedStudent)
class PlacedStudentAdmin(admin.ModelAdmin):
    list_display = ['student_id', 'student_name', 'company_name', 'student_role', 'certificate_id', 'created_at', 'is_active']
    list_filter = ['is_active', 'created_at', 'company_name']
    search_fields = ['student_name', 'company_name', 'student_role', 'student_id', 'certificate_id']
    readonly_fields = ['student_id', 'certificate_id', 'created_at', 'updated_at']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Student Information', {
            'fields': ('student_id', 'student_name', 'student_image', 'student_bio')
        }),
        ('Placement Details', {
            'fields': ('company_name', 'student_role')
        }),
        ('Certificate', {
            'fields': ('certificate_id', 'certificate')
        }),
        ('Status', {
            'fields': ('is_active',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
