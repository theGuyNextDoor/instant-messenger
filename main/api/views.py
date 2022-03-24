from urllib.request import Request
from django import http
from django.shortcuts import render
from rest_framework import generics, views, status
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
import json

class RemoveAllUsers(views.APIView):
  def delete(self, request, format=None):
    delete_auth = False
    queryset = User.objects.all()

    if delete_auth:
      queryset.delete()

      return Response({'success': 'all users deleted'}, status=status.HTTP_200_OK)
    return Response({'error': 'auth was removed, please update'}, status=status.HTTP_401_UNAUTHORIZED)

class UsersView(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class CurrentSessionKey(views.APIView):
  def get(self, request, format=None):
    if not self.request.session.exists(self.request.session.session_key):
      self.request.session.create()

    queryset = User.objects.filter(key=self.request.session.session_key)
    if queryset.exists() and queryset[0].key == self.request.session.session_key:
      user = queryset[0]
      data = {
        'username': user.username,
        'first': user.first_name,
        'last': user.first_name,
        'email': user.email,
        'online': user.online,
      }

      return Response(data, status=status.HTTP_200_OK)
    return Response({ 'message': 'has session key' }, status=status.HTTP_200_OK)

class CreateUser(views.APIView):
  serializer_class = UserSerializer

  def post(self, request, format=None):
    if not self.request.session.exists(self.request.session.session_key):
      self.request.session.create()

    serializer = self.serializer_class(data=request.data)
    print(self.request.session.session_key)

    if serializer.is_valid():
      key = self.request.session.session_key
      username = serializer.data['username']
      first = serializer.data['first_name']
      last = serializer.data['last_name']
      email = serializer.data['email']
      pw = serializer.data['password']

      user = User( key=key, username=username, first_name=first, last_name=last, email=email, password=pw, online=True)
      user.save()

      return Response({'success': 'Account created'}, status=status.HTTP_201_CREATED)
    return Response({'error': 'This email is already being used'}, status=status.HTTP_400_BAD_REQUEST)

class GetUser(views.APIView):
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
      user.key = self.request.session.session_key
      user.save(update_fields=['key', 'online'])


      return Response({ 'username': username, 'first_name': first, 'last_name': last, 'email': email, 'online': True }, status=status.HTTP_200_OK)
    return Response({ 'error': 'Incorrect email or password' }, status=status.HTTP_401_UNAUTHORIZED)

class Messages(views.APIView):
  pass
