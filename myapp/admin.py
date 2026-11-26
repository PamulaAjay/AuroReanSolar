from django.contrib import admin
from .models import ContactEnquiry


@admin.register(ContactEnquiry)
class ContactEnquiryAdmin(admin.ModelAdmin):

    list_display = (
        'id',
        'full_name',
        'email',
        'phone',
        'property_type',
        'city',
        'average_monthly_electricity_bill',
        'how_can_we_help',
    )

    search_fields = (
        'full_name',
        'email',
        'phone'
    )

    list_filter = (
        'property_type',
        'city',
    )

    readonly_fields = (
        'full_name',
        'email',
        'phone',
        'property_type',
        'city',
        'average_monthly_electricity_bill',
        'how_can_we_help',
    )
