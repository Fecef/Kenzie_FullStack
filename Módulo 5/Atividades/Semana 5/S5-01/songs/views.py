from rest_framework.generics import ListCreateAPIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.pagination import PageNumberPagination
from django.shortcuts import get_object_or_404
from albums.models import Album
from .models import Song
from .serializers import SongSerializer

class SongView(ListCreateAPIView, PageNumberPagination):
    """
    Obtençao e criaçao de música.
    """
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    serializer_class = SongSerializer

    def perform_create(self, serializer):
        album = get_object_or_404(Album, pk=self.kwargs["pk"])
        return serializer.save(album=album)

    def get_queryset(self):
        queryset = Song.objects.filter(album=self.kwargs["pk"])
        return queryset