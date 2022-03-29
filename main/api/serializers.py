from rest_framework import serializers
from .models import Conversation, Message, User

class UserViewSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField()

  class Meta:
    model = User
    fields = '__all__'

class ConversationViewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Conversation
    fields = '__all__'

class MessageViewSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField()

  class Meta:
    model = Message
    fields = '__all__'

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

class UserIdSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField()

  class Meta:
    model = User
    fields = ['id']


class ConversationIdSerializer(serializers.ModelSerializer):
  id = serializers.IntegerField()

  class Meta:
    model = Conversation
    fields = ['id']