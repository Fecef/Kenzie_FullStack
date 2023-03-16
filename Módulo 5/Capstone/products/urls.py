from django.urls import path

from .views import ProductView, ProductDetailView

urlpatterns = [
    path("product/", ProductView.as_view()),
    path("product/<str:prod_id>/", ProductDetailView.as_view()),
]
