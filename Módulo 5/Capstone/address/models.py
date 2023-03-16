import uuid

from django.db import models


class Address(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    state = models.CharField(max_length=150)
    city = models.CharField(max_length=150)
    zip_code = models.CharField(max_length=8)
    street = models.CharField(max_length=150)
    number = models.PositiveSmallIntegerField()

    user = models.OneToOneField("user.User", on_delete=models.CASCADE)

    def __repr__(self) -> str:
        return f"<[{self.pk}] {self.user.first_name}'s address>"
