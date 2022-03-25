from urllib.request import Request
from django import http
from django.shortcuts import render
from rest_framework import generics, views, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from .serializers import LogoutSerializer, UserSerializer

class UsersView(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

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
      }

      return Response(data, status=status.HTTP_200_OK)
    return Response({ 'message': 'has session key' }, status=status.HTTP_200_OK)

class CreateUser(APIView):
  serializer_class = UserSerializer

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

      user = User(session_key=key, username=username, first_name=first, last_name=last, email=email, password=pw, online=True)
      user.save()

      return Response({'success': 'Account created'}, status=status.HTTP_201_CREATED)
    return Response({'error': 'This email is already being used'}, status=status.HTTP_400_BAD_REQUEST)

class GetUser(APIView):
  def get(self, request, email, password, format=None):
    if not self.request.session.exists(self.request.session.session_key):
      self.request.session.create()

    queryset = User.objects.filter(email=email, password=password)

    if queryset.exists():
      user = queryset[0]
      username = user.username
      first = user.first_name
      last = user.first_name

      user.online = True
      user.session_key = self.request.session.session_key
      user.save(update_fields=['session_key', 'online'])

      data = {
        'username': username,
        'firstName': first,
        'lastName': last,
        'email': email,
        'online': True
      }


      return Response(data, status=status.HTTP_200_OK)
    return Response({ 'error': 'Incorrect email or password' }, status=status.HTTP_401_UNAUTHORIZED)

class Logout(APIView):
  serializer_class = LogoutSerializer

  def patch(self, request, format=None):
    serializer = self.serializer_class(data=request.data)

    if serializer.is_valid():
      id = serializer.data.get('id')
      online = serializer.data.get('online')

      queryset = User.objects.filter(id=id)

      if queryset.exists():
        user = queryset[0]
        user.session_key = None
        user.online = online
        user.save(update_fields=['session_key', 'online'])

        return Response ({'success': 'Logged out'}, status=status.HTTP_200_OK)
    return Response({ 'bad request': 'User not found' }, status=status.HTTP_400_BAD_REQUEST)

class Chat(APIView):
  pass

class Messages(APIView):
  pass
