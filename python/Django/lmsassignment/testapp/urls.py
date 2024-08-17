from django.urls import path
from . import views

urlpatterns = [
    path('', views.godfather, name='home'),
]
