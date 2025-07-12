from django.contrib import admin
from django.urls import path
from .views import intern

urlpatterns = [
    path('student-placement/', intern, name = 'intern')
]