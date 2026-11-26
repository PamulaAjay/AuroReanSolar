from rest_framework import serializers
from .models import ContactEnquiry


class ContactEnquirySerializers(serializers.ModelSerializer):

    class Meta:
        model = ContactEnquiry
        fields = '__all__'
        read_only_fields = ('id',)


def validate_phone(self, value):
    phone = value.strip()

    if not phone.isascii() or not phone.isdigit():
        raise serializers.ValidationError(
            "Phone number must contain only digits."
        )

    if not 10 <= len(phone) <= 15:
        raise serializers.ValidationError(
            "Please provide a valid phone number."
        )

    return phone
