from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from datetime import datetime

from cart.models import Cart

from .models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=127, write_only=True)
    created_at = serializers.SerializerMethodField()
    updated_at = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "password",
            "first_name",
            "last_name",
            "is_admin",
            "is_vendor",
            "is_active",
            "address",
            "created_at",
            "updated_at",
        ]

        extra_kwargs = {
            "username": {
                "validators": [
                    UniqueValidator(
                        queryset=User.objects.all(),
                        message="Username already being used.",
                    )
                ]
            },
            "email": {
                "validators": [
                    UniqueValidator(
                        queryset=User.objects.all(),
                        message="Email already being used.",
                    )
                ]
            },
        }
        read_only_fields = ["address"]
        depth = 1

    def get_created_at(self, obj: User):
        now = datetime.now()
        obj.created_at = now.strftime("%Y-%m-%d %H:%M:%S")

        return obj.created_at

    def get_updated_at(self, obj: User):
        now = datetime.now()
        obj.updated_at = now.strftime("%Y-%m-%d %H:%M:%S")

        return obj.updated_at

    def create(self, validated_data):
        if validated_data.get("is_admin"):
            user = User.objects.create_superuser(**validated_data)
        else:
            user = User.objects.create_user(**validated_data)

        Cart.objects.create(user=user)

        return user
