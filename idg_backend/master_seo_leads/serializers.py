from rest_framework import serializers
from .models import MasterseoLeads

class MasterSeoLeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = MasterseoLeads
        fields = '__all__'
        read_only_fields = ['created_at']
