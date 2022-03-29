from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
  path('', index, name='home'),
  path('sign-up', index, name='signup'),
  path('conversations', index, name='conversations'),
  path('messages/<str:id>', index, name='messges'),
]
