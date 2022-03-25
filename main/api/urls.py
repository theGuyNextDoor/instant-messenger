from django.urls import path
from .views import *

urlpatterns = [
  path('users', UsersView.as_view()),
  path('current-session', CurrentSessionKey.as_view()),
  path('sign-up', CreateUser.as_view()),
  path('sign-in/<str:email>/<str:password>', GetUser.as_view()),
  path('logout', Logout.as_view()),
  path('chat', Chat.as_view()),
  path('messages', Messages.as_view()),
]
