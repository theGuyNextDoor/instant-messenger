from django.urls import path
from .views import LoginUser, UsersView

urlpatterns = [
  path('users', UsersView.as_view()),
  path('login', LoginUser.as_view()),
]
