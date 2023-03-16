import uuid

from django.db import models


class Cart(models.Model):
    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)

    user = models.OneToOneField("user.User", on_delete=models.CASCADE)
    products = models.ManyToManyField("products.Product", related_name="carts")

    def __repr__(self) -> str:
        return f"<[{self.pk}] {self.user.first_name}'s cart>"
