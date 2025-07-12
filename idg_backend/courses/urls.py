from django.contrib import admin
from django.urls import path
from .views import student_enroll

urlpatterns = [
    path('enroll/', student_enroll, name = 'student-enroll')
]