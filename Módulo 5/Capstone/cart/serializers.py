from rest_framework import serializers

from products.models import Product

from .models import Cart


class CartProducts(serializers.ModelSerializer):
    id = serializers.UUIDField()

    class Meta:
        model = Product
        fields = ["id", "added_by", "name", "price", "category", "is_avaliable"]
        read_only_fields = fields

    def create(self, validated_data: dict) -> Product:
        return Product.objects.create(**validated_data)


class CartSerializer(serializers.ModelSerializer):
    products = CartProducts(many=True)

    class Meta:
        model = Cart
        fields = ["products"]

    def create(self, validated_data):
        products = validated_data.pop("products")
        cart_add = self.context["request"].user.cart

        for product_id in products:
            instance = Product.objects.get(pk=product_id["id"])
            cart_add.products.add(instance)

        return cart_add
