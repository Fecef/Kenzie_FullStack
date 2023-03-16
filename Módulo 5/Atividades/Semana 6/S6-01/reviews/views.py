from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .permissions import IsAdminOrCritic
from .models import Review
from .serializers import ReviewSerializer
from .mixings import ReviewPermissionMixgin


class ReviewView(ReviewPermissionMixgin, generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdminOrCritic]

    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        return serializer.save(critic=self.request.user)
