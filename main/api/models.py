from datetime import datetime
from uuid import uuid4
from django.db import models
from django.forms import DateTimeInput

# Create your models here.
class User(models.Model):
  session_key = models.CharField(max_length=50, null=True)
  username = models.CharField(max_length=30)
  first_name = models.CharField(max_length=20)
  last_name = models.CharField(max_length=20)
  email = models.EmailField(max_length=50, unique=True)
  password = models.CharField(max_length=20)
  online = models.BooleanField(default=True)
  current_page = models.CharField(max_length=30, default='/chat')

  def __str__(self):
    return self.username + ' ' + self.email

class Conversation(models.Model):
  name = models.CharField(max_length=500, null=True)
  group = models.ManyToManyField(User)

  def __str__(self):
    return self.name

class Message(models.Model):
  text = models.CharField(max_length=500)
  conversation_id = models.ForeignKey(Conversation, on_delete=models.CASCADE)
  sent_at = models.DateTimeField(auto_now_add=True, null=True)
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.text