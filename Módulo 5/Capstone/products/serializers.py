from rest_framework import serializers

from user.models import User

from .models import Product


class ProductUser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "email"]


class ProductSerializer(serializers.ModelSerializer):
    added_by = ProductUser(read_only=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "price",
            "category",
            "current_inventory",
            "is_avaliable",
            "added_by",
        ]
        read_only_fields = ["is_avaliable"]
        depth = 1

    def create(self, validated_data: dict) -> Product:
        if validated_data["current_inventory"] == 0:
            return Product.objects.create(**validated_data, is_avaliable=False)
        return Product.objects.create(**validated_data)
