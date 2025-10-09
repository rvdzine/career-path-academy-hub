from django.urls import path
from .views import submit_salary_report

urlpatterns = [
    path('submit/', submit_salary_report, name='submit-salary-report'),
]
