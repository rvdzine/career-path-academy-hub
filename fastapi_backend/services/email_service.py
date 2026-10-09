import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import pytz
from ..config import settings

def send_lead_notification(lead_type: str, lead_data: dict) -> bool:
    """
    Sends an email notification via Gmail SMTP when a new lead is submitted.
    Matches the exact email design and format used in the original backend.
    """
    if not settings.EMAIL_HOST_USER or not settings.EMAIL_HOST_PASSWORD:
        print(f"[Email Service] Email credentials not configured. Skipping email for {lead_type}.")
        return False

    recipients = settings.notification_email_list
    if not recipients:
        recipients = [settings.EMAIL_HOST_USER]

    # Format lead table rows
    formatted_rows = []
    for key, value in lead_data.items():
        formatted_key = key.replace('_', ' ').title()
        formatted_rows.append(f"""
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #333; color: #e0e0e0; font-weight: 600;">
                    {formatted_key}
                </td>
                <td style="padding: 12px; border-bottom: 1px solid #333; color: #ffffff;">
                    {value}
                </td>
            </tr>
        """)
    lead_details_html = ''.join(formatted_rows)

    # Current IST timestamp
    ist_tz = pytz.timezone('Asia/Kolkata')
    current_time_ist = datetime.now(ist_tz)
    timestamp = current_time_ist.strftime('%d %B %Y, %I:%M %p IST')

    subject = f'🎯 New {lead_type} Lead - iDigital Studies'

    # Plain text version
    plain_message = f"""
NEW {lead_type.upper()} LEAD RECEIVED

{chr(10).join([f"{key.replace('_', ' ').title()}: {value}" for key, value in lead_data.items()])}

Received at: {timestamp}

Action Required: Please follow up with this lead as soon as possible.

View in Admin Panel: {settings.ADMIN_PANEL_URL}

---
This is an automated notification from iDigital Studies Lead Management System.
    """.strip()

    # HTML version
    html_message = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead Notification</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a; padding: 40px 20px;">
            <tr>
                <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(220, 38, 38, 0.2);">
                        <tr>
                            <td style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 30px; text-align: center;">
                                <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                                    🎯 New Lead Alert
                                </h1>
                                <p style="margin: 10px 0 0 0; color: #fee2e2; font-size: 16px; font-weight: 500;">
                                    {lead_type.upper()} LEAD RECEIVED
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 40px 30px;">
                                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #262626; border-radius: 8px; overflow: hidden; border: 1px solid #404040;">
                                    <tr>
                                        <td style="padding: 20px; background-color: #1f1f1f; border-bottom: 2px solid #dc2626;">
                                            <h2 style="margin: 0; color: #dc2626; font-size: 18px; font-weight: 600; text-transform: uppercase;">
                                                📋 Lead Details
                                            </h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 0;">
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                {lead_details_html}
                                            </table>
                                        </td>
                                    </tr>
                                </table>

                                <div style="margin-top: 25px; padding: 15px; background-color: #262626; border-left: 4px solid #dc2626; border-radius: 4px;">
                                    <p style="margin: 0; color: #a3a3a3; font-size: 14px;">
                                        <strong style="color: #e0e0e0;">⏰ Received at:</strong> {timestamp}
                                    </p>
                                </div>

                                <div style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%); border-radius: 8px; text-align: center;">
                                    <p style="margin: 0 0 15px 0; color: #fecaca; font-size: 16px; font-weight: 600;">
                                        ⚡ ACTION REQUIRED
                                    </p>
                                    <p style="margin: 0 0 20px 0; color: #fee2e2; font-size: 14px;">
                                        Please follow up with this lead as soon as possible to maximize conversion.
                                    </p>
                                    <a href="{settings.ADMIN_PANEL_URL}" style="display: inline-block; padding: 12px 30px; background-color: #dc2626; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                                        📊 View in Admin Panel
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="background-color: #0a0a0a; padding: 25px 30px; text-align: center; border-top: 1px solid #262626;">
                                <p style="margin: 0; color: #dc2626; font-size: 16px; font-weight: 700;">
                                    iDigital Studies Lead Management System
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    """

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = subject
        msg["From"] = settings.DEFAULT_FROM_EMAIL or settings.EMAIL_HOST_USER
        msg["To"] = ", ".join(recipients)

        part1 = MIMEText(plain_message, "plain")
        part2 = MIMEText(html_message, "html")
        msg.attach(part1)
        msg.attach(part2)

        with smtplib.SMTP("smtp.gmail.com", 587, timeout=15) as server:
            server.starttls()
            server.login(settings.EMAIL_HOST_USER, settings.EMAIL_HOST_PASSWORD)
            server.sendmail(msg["From"], recipients, msg.as_string())

        print(f"[Email Service] Lead email notification sent successfully to {len(recipients)} recipient(s).")
        return True
    except Exception as e:
        print(f"[Email Service] Failed to send lead notification: {e}")
        return False

def send_student_certificate_email(
    student_name: str,
    recipient_email: str,
    course_name: str,
    certificate_id: str,
    issue_date = None,
    duration: str = "3 Months",
    course_mode: str = "Offline",
    pdf_bytes: bytes = None,
    png_bytes: bytes = None,
    verification_url: str = None,
    copy_to_self: bool = True,
):
    """
    Sends the official course completion certificate directly to the student's email
    via Zoho SMTP with a branded HTML template and the certificate attached as a PDF document.
    Also sends an envelope copy to the sender/self if copy_to_self is enabled.
    """
    import ssl
    from email.mime.application import MIMEApplication
    from datetime import date

    if not recipient_email or not recipient_email.strip():
        return False, "Recipient email address is missing."

    clean_email = recipient_email.strip().lower()
    clean_name = student_name.strip().title()
    clean_course = course_name.strip()
    clean_cert_id = certificate_id.strip()

    if isinstance(issue_date, (date, datetime)):
        formatted_date = issue_date.strftime("%B %d, %Y")
    else:
        formatted_date = datetime.now().strftime("%B %d, %Y")

    formatted_mode = course_mode.strip().title() if course_mode else "Offline"
    formatted_duration = duration.strip() if duration else "3 Months"
    verify_link = verification_url or f"{settings.SITE_URL}/verify-certificate/{clean_cert_id}"

    sender_name = settings.MAIL_FROM_NAME or "CyberShield"
    sender_email = settings.MAIL_FROM_EMAIL or settings.MAIL_USER
    
    # Resolve copy-to-self target address
    copy_email = None
    if copy_to_self and settings.MAIL_COPY_TO_SELF:
        copy_target = (settings.MAIL_COPY_EMAIL or sender_email).strip().lower()
        if copy_target:
            copy_email = copy_target

    to_addrs = [clean_email]
    if copy_email and copy_email != clean_email and copy_email not in to_addrs:
        to_addrs.append(copy_email)

    subject = f"🎓 Certificate of Completion: {clean_course} - {clean_name}"

    plain_text = f"""
Dear {clean_name},

Congratulations! We are delighted to award you this Certificate of Completion for successfully finishing the {clean_course} at Institute of Digital Studies (IDS).

CERTIFICATE DETAILS:
------------------------------------------
Student Name: {clean_name}
Course: {clean_course}
Certificate ID: {clean_cert_id}
Date of Issue: {formatted_date}
Duration: {formatted_duration}
Mode: {formatted_mode}

VERIFY YOUR CREDENTIAL:
You and prospective employers can verify your credential online at:
{verify_link}

Your official printable certificate document is attached to this email.

We wish you tremendous success in your career journey!

Warm regards,
{sender_name} & Institute of Digital Studies
Website: {settings.SITE_URL}
""".strip()

    html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Certificate of Completion</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; padding: 36px 12px;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="max-width: 620px; width: 100%; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08); border: 1px solid #e2e8f0;">
          <tr>
            <td style="background-color: #ffffff; padding: 40px 32px 24px; text-align: center; border-bottom: 1px solid #e2e8f0;">
              <h1 style="margin: 0; color: #0f172a; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; line-height: 1.25;">
                Congratulations, {clean_name}! 🎓
              </h1>
              <p style="margin: 10px 0 0 0; color: #475569; font-size: 14px; line-height: 1.5;">
                You have successfully earned your certification from <strong style="color: #0f172a;">Institute of Digital Studies</strong>
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding: 36px 32px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.6; color: #334155;">
                Dear <strong>{clean_name}</strong>,
              </p>
              <p style="margin: 0 0 24px 0; font-size: 14px; line-height: 1.65; color: #475569;">
                It is with great pleasure that we award you this <strong>Certificate of Completion</strong> for demonstrating exceptional dedication and mastery throughout the <strong>{clean_course}</strong>.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 16px; border: 1px solid #e2e8f0; margin-bottom: 28px; overflow: hidden;">
                <tr>
                  <td style="padding: 16px 20px; background-color: #f1f5f9; border-bottom: 1px solid #e2e8f0;">
                    <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #475569;">
                      📜 Credential Record
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-size: 13px; font-weight: 500; width: 38%;">Student Name</td>
                        <td style="padding: 6px 0; color: #0f172a; font-size: 13px; font-weight: 700;">{clean_name}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-size: 13px; font-weight: 500;">Course</td>
                        <td style="padding: 6px 0; color: #0f172a; font-size: 13px; font-weight: 700;">{clean_course}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-size: 13px; font-weight: 500;">Certificate ID</td>
                        <td style="padding: 6px 0; color: #047857; font-size: 13px; font-weight: 800; font-family: monospace;">{clean_cert_id}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-size: 13px; font-weight: 500;">Date of Issue</td>
                        <td style="padding: 6px 0; color: #0f172a; font-size: 13px; font-weight: 600;">{formatted_date}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-size: 13px; font-weight: 500;">Duration & Mode</td>
                        <td style="padding: 6px 0; color: #0f172a; font-size: 13px; font-weight: 600;">{formatted_duration} • {formatted_mode}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px; text-align: center;">
                <tr>
                  <td align="center">
                    <a href="{verify_link}" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #fe4759 0%, #e0384a 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-weight: 700; font-size: 14px; box-shadow: 0 4px 14px rgba(254, 71, 89, 0.35); letter-spacing: 0.2px;">
                      🔍 Verify Certificate Online
                    </a>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px; padding: 14px 18px; margin-bottom: 24px;">
                <tr>
                  <td style="color: #065f46; font-size: 13px; line-height: 1.5;">
                    📎 <strong>Attachment:</strong> Your high-resolution print-ready certificate document (PDF) is attached directly to this email for your records and resume.
                  </td>
                </tr>
              </table>

              <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #64748b;">
                Share your accomplishment with your network on LinkedIn, add it to your portfolio, and tag <strong>Institute of Digital Studies</strong>!
              </p>
            </td>
          </tr>

          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px 32px; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #334155;">
                Institute of Digital Studies (IDS) & {sender_name}
              </p>
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                This email was sent to {clean_email}. Verification URL: <a href="{verify_link}" style="color: #fe4759; text-decoration: none;">{verify_link}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
""".strip()

    try:
        msg = MIMEMultipart("mixed")
        msg["Subject"] = subject
        msg["From"] = f'"{sender_name}" <{sender_email}>'
        msg["To"] = clean_email

        alt_part = MIMEMultipart("alternative")
        alt_part.attach(MIMEText(plain_text, "plain", "utf-8"))
        alt_part.attach(MIMEText(html_content, "html", "utf-8"))
        msg.attach(alt_part)

        safe_filename = clean_cert_id.replace("/", "_").replace(" ", "_")

        if pdf_bytes:
            pdf_attachment = MIMEApplication(pdf_bytes, _subtype="pdf")
            pdf_attachment.add_header(
                "Content-Disposition",
                "attachment",
                filename=f"{safe_filename}.pdf",
            )
            msg.attach(pdf_attachment)

        if png_bytes and not pdf_bytes:
            png_attachment = MIMEApplication(png_bytes, _subtype="png")
            png_attachment.add_header(
                "Content-Disposition",
                "attachment",
                filename=f"{safe_filename}.png",
            )
            msg.attach(png_attachment)

        context = ssl.create_default_context()
        if settings.MAIL_PORT == 465 or settings.MAIL_SECURE:
            with smtplib.SMTP_SSL(settings.MAIL_HOST, settings.MAIL_PORT, context=context, timeout=25) as server:
                server.login(settings.MAIL_USER, settings.MAIL_PASS)
                server.sendmail(sender_email, to_addrs, msg.as_string())
        else:
            with smtplib.SMTP(settings.MAIL_HOST, settings.MAIL_PORT, timeout=25) as server:
                server.starttls(context=context)
                server.login(settings.MAIL_USER, settings.MAIL_PASS)
                server.sendmail(sender_email, to_addrs, msg.as_string())

        copy_note = f" (and a copy was delivered to your inbox at {copy_email})" if copy_email and copy_email in to_addrs and copy_email != clean_email else ""
        success_msg = f"Certificate successfully emailed to {clean_email}{copy_note}."
        print(f"[Email Service] {success_msg}")
        return True, success_msg
    except Exception as e:
        error_msg = f"Failed to send email to {clean_email}: {str(e)}"
        print(f"[Email Service Error] {error_msg}")
        return False, error_msg
