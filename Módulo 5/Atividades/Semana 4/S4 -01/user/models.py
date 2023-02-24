from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):

    """
    Empregados (employees) -> is_superuser = True,  is_employee = True
    Usuários comuns ->        is_superuser = False, is_employee = False
    """

    email = models.EmailField(max_length=127, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birthdate = models.DateField(null=True)
    is_employee = models.BooleanField(null=True, default=False)

    def __repr__(self) -> str:
        return f"<[{self.pk}] {self.email}>"
