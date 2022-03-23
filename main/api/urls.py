from django.urls import path
from .views import UsersView, CreateUser, SignInUser

urlpatterns = [
  path('users', UsersView.as_view()),
  path('sign-up', CreateUser.as_view()),
  path('sign-in', SignInUser.as_view()),
]
