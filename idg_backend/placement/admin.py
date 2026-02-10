from django.contrib import admin
from .models import Register_For_Job, Recruiter

@admin.register(Register_For_Job)
class RegisterForJobAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "phone", "experience_level", "created_at")
    search_fields = ("full_name", "email", "phone", "key_skills")
    list_filter = ("experience_level", "created_at")
    readonly_fields = ("created_at",)
    ordering = ("-created_at",)

@admin.register(Recruiter)
class RecruiterAdmin(admin.ModelAdmin):
    list_display = ("company_name", "company_mail", "contact_person_name", "phone_number", "job_profile", "job_opening_count", "submitted_at")
    search_fields = ("company_name", "company_mail", "contact_person_name", "job_profile")
    list_filter = ("industry_type", "employee_count", "submitted_at")
    readonly_fields = ("submitted_at",)
    ordering = ("-submitted_at",)