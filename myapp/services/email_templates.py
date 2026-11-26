from django.utils.html import escape


def owner_enquiry_email(enquiry):

    name = escape(enquiry.full_name)
    email = escape(enquiry.email)
    phone = escape(enquiry.phone)
    property_type = escape(enquiry.property_type)
    city = escape(enquiry.city)
    average_monthly_electricity_bill = escape(
        enquiry.average_monthly_electricity_bill)
    how_can_we_help = escape(enquiry.how_can_we_help)

    return f"""
    <html>
       <body>
          <h2>New Contact Enquiry</h2>
          <p>You have received a new contact
          enquiry with the following details:</p>
          <h3>Contact Details:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Property Type:</strong> {property_type}</p>
          <p><strong>City:</strong> {city}</p>
          <p><strong>Average Monthly Electricity Bill:</strong> {
              average_monthly_electricity_bill}</p>
          <p><strong>How Can We Help:</strong> {how_can_we_help}</p>

          <br>
          <p>Best regards,</p>
          <p>Aurorean solar Team</p>
       </body>
    </html>
    """


def customer_thank_you_email(enquiry):
    name = escape(enquiry.full_name)

    return f"""
        <html>
            <body>
                <h2>Hello {name},</h2>

                <p>Thank you for contacting Aurorean Solar.<p>

                <p>We have received your enquiry</p>

                <p>Our team will review your requirements
                    and contact you shortly.</p>

                <br>

                <p>Best regards,</p>
                <p>Aurorean solar Team</p>

                </body>
            </html>
        """
