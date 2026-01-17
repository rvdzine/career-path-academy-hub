from django.urls import path
from .views import OnlineDemoBookingView

urlpatterns = [
    path('book/', OnlineDemoBookingView.as_view(), name='online_demo_booking'),
]
