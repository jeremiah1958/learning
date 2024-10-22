from django.urls import path
from .views import home, get_farm_info, financial_summary, get_plants, add_plant, get_farmers, add_farmer, get_harvest, add_harvest,  get_medicines, add_medicine, irrigation_system_view, add_irrigation_system, add_financial_record
from . import views

urlpatterns = [
    path('', home, name='home'),
    path('api/farm-info/', get_farm_info, name='farm-info'),
    path('api/financial-summary/', financial_summary, name='financial-summary'),
    path('api/add-financial-record/', add_financial_record, name='add-financial-record'),
    path("api/plants/", get_plants, name="get_plants"),
    path("api/plants-add/", add_plant, name="add_plants"),
    path('api/farmers/', get_farmers, name='get_farmers'),
    path('api/farmers-add/',add_farmer, name='add_farmer'),
    path('api/harvests/', get_harvest, name="get_harvests"),
    path('api/harvests-add/', add_harvest, name='add-harvest'),
    path('api/medicines/', get_medicines, name='get_medicines'),
    path('api/medicines-add/', add_medicine, name='add_medicine'),  
    path('api/irrigation-system/', irrigation_system_view, name='irrigation-system'),
    path('api/add-irrigation-system/', add_irrigation_system, name='add-irrigation-system'),
    path('api/login/', views.handle_login),
    path("api/signup/", views.handle_signup)

]




