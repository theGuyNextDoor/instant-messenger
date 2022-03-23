from django import http
from django.shortcuts import render
from rest_framework import generics, views, status
from rest_framework.response import Response
from .models import User
from .serializers import LoginSerializer, UserSerializer
import json

# Create your views here.
class UsersView(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class CreateUser(views.APIView):
  serializer_class = UserSerializer

  def post(self, request, format=None):
    serializer = self.serializer_class(data=request.data)

    if serializer.is_valid():
      first = serializer.data['first_name']
      last = serializer.data['last_name']
      email = serializer.data['email']
      pw = serializer.data['password']

      user = User(first_name=first, last_name=last, email=email, password=pw)
      user.save()

      return Response({'success': 'Account created'}, status=status.HTTP_201_CREATED)
    return Response({'error': 'This email is already being used'}, status=status.HTTP_400_BAD_REQUEST)

class SignInUser(views.APIView):

  def get(self, request, email, password, format=None):
    user_results = User.objects.filter(email=email, password=password)

    if user_results.exists():
      first_name = user_results[0].first_name
      last_name = user_results[0].first_name

      return Response({ 'first_name': first_name, 'last_name': last_name, 'email': email }, status=status.HTTP_200_OK)
    return Response({ 'error': 'Incorrect email or password' }, status=status.HTTP_401_UNAUTHORIZED)
