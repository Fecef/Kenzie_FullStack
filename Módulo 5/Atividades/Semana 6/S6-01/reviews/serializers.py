from rest_framework import serializers
from django.shortcuts import get_object_or_404

from movies.models import Movie
from users.models import User

from .models import Review


class UserReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name"]


class ReviewSerializer(serializers.ModelSerializer):
    critic = UserReviewSerializer(read_only=True)
    stars = serializers.IntegerField(min_value=1, max_value=5)

    class Meta:
        model = Review
        fields = ["id", "stars", "review", "spoilers", "movie_id", "critic"]
        read_only_fields = ["movie_id"]

    def create(self, validated_data):
        movie_id = self.context["view"].kwargs["movie_id"]
        movie = get_object_or_404(Movie, pk=movie_id)

        review = Review.objects.create(**validated_data, movie=movie)

        return review
