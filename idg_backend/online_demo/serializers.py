from rest_framework import serializers
from .models import OnlineDemo

class OnlineDemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OnlineDemo
        fields = ['id', 'full_name', 'phone', 'email', 'course', 'course_title', 'experience_level', 'learning_goals', 'created_at']
        read_only_fields = ['id', 'created_at']
