from django.db import models


class ContactEnquiry(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    property_type = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    average_monthly_electricity_bill = models.DecimalField(max_digits=10,
                                                           decimal_places=2)
    how_can_we_help = models.TextField()
