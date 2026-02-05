#!/usr/bin/env python
"""
Script to fix existing student IDs to new format
Run this script from the idg_backend directory:
    python3 fix_student_ids.py
"""

import os
import django
import sys

# Setup Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'idg_backend.settings')
django.setup()

from placed_students.models import PlacedStudent


def fix_ids():
    """Update all student IDs to new format"""
    print("=" * 60)
    print("Fixing Student and Certificate IDs")
    print("=" * 60)
    
    students = PlacedStudent.objects.all().order_by('id')
    
    if not students:
        print("No students found in database.")
        return
    
    print(f"\nFound {students.count()} students to update\n")
    
    for idx, student in enumerate(students, start=101):
        old_student_id = student.student_id
        old_cert_id = student.certificate_id
        
        # Update IDs
        student.student_id = f'IDS{idx:05d}'
        student.certificate_id = f'IDSC{idx:05d}'
        student.save()
        
        print(f"✅ {student.student_name}")
        print(f"   Student ID: {old_student_id} → {student.student_id}")
        print(f"   Cert ID: {old_cert_id} → {student.certificate_id}\n")
    
    print("=" * 60)
    print(f"✅ Successfully updated {students.count()} students!")
    print("🎉 All IDs are now in the correct format")
    print("=" * 60)


if __name__ == '__main__':
    fix_ids()
