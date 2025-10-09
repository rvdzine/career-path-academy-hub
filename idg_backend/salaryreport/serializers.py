from rest_framework import serializers
from .models import SalaryReportLead

class SalaryReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = SalaryReportLead
        fields = '__all__'
