from django.shortcuts import render
from rest_framework import generics, views
from .models import User
from .serializers import UserSerializer

# Create your views here.
class UsersView(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class LoginUser(views.APIView):
  pass