from users.models import User
from django.core.management import base


class Command(base.BaseCommand):
    help = "Create random admin users."

    def add_arguments(self, parser) -> None:
        parser.add_argument("-u", "--username", type=str, help="Set a username.")
        parser.add_argument("-p", "--password", type=str, help="Set a password.")
        parser.add_argument("-e", "--email", type=str, help="Set a email.")

    def handle(self, *args, **options):
        username = options["username"] or "admin"
        password = options["password"] or "admin1234"
        email = options["email"] or f"{username}@example.com"

        admin_new = User(
            **{
                "username": username,
                "email": email,
                "first_name": "admin",
                "last_name": "admin",
                "password": password,
                "is_superuser": True,
            }
        )

        found_username = User.objects.filter(username=admin_new.username).first()
        found_email = User.objects.filter(email=admin_new.email).first()

        if found_username:
            raise base.CommandError(f"Username `{username}` already taken.")
        if found_email:
            raise base.CommandError(f"Email `{email}` already taken.")

        admin_new.set_password(password)

        admin_new.save()
       
        self.stdout.write(
            self.style.SUCCESS(f"Admin `{admin_new.username}` successfully created!")
        )
