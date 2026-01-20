from django.contrib import admin
from .models import Enrollment

@admin.register(Enrollment)
class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "course_title", "experience", "created_at")
    search_fields = ("full_name", "email", "phone", "course_title")
    list_filter = ("experience", "created_at")
    readonly_fields = ("created_at",)
    ordering = ("-created_at",)