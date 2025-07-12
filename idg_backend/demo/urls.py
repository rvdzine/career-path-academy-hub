from django.urls import path
from .views import DemoBookingAPIView

urlpatterns = [
    path("book/", DemoBookingAPIView.as_view(), name="demo-booking"),
]
