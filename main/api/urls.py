from django.urls import path
from .views import *

urlpatterns = [
  path('user-view', UsersView.as_view()),
  path('conversation-view', ConversationView.as_view()),
  path('message-view', MessageView.as_view()),
  path('current-session', CurrentSessionKey.as_view()),
  path('sign-up', Sign_Up.as_view()),
  path('sign-in/<str:email>/<str:password>', Sign_In.as_view()),
  path('logout', Logout.as_view()),
  path('update-page', CurrentPage.as_view()),
  path('conversations/<int:id>', Conversations.as_view()),
  path('messages/<int:id>', Messages.as_view()),
]
