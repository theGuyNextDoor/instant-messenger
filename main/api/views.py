from urllib import response
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

      return Response({'Success': 'Account created'}, status=status.HTTP_201_CREATED)
    return Response({'Error': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)






class SignInUser(views.APIView):
  pass