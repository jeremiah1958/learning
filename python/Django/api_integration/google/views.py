from django.http import Http404
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from google.models import *
from google.serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
from drf_yasg.utils import swagger_auto_schema
import os
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

def fetch_address_details(address):
    base_url = 'https://maps.googleapis.com/maps/api/geocode/json'
    api_key = os.getenv('GOOGLE_API_KEY')
    params = {
        'address': address,
        'key': api_key
    }
    try:
        response = requests.get(base_url, params=params)
        data = response.json()
        if data['status'] == 'OK':
            return data['results'][0]
        else:
            return None
    except requests.exceptions.RequestException as e:
        return None
def fetch_geocode_details(latitude, longitude):
    base_url = 'https://maps.googleapis.com/maps/api/geocode/json'
    api_key = GOOGLE_API_KEY
    params = {
        'latlng': f'{latitude},{longitude}',
        'key': api_key
    }
    try:
        response = requests.get(base_url, params=params)
        data = response.json()
        if data['status'] == 'OK':
            return data['results'][0]
        else:
            return None
    except requests.exceptions.RequestException as e:
        return None
@swagger_auto_schema(method='POST', request_body=LocationSerializer)
@api_view(['GET', 'POST'])
def location_list_create_api_view(request):
    if request.method == 'GET':
        locations = Location.objects.all()
        serializer = LocationSerializer(locations, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        address = request.data.get('address', '')
        latitude = request.data.get('latitude')
        longitude = request.data.get('longitude')
        if not address and not (latitude and longitude):
            return Response({'error': 'Address or Latitude and Longitude parameters are required.'}, status=status.HTTP_400_BAD_REQUEST)
        town = ""
        county = ""
        country = ""
        if address:
            # Fetch full details of the address from Google Geocoding API
            address_details = fetch_address_details(address)
            if address_details:
                # Extract latitude and longitude from the Google API response
                location_data = address_details.get('geometry', {}).get('location', {})
                latitude = location_data.get('lat')
                longitude = location_data.get('lng')
                address_components = address_details.get('address_components', [])
                for component in address_components:
                    types = component.get('types', [])
                    if 'locality' in types:
                        town = component.get('long_name', "")
                    elif 'administrative_area_level_1' in types:
                        county = component.get('long_name', "")
                    elif 'country' in types:
                        country = component.get('long_name', "")
            else:
                return Response({'error': 'Location not found or API request error.'}, status=status.HTTP_400_BAD_REQUEST)
        elif latitude and longitude:
            # Fetch full address details from Google Geocoding API
            geocode_details = fetch_geocode_details(latitude, longitude)
            if geocode_details:
                # Extract address, city, and town from the Google API response
                address = geocode_details.get('formatted_address', "")
                address_components = geocode_details.get('address_components', [])
                for component in address_components:
                    types = component.get('types', [])
                    if 'locality' in types:
                        town = component.get('long_name', "")
                    elif 'administrative_area_level_1' in types:
                        county = component.get('long_name', "")
                    elif 'country' in types:
                        country = component.get('long_name', "")
                if not town:
                    return Response({'error': 'Location not found in geocode details.'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'error': 'Location not found or API request error.'}, status=status.HTTP_400_BAD_REQUEST)
        # Create a new Location object and save it to the database
        location = Location.objects.create(address=address, latitude=latitude, longitude=longitude, town=town, county=county, country=country)
        # Serialize the Location object and return it as the response
        serializer = LocationSerializer(location, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
@swagger_auto_schema(method='PUT', request_body=LocationSerializer)
@api_view(['GET', 'PUT', 'DELETE'])
def location_retrieve_update_delete_api_view(request, pk):
    try:
        location = Location.objects.get(pk=pk)
    except Location.DoesNotExist:
        return Response({'error': 'Location not found.'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        # Fetch full details of the address from Google Geocoding API if necessary
        if not location.latitude or not location.longitude:
            address_details = fetch_address_details(location.address)
            if address_details:
                location_data = address_details.get('geometry', {}).get('location', {})
                location.latitude = location_data.get('lat')
                location.longitude = location_data.get('lng')
                address_components = address_details.get('address_components', [])
                for component in address_components:
                    types = component.get('types', [])
                    if 'locality' in types:
                        location.town = component.get('long_name', "")
                    elif 'administrative_area_level_1' in types:
                        location.county = component.get('long_name', "")
                    elif 'country' in types:
                        location.country = component.get('long_name', "")
                location.save()
        serializer = LocationSerializer(location)
        return Response(serializer.data)
    if request.method == 'PUT':
        address = request.data.get('address', '')
        latitude = request.data.get('latitude')
        longitude = request.data.get('longitude')
        if not address and not (latitude and longitude):
            return Response({'error': 'Address or Latitude and Longitude parameters are required.'}, status=status.HTTP_400_BAD_REQUEST)
        town = ""
        county = ""
        country = ""
        if address:
            # Fetch full details of the address from Google Geocoding API
            address_details = fetch_address_details(address)
            if address_details:
                # Extract latitude and longitude from the Google API response
                location_data = address_details.get('geometry', {}).get('location', {})
                latitude = location_data.get('lat')
                longitude = location_data.get('lng')
                address_components = address_details.get('address_components', [])
                for component in address_components:
                    types = component.get('types', [])
                    if 'locality' in types:
                        town = component.get('long_name', "")
                    elif 'administrative_area_level_1' in types:
                        county = component.get('long_name', "")
                    elif 'country' in types:
                        country = component.get('long_name', "")
            else:
                return Response({'error': 'Location not found or API request error.'}, status=status.HTTP_400_BAD_REQUEST)
        elif latitude and longitude:
            # Fetch full address details from Google Geocoding API
            geocode_details = fetch_geocode_details(latitude, longitude)
            if geocode_details:
                # Extract address, town, county, and country from the Google API response
                address = geocode_details.get('formatted_address', "")
                address_components = geocode_details.get('address_components', [])
                for component in address_components:
                    types = component.get('types', [])
                    if 'locality' in types:
                        town = component.get('long_name', "")
                    elif 'administrative_area_level_1' in types:
                        county = component.get('long_name', "")
                    elif 'country' in types:
                        country = component.get('long_name', "")
                if not town:
                    return Response({'error': 'Location not found in geocode details.'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'error': 'Location not found or API request error.'}, status=status.HTTP_400_BAD_REQUEST)
        # Update the Location object and save it to the database
        location.address = address
        location.latitude = latitude
        location.longitude = longitude
        location.town = town
        location.county = county
        location.country = country
        location.save()
        # Serialize the updated Location object and return it as the response
        serializer = LocationSerializer(location)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        location.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)