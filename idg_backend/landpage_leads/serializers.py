from rest_framework import serializers
from .models import LandpageLead

class LandpageLeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandpageLead
        fields = '__all__'
        read_only_fields = ['created_at']
