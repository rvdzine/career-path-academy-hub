from django.contrib import admin
from .models import SalaryReportLead

@admin.register(SalaryReportLead)
class SalaryReportRequestAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'course', 'created_at')
    search_fields = ('full_name', 'email', 'phone', 'course')
    list_filter = ('course', 'created_at')