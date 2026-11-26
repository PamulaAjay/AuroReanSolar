import logging
import requests

from django.conf import settings


logger = logging.getLogger(__name__)


def send_brevo_email(
    recipient_email,
    recipient_name,
    subject,
    html_content,
):
    url = settings.BREVO_API_URL

    headers = {
        "accept": "application/json",
        "api-key": settings.BREVO_API_KEY,
        "content-type": "application/json"
    }

    payload = {
        "sender": {
            "name": settings.BREVO_SENDER_NAME,
            "email": settings.BREVO_SENDER_EMAIL
        },

        "to": [
            {
                "email": recipient_email,
                "name": recipient_name
            }
        ],
        "subject": subject,
        "htmlContent": html_content
    }

    try:
        response = requests.post(url, json=payload, headers=headers,
                                 timeout=15)
        response.raise_for_status()
        result = response.json()
        logger.info("Email sent successfully to %s", recipient_email)
        return {
            "success": True,
            "message_id": result.get("messageId")
        }
    except requests.RequestException:
        logger.exception("Failed to send email to %s", recipient_email)
        return {
             "success": False,
             "message_id": None
        }
