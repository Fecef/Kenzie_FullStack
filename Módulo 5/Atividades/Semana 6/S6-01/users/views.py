from rest_framework.pagination import PageNumberPagination
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.generics import ListCreateAPIView

from .models import User
from .serializers import UserSerializer
from .permissions import IsAdmin


class UserView(ListCreateAPIView, PageNumberPagination):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdmin]

    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = User.objects.all()

        self.check_object_permissions(self.request, queryset)

        return queryset
