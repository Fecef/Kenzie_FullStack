from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from .permissions import IsVendorOrPost, IsVendor
from .models import Order
from .serializers import OrderSerializer
from .utils import send_email_user
from .exceptions import OutOfStock


class OrderView(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, IsVendorOrPost]

    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user.id)

    def perform_create(self, serializer):
        vendors = []
        cart = self.request.user.cart
        products = cart.products.filter(is_avaliable=True)

        if not products.exists():
            # TODO Enviando mensagem errada quando não ha item no carrinho.
            # TODO Precisa personalizar mensagem.
            raise OutOfStock("Product is out of stock.")

        for product in products:
            # TODO Tornar a quantidade de itens dinâmica.
            product.current_inventory -= 1

            vendor = product.added_by
            if vendor not in vendors:
                vendors.append(vendor)

            product.save()

        for vendor in vendors:
            vendor_instance = Order.objects.create(user_id=vendor.id)
            vendor_instance.save()

            vendor_products = cart.products.filter(added_by=vendor)

            vendor_instance.products.set(vendor_products)

        order = serializer.save(user=self.request.user)
        order.products.set(products)

        cart.products.clear()


class OrderDetailView(generics.RetrieveUpdateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    lookup_url_kwarg = "order_id"

    def perform_update(self, serializer):
        order = serializer.save()

        if "status" in serializer.validated_data:
            send_email_user(order)

        return order


class OrderCompleteView(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated, IsVendor]

    serializer_class = OrderSerializer

    def get_queryset(self):
        return Order.objects.filter(status="Entregue", user=self.request.user.id)
