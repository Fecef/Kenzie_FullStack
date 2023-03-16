from rest_framework import permissions
from rest_framework.views import View
from .models import Movie


class IsAdmin(permissions.BasePermission):
    def has_object_permission(self, request, view: View, obj: Movie) -> bool:
        if request.method == "POST":
            return request.user.is_superuser

        return True
