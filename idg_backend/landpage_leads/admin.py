from django.contrib import admin
from .models import LandpageLead

@admin.register(LandpageLead)
class LandpageLeadAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'city', 'created_at']
    list_filter = ['created_at', 'city']
    search_fields = ['full_name', 'email', 'phone', 'city']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('full_name', 'email', 'phone', 'city')
        }),
        ('Metadata', {
            'fields': ('created_at',)
        }),
    )
