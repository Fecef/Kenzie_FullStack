from rest_framework import serializers

from genres.models import Genre
from genres.serializers import GenreSerializer

from .models import Movie


class MovieSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True)

    class Meta:
        model = Movie
        fields = ["id", "title", "duration", "premiere", "budget", "overview", "genres"]

    def create(self, validated_data) -> Movie:

        genres_list = validated_data.pop("genres")

        movie = Movie.objects.create(**validated_data)

        for genre_dict in genres_list:
            genre_obj = Genre.objects.get_or_create(name=genre_dict["name"])

            movie.genres.add(genre_obj[0])

        return movie
