from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField()

  class Meta:
    model = User
    fields = ['id', 'session_key', 'username', 'first_name', 'last_name', 'email', 'password', 'online', 'current_page']

class CreateUserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['username', 'first_name', 'last_name', 'email', 'password']

class LogoutSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField()

  class Meta:
    model = User
    fields = ['id', 'current_page']

class UpdatePageSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField()

  class Meta:
    model = User
    fields = ['id', 'current_page']