from rest_framework import permissions
from rest_framework.views import View, Request


class IsVendorOrPost(permissions.BasePermission):
    def has_permission(self, request: Request, view: View) -> bool:
        if request.method == "POST":
            return not request.user.is_vendor

        return True


class IsVendor(permissions.BasePermission):
    def has_permission(self, request: Request, view: View) -> bool:
        return request.user.is_vendor
