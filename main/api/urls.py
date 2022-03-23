from django.urls import path
from .views import *

urlpatterns = [
  path('users', UsersView.as_view()),
  path('revoke-all', RemoveAllUsers.as_view()), # DELETE MAYBE
  path('sign-up', SignUp.as_view()),
  path('sign-in/<str:email>/<str:password>', SignInUser.as_view()),
  path('messages', Messages.as_view()),
]
