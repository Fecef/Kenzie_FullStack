import uuid

from django.db import models


class Review(models.Model):
    """
    Classe modelo de reviews
    """

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    stars = models.PositiveSmallIntegerField()
    review = models.TextField()
    spoilers = models.BooleanField(default=False, null=True, blank=True)

    movie = models.ForeignKey(
        "movies.Movie", on_delete=models.CASCADE, related_name="reviews"
    )

    critic = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, related_name="reviews"
    )

    class Meta:
        ordering = ("stars",)

    def __str__(self) -> str:
        return self.review
