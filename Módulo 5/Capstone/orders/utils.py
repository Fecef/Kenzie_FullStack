from django.core.mail import send_mail
from django.conf import settings


def send_email_user(order):
    subject = "Order updated"
    message = f"Your order {order.id} has been updated. New status: {order.status}"
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [order.user.email]

    send_mail(subject, message, email_from, recipient_list, fail_silently=False)
