from django.contrib import admin
from .models import MasterseoLeads

@admin.register(MasterseoLeads)
class MasterSeoLeadAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'phone', 'role', 'created_at']
    list_filter = ['created_at', 'role']
    search_fields = ['full_name', 'email', 'phone', 'role']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('full_name', 'email', 'phone', 'role')
        }),
        ('Metadata', {
            'fields': ('created_at',)
        }),
    )
