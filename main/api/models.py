from uuid import uuid4
from django.db import models

# Create your models here.
class User(models.Model):
  session_key = models.CharField(max_length=50, unique=True, null=True)
  username = models.CharField(max_length=30)
  first_name = models.CharField(max_length=20)
  last_name = models.CharField(max_length=20)
  email = models.CharField(max_length=50, unique=True)
  password = models.CharField(max_length=20)
  online = models.BooleanField(default=True)
  current_page = models.CharField(max_length=30, default='/chat')

class Chat(models.Model):
  type = models.IntegerField(default=1)

class Messages(models.Model):
  room = models.ForeignKey(Chat, on_delete=models.CASCADE)
  sender = models.ForeignKey(User, on_delete=models.CASCADE)