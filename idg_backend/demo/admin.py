from django.contrib import admin
from .models import Demo

@admin.register(Demo)
class DemoAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "course")
    search_fields = ("full_name", "email", "phone", "course")
