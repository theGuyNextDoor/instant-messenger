from django.urls import path
from .views import *

urlpatterns = [
  path('user-view', UsersView.as_view()),
  path('conversation-view', ConversationView.as_view()),
  path('message-view', MessageView.as_view()),
  path('current-session', CurrentSessionKey.as_view()),
  path('sign-up', CreateUser.as_view()),
  path('sign-in/<str:email>/<str:password>', GetUser.as_view()),
  path('logout', Logout.as_view()),
  path('update-page', UpdatePage.as_view()),
  path('get-conversation', GetConversation.as_view()),
  path('get-message', GetMessage.as_view()),
]
