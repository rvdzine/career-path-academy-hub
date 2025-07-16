from django.contrib import admin
from django.urls import path
from .views import contact_info

urlpatterns = [
    path('contact/', contact_info, name = 'contact')
]