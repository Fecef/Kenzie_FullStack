from django.db import models
from user.models import User


class RatingMovie(models.TextChoices):
    PG = "PG"
    PG_13 = "PG-13"
    R = "R"
    NC_17 = "NC-17"
    DEFAULT = "G"


class Movie(models.Model):
    title = models.CharField(max_length=127)
    duration = models.CharField(max_length=10, null=True)
    rating = models.CharField(
        max_length=20, choices=RatingMovie.choices, default=RatingMovie.DEFAULT
    )
    synopsis = models.TextField(null=True)

    user = models.ForeignKey(
        "user.User", on_delete=models.CASCADE, related_name="movies"
    )

    user_order = models.ManyToManyField(
        User, through="MovieOrder", related_name="movie_order"
    )

    def __repr__(self) -> str:
        return f"<[{self.pk}] {self.title}>"


class MovieOrder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    buyed_at = models.DateTimeField(auto_now_add=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
