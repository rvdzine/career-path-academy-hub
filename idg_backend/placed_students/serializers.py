from rest_framework import serializers
from .models import PlacedStudent

class PlacedStudentSerializer(serializers.ModelSerializer):
    student_image_url = serializers.SerializerMethodField()
    certificate_url = serializers.SerializerMethodField()
    
    class Meta:
        model = PlacedStudent
        fields = [
            'id',
            'student_id',
            'certificate_id',
            'student_name',
            'student_image',
            'student_image_url',
            'company_name',
            'student_role',
            'student_bio',
            'certificate',
            'certificate_url',
            'created_at',
            'updated_at',
            'is_active'
        ]
        read_only_fields = ['student_id', 'certificate_id', 'created_at', 'updated_at']
    
    def create(self, validated_data):
        # Explicitly ensure is_active is True for new students
        validated_data['is_active'] = True
        return super().create(validated_data)
    
    def get_student_image_url(self, obj):
        request = self.context.get('request')
        if obj.student_image and hasattr(obj.student_image, 'url'):
            if request:
                return request.build_absolute_uri(obj.student_image.url)
            return obj.student_image.url
        return None
    
    def get_certificate_url(self, obj):
        request = self.context.get('request')
        if obj.certificate and hasattr(obj.certificate, 'url'):
            if request:
                return request.build_absolute_uri(obj.certificate.url)
            return obj.certificate.url
        return None
