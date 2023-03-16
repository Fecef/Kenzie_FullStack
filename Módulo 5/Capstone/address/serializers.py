from rest_framework import serializers

from user.models import User

from .models import Address


class AddressUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "email"]


class AddressSerializer(serializers.ModelSerializer):
    user = AddressUserSerializer(read_only=True)

    class Meta:
        model = Address
        fields = ["state", "city", "zip_code", "street", "number", "user"]
        depth = 1

    def create(self, validated_data):
        return Address.objects.create(**validated_data)
