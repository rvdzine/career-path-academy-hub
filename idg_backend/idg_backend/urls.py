"""
URL configuration for idg_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .webhook_views import resend_contact_webhook, resend_landpage_webhook, webhook_status

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/courses/', include('courses.urls')),
    path("api/demo/", include("demo.urls")),
    path("api/online-demo/", include("online_demo.urls")),
    path("api/careers/", include("placement.urls")),
    path("api/contact/", include("contact.urls")),
    path("api/salaryreport/", include("salaryreport.urls")),
    path("api/landpage-leads/", include("landpage_leads.urls")),
    path("api/", include("blog.urls")),
    path("api/", include("vacancy.urls")),
    path("api/", include("placed_students.urls")),
    # JWT Authentication
    path('api/auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Webhook Management APIs
    path('api/webhook/contact/<int:contact_id>/resend/', resend_contact_webhook, name='resend_contact_webhook'),
    path('api/webhook/landpage/<int:lead_id>/resend/', resend_landpage_webhook, name='resend_landpage_webhook'),
    path('api/webhook/status/', webhook_status, name='webhook_status'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
