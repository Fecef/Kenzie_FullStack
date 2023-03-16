from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import generics

from .models import Movie
from .permissions import IsAdmin
from .serializers import MovieSerializer
from .mixings import MoviePermissionMixing


class MovieView(MoviePermissionMixing, generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdmin]

    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)
