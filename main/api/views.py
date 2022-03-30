from django import http
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

class UsersView(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserViewSerializer

class ConversationView(generics.ListAPIView):
  queryset = Conversation.objects.all()
  serializer_class = ConversationViewSerializer

class User_ConversationView(generics.ListAPIView):
  queryset = Conversation.objects.all()
  serializer_class = ConversationViewSerializer

class MessageView(generics.ListAPIView):
  queryset = Message.objects.all()
  serializer_class = MessageViewSerializer

class CurrentSessionKey(APIView):
  def get(self, request, format=None):
    if not self.request.session.exists(self.request.session.session_key):
      self.request.session.create()

    queryset = User.objects.filter(session_key=self.request.session.session_key)

    if queryset.exists() and queryset[0].session_key == self.request.session.session_key:

      user = queryset[0]
      data = {
        'id': user.id,
        'username': user.username,
        'firstName': user.first_name,
        'lastName': user.first_name,
        'email': user.email,
        'online': user.online,
        'page': user.current_page,
      }

      return Response(data, status=status.HTTP_200_OK)
    if self.request.session.session_key:
      return Response({'message': 'session key created'}, status=status.HTTP_204_NO_CONTENT)
    return Response({'message': 'could not create session key'}, status=status.HTTP_400_BAD_REQUEST)

class CurrentPage(APIView):
  serializer_class = UpdatePageSerializer

  def patch(self, request, format=None):
    serializer = self.serializer_class(data=request.data)

    if serializer.is_valid():
      id = serializer.data.get('id')
      page = serializer.data.get('current_page')

      queryset = User.objects.filter(id=id)

      if queryset.exists():
        user = queryset[0]
        user.current_page = page
        user.save(update_fields=['current_page'])

        return Response({'success': 'Page saved'}, status=status.HTTP_200_OK)
      return Response({'error': 'User not found'}, status=status.HTTP_400_BAD_REQUEST)
    return Response({'Bad Request': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)

class Sign_Up(APIView):
  serializer_class = CreateUserSerializer

  def post(self, request, format=None):
    if not self.request.session.exists(self.request.session.session_key):
      self.request.session.create()

    serializer = self.serializer_class(data=request.data)

    if serializer.is_valid():
      key = self.request.session.session_key
      username = serializer.data['username']
      first = serializer.data['first_name']
      last = serializer.data['last_name']
      email = serializer.data['email']
      pw = serializer.data['password']

      user = User(session_key=key, username=username, first_name=first, last_name=last, email=email, password=pw)
      user.save()

      return Response({'success': 'Account created'}, status=status.HTTP_201_CREATED)
    return Response({'error': 'This email is already being used'}, status=status.HTTP_400_BAD_REQUEST)

class Sign_In(APIView):
  def get(self, request, email, password, format=None):
    if not self.request.session.exists(self.request.session.session_key):
      self.request.session.create()

    queryset = User.objects.filter(email=email, password=password)

    if queryset.exists():
      user = queryset[0]

      user.session_key = self.request.session.session_key
      user.online = True
      user.save(update_fields=['session_key', 'online'])

      data = {
        'id': user.id,
        'username': user.username,
        'firstName': user.first_name,
        'lastName': user.last_name,
        'email': user.email,
        'online': True,
        'page': user.current_page
      }

      return Response(data, status=status.HTTP_200_OK)
    return Response({ 'error': 'Incorrect email or password' }, status=status.HTTP_401_UNAUTHORIZED)

class Logout(APIView):
  serializer_class = LogoutSerializer

  def patch(self, request, format=None):
    serializer = self.serializer_class(data=request.data)

    if serializer.is_valid():
      id = serializer.data.get('id')
      page = serializer.data.get('current_page')

      queryset = User.objects.filter(id=id)

      if queryset.exists():
        user = queryset[0]
        user.session_key = None
        user.online = False
        user.current_page = page
        user.save(update_fields=['session_key', 'online', 'current_page'])

        return Response ({'success': 'Logged out'}, status=status.HTTP_200_OK)
      return Response({ 'error': 'User not found' }, status=status.HTTP_400_BAD_REQUEST)
    return Response({'Bad Request': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)

class Conversations(APIView):
  def get(self, request, id, format=None):
    conversations = Conversation.objects.filter(users=id).prefetch_related('users')

    data = [{
      'id': conversation.id,
      'groupName': conversation.group_name,
      'recipients': [ user.username for user in conversation.users.all()]
    } for conversation in conversations]

    return Response(data, status=status.HTTP_200_OK)

class Messages(APIView):
  def get(self, request, id, format=None):
    messages = Message.objects.filter(conversation_id=id).select_related('user_id')

    data = [{
      'id': message.id,
      'text': message.text,
      'sentAt': message.sent_at,
      'sender': message.user_id.username,
    } for message in messages]

    return Response(data, status=status.HTTP_200_OK)