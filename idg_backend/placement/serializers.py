from rest_framework import serializers
from .models import Register_For_Job, Recruiter
import json

class RegisterForJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register_For_Job
        fields = '__all__'
    
    def validate_job_titles(self, value):
        """Parse job_titles if it comes as a JSON string"""
        if isinstance(value, str):
            try:
                return json.loads(value)
            except json.JSONDecodeError:
                raise serializers.ValidationError("Invalid JSON format for job_titles")
        return value


class RecruiterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = '__all__'