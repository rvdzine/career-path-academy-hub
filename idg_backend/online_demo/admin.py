from django.contrib import admin
from .models import OnlineDemo

@admin.register(OnlineDemo)
class OnlineDemoAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "course", "experience_level", "created_at")
    search_fields = ("full_name", "email", "phone", "course_title")
    list_filter = ("course", "experience_level", "created_at")
    readonly_fields = ("created_at",)
    ordering = ("-created_at",)
