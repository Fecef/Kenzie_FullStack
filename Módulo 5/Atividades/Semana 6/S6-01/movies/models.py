import uuid

from django.db import models


class Movie(models.Model):
    """
    Classe modelo de filmes
    """

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    title = models.CharField(max_length=127)
    duration = models.DurationField()
    premiere = models.DateField()
    budget = models.DecimalField(max_digits=12, decimal_places=2)
    overview = models.TextField(null=True, blank=True)

    user = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, related_name="movies"
    )

    genres = models.ManyToManyField("genres.Genre", related_name="movies")

    class Meta:
        ordering = ("title",)

    def __str__(self) -> str:
        return self.title
