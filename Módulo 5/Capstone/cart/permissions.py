from rest_framework import permissions
from rest_framework.views import View, Request


class IsCommonOrAdmin(permissions.BasePermission):
    def has_permission(self, request: Request, view: View):
        return not request.user.is_vendor
