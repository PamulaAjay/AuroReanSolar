import logging

from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from django.conf import settings
from .models import ContactEnquiry
from .serializers import ContactEnquirySerializers
from .services.email_service import send_brevo_email
from .services.email_templates import (
    owner_enquiry_email,
    customer_thank_you_email,
)

logger = logging.getLogger(__name__)


class ContactEnquiryView(generics.CreateAPIView):

    queryset = ContactEnquiry.objects.all()
    serializer_class = ContactEnquirySerializers
    permission_classes = [AllowAny]
    throttle_classes = [AnonRateThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Save customer enquiry in database
        enquiry = serializer.save()

        # Send notification email to owner
        owner_email_result = send_brevo_email(
            recipient_email=settings.OWNER_EMAIL,
            recipient_name="Aurorean Solar owner",
            subject="New Customer Enquiry - Aurorean Solar",
            html_content=owner_enquiry_email(enquiry)
        )

        # Send thank-you email to customer
        customer_email_result = send_brevo_email(
            recipient_email=enquiry.email,
            recipient_name=enquiry.full_name,
            subject="Thank You for Contacting Aurorean Solar",
            html_content=customer_thank_you_email(enquiry)
        )

        if not owner_email_result["success"]:
            logger.error("Owner notification failed for enquiry ID %s",
                         enquiry.id)

        if not customer_email_result["success"]:
            logger.error("Customer thank-you email failed for enquiry ID %s",
                         enquiry.id)

        return Response(
            {
                "success": True,
                "message": "Your enquiry has been submitted successfully.",
                "data": {
                    "id": enquiry.id,
                    "name": enquiry.full_name,
                    "email": enquiry.email,
                    "phone": enquiry.phone,
                    "property_type": enquiry.property_type,
                    "city": enquiry.city,
                    "average_monthly_electricity_bill": str(
                        enquiry.average_monthly_electricity_bill),
                    "how_can_we_help": enquiry.how_can_we_help,
                    "owner_email_status": owner_email_result["success"],
                    "customer_email_status": customer_email_result["success"]
                }
            },
            status=status.HTTP_201_CREATED
        )
