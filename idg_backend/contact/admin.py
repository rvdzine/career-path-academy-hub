from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "interested_courses", "experience", "created_at")
    search_fields = ("full_name", "email", "phone", "interested_courses", "experience")
    list_filter = ("interested_courses", "experience", "created_at")
    readonly_fields = ("created_at",)
    ordering = ("-created_at",)