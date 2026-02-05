"""
Certificate Generator for Placed Students
This script generates PDF certificates for placed students
"""

from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.lib.enums import TA_CENTER
from io import BytesIO
from datetime import datetime


def generate_certificate(student_name, student_id, certificate_id, company_name, role):
    """
    Generate a certificate PDF for a placed student
    
    Args:
        student_name: Name of the student
        student_id: Unique student ID (e.g., IDS_001)
        certificate_id: Unique certificate ID (e.g., IDSC_001)
        company_name: Name of the company where student is placed
        role: Role/designation of the student
    
    Returns:
        BytesIO object containing the PDF
    """
    buffer = BytesIO()
    
    # Create PDF with landscape A4 size
    page_width, page_height = landscape(A4)
    c = canvas.Canvas(buffer, pagesize=landscape(A4))
    
    # Draw border
    c.setStrokeColor(colors.HexColor('#667eea'))
    c.setLineWidth(3)
    c.rect(30, 30, page_width - 60, page_height - 60, stroke=1, fill=0)
    
    # Inner border
    c.setStrokeColor(colors.HexColor('#f7f7f7'))
    c.setLineWidth(10)
    c.rect(40, 40, page_width - 80, page_height - 80, stroke=1, fill=0)
    
    # Draw decorative corners
    corner_size = 50
    c.setStrokeColor(colors.HexColor('#667eea'))
    c.setLineWidth(2)
    
    # Top-left corner
    c.line(60, page_height - 60, 60 + corner_size, page_height - 60)
    c.line(60, page_height - 60, 60, page_height - 60 - corner_size)
    
    # Top-right corner
    c.line(page_width - 60, page_height - 60, page_width - 60 - corner_size, page_height - 60)
    c.line(page_width - 60, page_height - 60, page_width - 60, page_height - 60 - corner_size)
    
    # Bottom-left corner
    c.line(60, 60, 60 + corner_size, 60)
    c.line(60, 60, 60, 60 + corner_size)
    
    # Bottom-right corner
    c.line(page_width - 60, 60, page_width - 60 - corner_size, 60)
    c.line(page_width - 60, 60, page_width - 60, 60 + corner_size)
    
    # Logo/Header
    c.setFont("Helvetica-Bold", 36)
    c.setFillColor(colors.HexColor('#667eea'))
    c.drawCentredString(page_width / 2, page_height - 100, "iDigitalStudies")
    
    # Certificate Title
    c.setFont("Helvetica-Bold", 42)
    c.setFillColor(colors.HexColor('#333333'))
    c.drawCentredString(page_width / 2, page_height - 150, "CERTIFICATE OF ACHIEVEMENT")
    
    # Subtitle
    c.setFont("Helvetica", 18)
    c.setFillColor(colors.HexColor('#666666'))
    c.drawCentredString(page_width / 2, page_height - 185, "This is to certify that")
    
    # Student Name
    c.setFont("Helvetica-Bold", 36)
    c.setFillColor(colors.HexColor('#667eea'))
    c.drawCentredString(page_width / 2, page_height - 240, student_name)
    
    # Underline for name
    name_width = c.stringWidth(student_name, "Helvetica-Bold", 36)
    c.setStrokeColor(colors.HexColor('#667eea'))
    c.setLineWidth(2)
    c.line(page_width / 2 - name_width / 2, page_height - 245, 
           page_width / 2 + name_width / 2, page_height - 245)
    
    # Body Text
    c.setFont("Helvetica", 16)
    c.setFillColor(colors.HexColor('#555555'))
    
    y_position = page_height - 285
    c.drawCentredString(page_width / 2, y_position, "has successfully completed the Digital Marketing program")
    
    y_position -= 25
    c.drawCentredString(page_width / 2, y_position, "and has been placed at")
    
    # Company Name
    y_position -= 35
    c.setFont("Helvetica-Bold", 20)
    c.setFillColor(colors.HexColor('#667eea'))
    c.drawCentredString(page_width / 2, y_position, company_name)
    
    # Role
    y_position -= 30
    c.setFont("Helvetica", 16)
    c.setFillColor(colors.HexColor('#555555'))
    c.drawCentredString(page_width / 2, y_position, "as a")
    
    y_position -= 30
    c.setFont("Helvetica-Bold", 20)
    c.setFillColor(colors.HexColor('#667eea'))
    c.drawCentredString(page_width / 2, y_position, role)
    
    # Congratulations text
    y_position -= 45
    c.setFont("Helvetica", 14)
    c.setFillColor(colors.HexColor('#555555'))
    first_name = student_name.split()[0]
    c.drawCentredString(page_width / 2, y_position, 
                       f"We congratulate {first_name} on this remarkable achievement")
    y_position -= 20
    c.drawCentredString(page_width / 2, y_position, 
                       "and wish them continued success in their professional journey.")
    
    # Footer with signatures
    footer_y = 120
    
    # Left signature
    left_x = page_width / 4
    c.setStrokeColor(colors.HexColor('#333333'))
    c.setLineWidth(1)
    c.line(left_x - 80, footer_y, left_x + 80, footer_y)
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(colors.HexColor('#333333'))
    c.drawCentredString(left_x, footer_y - 20, "Director")
    c.setFont("Helvetica", 10)
    c.setFillColor(colors.HexColor('#666666'))
    c.drawCentredString(left_x, footer_y - 35, "iDigitalStudies")
    
    # Center - Date and Student ID
    center_x = page_width / 2
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(colors.HexColor('#333333'))
    current_date = datetime.now().strftime("%B %d, %Y")
    c.drawCentredString(center_x, footer_y + 10, f"Date: {current_date}")
    c.drawCentredString(center_x, footer_y - 10, f"Student ID: {student_id}")
    
    # Right signature
    right_x = 3 * page_width / 4
    c.setStrokeColor(colors.HexColor('#333333'))
    c.setLineWidth(1)
    c.line(right_x - 80, footer_y, right_x + 80, footer_y)
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(colors.HexColor('#333333'))
    c.drawCentredString(right_x, footer_y - 20, "Head of Training")
    c.setFont("Helvetica", 10)
    c.setFillColor(colors.HexColor('#666666'))
    c.drawCentredString(right_x, footer_y - 35, "iDigitalStudies")
    
    # Certificate ID at bottom right
    c.setFont("Courier", 9)
    c.setFillColor(colors.HexColor('#999999'))
    c.drawRightString(page_width - 60, 50, f"Certificate ID: {certificate_id}")
    
    # Finalize PDF
    c.showPage()
    c.save()
    
    buffer.seek(0)
    return buffer


def save_certificate_to_file(student_name, student_id, certificate_id, company_name, role, filename):
    """
    Generate and save certificate to a file
    """
    buffer = generate_certificate(student_name, student_id, certificate_id, company_name, role)
    
    with open(filename, 'wb') as f:
        f.write(buffer.getvalue())
    
    return filename
