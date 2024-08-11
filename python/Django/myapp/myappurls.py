from myapp.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
