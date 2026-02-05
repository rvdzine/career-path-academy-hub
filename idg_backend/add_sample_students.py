#!/usr/bin/env python
"""
Script to add sample placed students to the database
Run this script from the idg_backend directory:
    python add_sample_students.py
"""

import os
import django
import sys

# Setup Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'idg_backend.settings')
django.setup()

from placed_students.models import PlacedStudent
from django.core.files import File
from django.core.files.base import ContentFile
from placed_students.certificate_generator import generate_certificate
import requests
from io import BytesIO

# Sample student data
SAMPLE_STUDENTS = [
    {
        'student_name': 'Aaushi Vasisth',
        'company_name': 'AL Power Infotech',
        'student_role': 'Digital Marketing Analyst',
        'student_bio': 'Passionate digital marketer with expertise in SEO and content strategy. Successfully completed advanced digital marketing training at iDigitalStudies and secured a position at AL Power Infotech. Specializes in data-driven marketing campaigns and analytics.',
    },
    {
        'student_name': 'Aastha Singh',
        'company_name': 'RecruiterSoft',
        'student_role': 'SEO Executive',
        'student_bio': 'SEO specialist focused on improving organic search rankings and driving traffic. Completed comprehensive SEO training and now working with RecruiterSoft. Expert in technical SEO, link building, and keyword research.',
    },
    {
        'student_name': 'Apoorv Garg',
        'company_name': 'OMLogic Consulting Pvt. Ltd',
        'student_role': 'SM Intern',
        'student_bio': 'Social media enthusiast with a knack for creating engaging content. Started career as SM Intern at OMLogic Consulting after completing digital marketing course. Skilled in social media strategy and community management.',
    },
    {
        'student_name': 'Preety Sharma',
        'company_name': 'PetroSpa',
        'student_role': 'Digital Media Executive',
        'student_bio': 'Creative digital media professional specializing in brand management and online campaigns. Currently working at PetroSpa as Digital Media Executive. Experienced in content creation, social media marketing, and brand storytelling.',
    },
    {
        'student_name': 'Ajay Kumar',
        'company_name': 'Grafiti Technologies',
        'student_role': 'SEO Executive',
        'student_bio': 'Technical SEO expert with strong analytical skills. Joined Grafiti Technologies as SEO Executive after completing digital marketing certification. Proficient in Google Analytics, Search Console, and SEO tools.',
    },
    {
        'student_name': 'Nameera Tyagi',
        'company_name': 'Grafiti Technologies',
        'student_role': 'SEO Executive',
        'student_bio': 'Results-driven SEO professional with expertise in keyword research and on-page optimization. Working at Grafiti Technologies. Passionate about improving website visibility and user experience through SEO best practices.',
    },
]


def download_placeholder_image():
    """Download a placeholder image from an API"""
    try:
        # Using a placeholder image service with red background
        response = requests.get('https://ui-avatars.com/api/?size=400&background=dc2626&color=fff&name=Student')
        if response.status_code == 200:
            return BytesIO(response.content)
    except Exception as e:
        print(f"Error downloading placeholder image: {e}")
    return None


def create_sample_students():
    """Create sample placed students in the database"""
    print("=" * 60)
    print("Adding Sample Placed Students")
    print("=" * 60)
    
    created_count = 0
    skipped_count = 0
    
    for idx, student_data in enumerate(SAMPLE_STUDENTS, start=1):
        print(f"\n[{idx}/{len(SAMPLE_STUDENTS)}] Processing: {student_data['student_name']}")
        
        # Check if student already exists
        if PlacedStudent.objects.filter(student_name=student_data['student_name']).exists():
            print(f"  ⚠️  Student already exists. Skipping...")
            skipped_count += 1
            continue
        
        try:
            # Create student instance
            student = PlacedStudent(
                student_name=student_data['student_name'],
                company_name=student_data['company_name'],
                student_role=student_data['student_role'],
                student_bio=student_data['student_bio'],
            )
            
            # Download and attach placeholder image
            print("  📥 Downloading placeholder image...")
            image_data = download_placeholder_image()
            if image_data:
                student.student_image.save(
                    f"{student_data['student_name'].replace(' ', '_').lower()}.jpg",
                    ContentFile(image_data.getvalue()),
                    save=False
                )
                print("  ✅ Image attached")
            else:
                print("  ⚠️  Could not download image. Please add manually.")
                continue
            
            # Save student (this will generate IDs)
            student.save()
            print(f"  ✅ Student created with ID: {student.student_id}")
            
            # Generate certificate
            print("  📄 Generating certificate...")
            try:
                cert_buffer = generate_certificate(
                    student_name=student.student_name,
                    student_id=student.student_id,
                    certificate_id=student.certificate_id,
                    company_name=student.company_name,
                    role=student.student_role
                )
                
                student.certificate.save(
                    f"certificate_{student.certificate_id}.pdf",
                    ContentFile(cert_buffer.getvalue()),
                    save=True
                )
                print(f"  ✅ Certificate generated: {student.certificate_id}")
            except Exception as cert_error:
                print(f"  ⚠️  Certificate generation failed: {cert_error}")
                print("  ℹ️  You can generate it later through admin panel")
            
            created_count += 1
            print(f"  ✅ Successfully created student!")
            
        except Exception as e:
            print(f"  ❌ Error creating student: {str(e)}")
            continue
    
    print("\n" + "=" * 60)
    print("Summary")
    print("=" * 60)
    print(f"✅ Created: {created_count} students")
    print(f"⚠️  Skipped: {skipped_count} students (already exist)")
    print(f"📊 Total in database: {PlacedStudent.objects.count()} students")
    print("\n🎉 Done! Visit http://localhost:3000/placed-students to see the results")
    print("=" * 60)


if __name__ == '__main__':
    create_sample_students()
