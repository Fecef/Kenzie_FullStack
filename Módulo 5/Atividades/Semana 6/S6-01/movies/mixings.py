from .models import Movie


class MoviePermissionMixing:
    def check_custom_object_permission(self):
        self.check_object_permissions(self.request, Movie)

    def post(self, request, *args, **kwargs):
        self.check_custom_object_permission()

        return self.create(request, *args, **kwargs)