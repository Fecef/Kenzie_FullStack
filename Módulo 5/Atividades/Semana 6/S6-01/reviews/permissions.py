from rest_framework import permissions
from rest_framework.views import View
from .models import Review


class IsAdminOrCritic(permissions.BasePermission):
    def has_object_permission(self, request, view: View, obj: Review):
        if request._authenticator:
            return request.user.is_superuser or request.user.is_critic
