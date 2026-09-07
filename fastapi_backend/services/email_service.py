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
