from uuid import uuid4
from django.db import models

# Create your models here.
class User(models.Model):
  username = models.CharField(max_length=30)
  key = models.CharField(max_length=50, unique=True, null=True)
  first_name = models.CharField(max_length=20)
  last_name = models.CharField(max_length=20)
  email = models.CharField(max_length=50, unique=True)
  password = models.CharField(max_length=20)
  online = models.BooleanField(default=False)