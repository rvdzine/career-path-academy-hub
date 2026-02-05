from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PlacedStudentViewSet

router = DefaultRouter()
router.register(r'placed-students', PlacedStudentViewSet, basename='placed-student')

urlpatterns = [
    path('', include(router.urls)),
]
