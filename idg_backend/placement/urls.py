from django.contrib import admin
from django.urls import path
from .views import intern, company_register

urlpatterns = [
    path('student-placement/', intern, name = 'intern'),
    path('recruiter-entry/', company_register, name = 'company-register')
]