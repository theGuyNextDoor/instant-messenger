from django import http
from django.shortcuts import render
from rest_framework import generics, views, status
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
import json

# Create your views here.
class UsersView(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class SignUp(views.APIView):
  serializer_class = UserSerializer

  def post(self, request, format=None):
    serializer = self.serializer_class(data=request.data)
    print('got here')
    print(serializer)

    if serializer.is_valid():
      username = serializer.data['username']
      first = serializer.data['first_name']
      last = serializer.data['last_name']
      email = serializer.data['email']
      pw = serializer.data['password']

      user = User( username=username, first_name=first, last_name=last, email=email, password=pw, online=True)
      user.save()

      return Response({'success': 'Account created'}, status=status.HTTP_201_CREATED)
    return Response({'error': 'This email is already being used'}, status=status.HTTP_400_BAD_REQUEST)

class RemoveAllUsers(views.APIView):
  def delete(self, request, format=None):
    delete_auth = False
    queryset = User.objects.all()

    if delete_auth:
      queryset.delete()

      return Response({'success': 'all users deleted'}, status=status.HTTP_200_OK)
    return Response({'error': 'auth was removed, please update'}, status=status.HTTP_401_UNAUTHORIZED)

class SignInUser(views.APIView):
  def get(self, request, email, password, format=None):
    queryset = User.objects.filter(email=email, password=password)

    if queryset.exists():
      user = queryset[0]
      username = user.username
      first = user.first_name
      last = user.first_name

      user.online = True
      user.save(update_fields=['online'])


      return Response({ 'username': username, 'first_name': first, 'last_name': last, 'email': email, 'online': True }, status=status.HTTP_200_OK)
    return Response({ 'error': 'Incorrect email or password' }, status=status.HTTP_401_UNAUTHORIZED)

class Messages(views.APIView):
  pass
