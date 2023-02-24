from rest_framework import permissions
from rest_framework.views import Request, View
from .models import User


class MyCustomPermission(permissions.BasePermission):
    def has_object_permission(self, request: Request, view: View, obj: User):
        if not request.user.is_employee and obj == request.user:
            return True
        return request.user.is_employee
