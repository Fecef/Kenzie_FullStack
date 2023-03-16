from rest_framework import generics
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Product
from .serializers import ProductSerializer
from .permissions import isVendorOrAdmin


class ProductView(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, isVendorOrAdmin]

    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        serializer.save(added_by=self.request.user)

    def get_queryset(self):
        queryset = Product.objects.all()

        id = self.request.query_params.get("id", None)
        name = self.request.query_params.get("name", None)
        cat = self.request.query_params.get("category", None)

        if id:
            queryset = Product.objects.filter(id__icontains=id)
        if name:
            queryset = Product.objects.filter(name__icontains=name.replace("-", " "))
        if cat:
            queryset = Product.objects.filter(category__icontains=cat.replace("-", " "))

        return queryset


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, isVendorOrAdmin]

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    lookup_url_kwarg = "prod_id"

    def perform_update(self, serializer):
        instance = serializer.save()
        current_inventory = self.request.data.pop("current_inventory")

        if current_inventory == 0:
            instance.is_avaliable = False

        instance.save()
