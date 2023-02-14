from rest_framework.views import APIView, Response, Request, status
from rest_framework.pagination import PageNumberPagination
from django.shortcuts import get_object_or_404
from traits.models import Trait
from groups.models import Group
from .models import Pet
from .serializers import PetSerializer


class PetView(APIView, PageNumberPagination):
    # Cadastrar um novo Pet.
    """
    Não é possível cadastrar um novo Pet sem antes
    associa-lo a um Grupo já persistido no banco de dados.
    """

    def post(self, req: Request) -> Response:
        serializer = PetSerializer(data=req.data)
        serializer.is_valid(raise_exception=True)

        traits_req = serializer.validated_data.pop("traits", None)
        group_req = serializer.validated_data.pop("group", None)

        # Filtrando grupos repetidos -> obj | None.
        group_obj = Group.objects.filter(
            scientific_name__iexact=group_req["scientific_name"]
        ).first()

        if not group_obj:
            group_obj = Group.objects.create(**group_req)

        pet_obj = Pet.objects.create(**serializer.validated_data, group=group_obj)

        for trait_dict in traits_req:
            # Filtrando traits repetidos -> obj | None.
            trait_obj = Trait.objects.filter(name__iexact=trait_dict["name"]).first()

            if not trait_obj:
                trait_obj = Trait.objects.create(**trait_dict)

            pet_obj.traits.add(trait_obj)

        # Formatando obj -> dict.
        serializer = PetSerializer(pet_obj)

        return Response(serializer.data, status.HTTP_201_CREATED)

    # Listar todos os Pets.
    def get(self, req: Request) -> Response:
        pet_trait_params = req.query_params.get("trait", None)
        pets = Pet.objects.all()

        if pet_trait_params:
            traits = Trait.objects.filter(name=pet_trait_params).first()
            pets = pets.filter(traits=traits)

        result_page = self.paginate_queryset(pets, req)
        serializer = PetSerializer(result_page, many=True)

        return self.get_paginated_response(serializer.data)


class PetDetailView(APIView):
    def get(self, req: Request, pet_id: int) -> Response:
        pet = get_object_or_404(Pet, id=pet_id)
        serializer = PetSerializer(pet)

        return Response(serializer.data)

    def delete(self, req: Request, pet_id: int) -> Response:
        pet = get_object_or_404(Pet, id=pet_id)
        pet.delete()

        return Response(None, status.HTTP_204_NO_CONTENT)

    def patch(self, req: Request, pet_id: int) -> Response:
        pet = get_object_or_404(Pet, id=pet_id)
        serializer = PetSerializer(data=req.data, partial=True)
        serializer.is_valid(raise_exception=True)

        traits_req = serializer.validated_data.pop("traits", None)
        group_req = serializer.validated_data.pop("group", None)

        if traits_req:
            pet.traits.clear()

            for trait_dict in traits_req:
                trait_obj = Trait.objects.filter(
                    name__iexact=trait_dict["name"]
                ).first()

                if not trait_obj:
                    trait_obj = Trait.objects.create(**trait_dict)

                pet.traits.add(trait_obj)

        if group_req:
            group_dict = Group.objects.filter(
                scientific_name__iexact=group_req["scientific_name"]
            ).first()

            if not group_dict:
                group_dict = Group.objects.create(**group_req)

            pet.group = group_dict

            pet.save()

        for key, value in serializer.validated_data.items():
            setattr(pet, key, value)

        pet.save()

        serializer = PetSerializer(pet)

        return Response(serializer.data, status.HTTP_200_OK)
