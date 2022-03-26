from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField()

  class Meta:
    model = User
    fields = ['id', 'session_key', 'username', 'first_name', 'last_name', 'email', 'password', 'online', 'current_page']

class LogoutSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField()

  class Meta:
    model = User
    fields = ['id']

class UpdatePageSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField()

  class Meta:
    model = User
    fields = ['id', 'current_page']