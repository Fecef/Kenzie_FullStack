import uuid

from django.db import models


class Product(models.Model):
    class Meta:
        ordering = ("name",)

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.CharField(max_length=50)
    current_inventory = models.PositiveSmallIntegerField()
    is_avaliable = models.BooleanField(default=True)

    added_by = models.ForeignKey(
        "user.User", on_delete=models.CASCADE, related_name="products"
    )

    def __repr__(self) -> str:
        return f"<[{self.pk}] {self.name} | is_avaliable={self.is_avaliable}>"
