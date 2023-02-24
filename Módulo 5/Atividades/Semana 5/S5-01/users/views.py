from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import User
from .serializers import UserSerializer
from .permissions import IsAccountOwner


class UserView(CreateAPIView):
        """
        Criação do usuário.
        """
        queryset = User.objects.all()
        serializer_class = UserSerializer

class UserDetailView(RetrieveUpdateDestroyAPIView):
        """
        Obtenção, atualização e deleção do usuário.
        """
        authentication_classes = [JWTAuthentication]
        permission_classes = [IsAccountOwner]

        queryset = User.objects.all()
        serializer_class = UserSerializer