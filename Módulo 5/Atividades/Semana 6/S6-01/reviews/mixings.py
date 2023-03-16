from .models import Review

import ipdb


class ReviewPermissionMixgin:
    def check_custom_permission(self):
        if self.request.method == "GET":
            return True

        self.check_object_permissions(self.request, Review)

    def post(self, request, *args, **kwargs):
        self.check_custom_permission()

        return self.create(request, *args, **kwargs)
