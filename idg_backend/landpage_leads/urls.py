from django.urls import path
from .views import LandpageLeadAPIView

urlpatterns = [
    path('submit/', LandpageLeadAPIView.as_view(), name='landpage-lead-submit'),
]
