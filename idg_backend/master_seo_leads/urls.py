from django.urls import path
from .views import MasterSeoLeadAPIView

urlpatterns = [
    path('submit/', MasterSeoLeadAPIView.as_view(), name='master-seo-page-submit'),
]
