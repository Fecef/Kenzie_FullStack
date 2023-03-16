from rest_framework import serializers
from django.shortcuts import get_object_or_404

from products.models import Product
from user.models import User

from .models import Order


class OrderUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "email"]


class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id", "added_by", "name", "price", "category"]
        read_only_fields = fields


class OrderSerializer(serializers.ModelSerializer):
    products = OrderProductSerializer(many=True, read_only=True)
    user = OrderUserSerializer(read_only=True)

    class Meta:
        model = Order
        fields = ["id", "created_at", "status", "user", "products"]
        read_only_fields = ["user", "products"]
        depth = 1

    def create(self, validated_data: dict) -> Order:
        return Order.objects.create(**validated_data)
