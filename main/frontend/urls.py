from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
  path('', index, name='home'),
  path('lobby', index, name='lobby'),
  path('sign-up', index, name='signup'),
  path('chat/<str:id>', index, name='chat'),
]
