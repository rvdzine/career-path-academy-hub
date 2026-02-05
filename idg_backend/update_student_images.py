#!/usr/bin/env python
"""
Script to update student images with red background
Run this script from the idg_backend directory:
    python3 update_student_images.py
"""

import os
import django
import sys

# Setup Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'idg_backend.settings')
django.setup()

from placed_students.models import PlacedStudent
from django.core.files.base import ContentFile
import requests
from io import BytesIO


def download_red_placeholder_image(name):
    try:
        # Using initials from name
        initials = ''.join([word[0] for word in name.split()[:2]])
        response = requests.get(f'https://ui-avatars.com/api/?size=400&background=dc2626&color=fff&name={initials}&bold=true&font-size=0.4')
        if response.status_code == 200:
            return BytesIO(response.content)
    except Exception as e:
        print(f"Error downloading image: {e}")
    return None


def update_images():
    """Update all student images with red background"""
    print("=" * 60)
    print("Updating Student Images to Red Background")
    print("=" * 60)
    
    students = PlacedStudent.objects.all()
    updated_count = 0
    
    for student in students:
        print(f"\n Updating image for: {student.student_name}")
        
        try:
            image_data = download_red_placeholder_image(student.student_name)
            if image_data:
                if student.student_image:
                    student.student_image.delete(save=False)
                
                student.student_image.save(
                    f"{student.student_name.replace(' ', '_').lower()}.png",
                    ContentFile(image_data.getvalue()),
                    save=True
                )
                print(f"Image updated successfully")
                updated_count += 1
            else:
                print(f"Could not download image")
        except Exception as e:
            print(f"Error: {str(e)}")
    
    print("\n" + "=" * 60)
    print(f"Updated {updated_count} out of {students.count()} student images")
    print("Done! Refresh your browser to see the changes")
    print("=" * 60)


if __name__ == '__main__':
    update_images()
