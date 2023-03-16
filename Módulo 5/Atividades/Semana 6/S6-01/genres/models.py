import uuid

from django.db import models


class Genre(models.Model):
    """
    Classe modelo de genero de filmes
    """

    id = models.UUIDField(default=uuid.uuid4, primary_key=True, editable=False)
    name = models.CharField(max_length=127)

    class Meta:
        ordering = ("name",)

    def __str__(self) -> str:
        return self.name
