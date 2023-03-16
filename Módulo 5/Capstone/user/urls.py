from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from address.views import AddressView, AddressUpdateView
from cart.views import CartView, CartDetailView
from orders.views import OrderView, OrderDetailView, OrderCompleteView

from .views import UserView, UserDetailView, UserAccountRecoverView

urlpatterns = [
    path("login/", jwt_views.TokenObtainPairView.as_view()),
    path("user/", UserView.as_view()),
    path("user/cart/", CartView.as_view()),
    path("user/address/", AddressView.as_view()),
    path("user/address/update/", AddressUpdateView.as_view()),
    path("user/order/", OrderView.as_view()),
    path("user/order/complete/", OrderCompleteView.as_view()),
    path("user/order/<str:order_id>/mail/", OrderDetailView.as_view()),
    path("user/<str:user_id>/", UserDetailView.as_view()),
    path("user/<str:user_id>/recover_account/", UserAccountRecoverView.as_view()),
    path("user/cart/<str:prod_id>/", CartDetailView.as_view()),
]
