from django.core.management.base import BaseCommand
from django.core.files.base import ContentFile
from placed_students.models import PlacedStudent
from placed_students.certificate_generator import generate_certificate
import os
from pathlib import Path


class Command(BaseCommand):
    help = 'Create dummy placed students with certificates'

    def handle(self, *args, **kwargs):
        # Dummy student data
        students_data = [
            {
                'student_name': 'Aaushi Vasisth',
                'company_name': 'AL Power Infotech',
                'student_role': 'Digital Marketing Analyst',
                'student_bio': 'Passionate digital marketer with expertise in SEO and content strategy. Successfully completed advanced digital marketing training at iDigitalStudies and secured a position at AL Power Infotech.',
            },
            {
                'student_name': 'Aastha Singh',
                'company_name': 'RecruiterSoft',
                'student_role': 'SEO Executive',
                'student_bio': 'SEO specialist focused on improving organic search rankings and driving traffic. Completed comprehensive SEO training and now working with RecruiterSoft.',
            },
            {
                'student_name': 'Apoorv Garg',
                'company_name': 'OMLogic Consulting Pvt. Ltd',
                'student_role': 'SM Intern',
                'student_bio': 'Social media enthusiast with a knack for creating engaging content. Started career as SM Intern at OMLogic Consulting after completing digital marketing course.',
            },
            {
                'student_name': 'Preety Sharma',
                'company_name': 'PetroSpa',
                'student_role': 'Digital Media Executive',
                'student_bio': 'Creative digital media professional specializing in brand management and online campaigns. Currently working at PetroSpa as Digital Media Executive.',
            },
            {
                'student_name': 'Ajay Kumar',
                'company_name': 'Grafiti Technologies',
                'student_role': 'SEO Executive',
                'student_bio': 'Technical SEO expert with strong analytical skills. Joined Grafiti Technologies as SEO Executive after completing digital marketing certification.',
            },
            {
                'student_name': 'Nameera Tyagi',
                'company_name': 'Grafiti Technologies',
                'student_role': 'SEO Executive',
                'student_bio': 'Results-driven SEO professional with expertise in keyword research and on-page optimization. Working at Grafiti Technologies.',
            },
        ]

        self.stdout.write(self.style.SUCCESS('Creating dummy placed students...'))

        for idx, data in enumerate(students_data, start=1):
            # Check if student already exists
            if PlacedStudent.objects.filter(student_name=data['student_name']).exists():
                self.stdout.write(
                    self.style.WARNING(f'Student {data["student_name"]} already exists. Skipping...')
                )
                continue

            # Create student instance (without saving yet)
            student = PlacedStudent(
                student_name=data['student_name'],
                company_name=data['company_name'],
                student_role=data['student_role'],
                student_bio=data['student_bio'],
            )

            # For now, we'll skip the image upload in the command
            # You can manually add images through the admin panel
            # Or you can download placeholder images and add them here

            # Save to generate IDs
            try:
                # Note: You'll need to add a placeholder image or handle this differently
                # For now, we'll skip image requirement
                self.stdout.write(
                    self.style.WARNING(
                        f'Skipping {data["student_name"]} - Please add student image through admin panel'
                    )
                )
                continue

            except Exception as e:
                self.stdout.write(
                    self.style.ERROR(f'Error creating student {data["student_name"]}: {str(e)}')
                )
                continue

        self.stdout.write(
            self.style.SUCCESS(
                'Dummy students creation process completed. Please add student images through the admin panel.'
            )
        )
        self.stdout.write(
            self.style.SUCCESS(
                'After adding images, certificates will be generated automatically or can be uploaded manually.'
            )
        )
