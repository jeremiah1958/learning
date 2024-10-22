from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.dateparse import parse_date
from django.contrib.auth import authenticate, login
from .models import FinancialRecord, Plant, Farmer, Harvest, Medicine, IrrigationSystem
from django.db.models import Sum
from datetime import datetime
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.dateparse import parse_date
from .models import FinancialRecord  
import json
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.views.decorators.csrf import csrf_exempt



def financial_summary(request):
    total_income = FinancialRecord.objects.filter(type='Income').aggregate(Sum('amount'))['amount__sum'] or 0
    total_expenses = FinancialRecord.objects.filter(type='Expense').aggregate(Sum('amount'))['amount__sum'] or 0
    profit = total_income - total_expenses
    
    records = list(FinancialRecord.objects.values())
    
    financial_data = {
        'total_income': total_income,
        'total_expenses': total_expenses,
        'profit': profit,
        'records': records
    }
    return JsonResponse(financial_data)

def home(request):
    return HttpResponse("""
        <h1>Welcome to Garden Of Abudant Delight Farm Nanyuki</h1>
        <p>Owned by the Onyiegos, nestled at the foot of Mount Kenya, our farm offers a serene getaway with lush landscapes, diverse crops, and various animals.</p>
        <p>Visitors can enjoy fresh produce, farm tours, and participate in activities like harvesting and animal care.</p>
        <p>Explore nearby attractions such as Mount Kenya National Park and Ol Pejeta Conservancy for exciting adventures.</p>
        <p>Join us for local events like the Nanyuki Agricultural Show and Craft Fair, celebrating our vibrant community.</p>
        <p>Whether you seek relaxation, farm-to-table meals, or a chance to connect with the Onyiego family and locals, Blessed Farm Nanyuki has something for everyone.</p>
        <p>Come and discover the beauty and stories that make our farm and its surroundings truly special!</p>
    """)

def get_farm_info(request):
    farm_data = {
        'name': 'My Farm',
        'description': 'This is a description of the farm.',
        'plants': [
            {'name': 'Tomato', 'harvest_time': '90 days'},
            {'name': 'Lettuce', 'harvest_time': '30 days'},
        ],
        'irrigation_system': 'Drip irrigation system',
    }
    return JsonResponse(farm_data)


def get_plants(request):
    plants = Plant.objects.all()
    plant_list = [
        {
            "name": plant.name,
            "expected_harvest_date": plant.expected_harvest_date
        }
        for plant in plants
    ]
    return JsonResponse(plant_list, safe=False)


@csrf_exempt
def add_plant(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            plant_name = data.get('name')
            plant_date = data.get('plant_date')
            harvest_date = data.get('expected_harvest_date')
            quantity = data.get('quantity')

            plant = Plant.objects.create(
                name=plant_name,
                planting_date=parse_date(plant_date),
                expected_harvest_date=parse_date(harvest_date),
                quantity=int(quantity)
            )

            return JsonResponse({
                'id': plant.id,
                'name': plant.name,
                'expected_harvest_date': plant.expected_harvest_date,
                'planting_date': plant.planting_date,
                'quantity': plant.quantity
            })

        except (json.JSONDecodeError, ValueError) as e:
            return JsonResponse({'error': f'Invalid data: {str(e)}'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
    
def get_farmers(request):
    farmers = list(Farmer.objects.values('name', 'contact_info', 'location'))
    return JsonResponse(farmers, safe=False)    



@csrf_exempt
def add_farmer(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        contact_info = data.get('contact_info')
        location = data.get('location')

        farmer = Farmer.objects.create(name=name, contact_info=contact_info, location=location)
        
        return JsonResponse({
            'id': farmer.id,
            'name': farmer.name,
            'contact_info': farmer.contact_info,
            'location': farmer.location
        })
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)

@csrf_exempt
def add_harvest(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            crop_name = data.get('crop_name')
            quantity = data.get('quantity')
            date = data.get('date')
            
            print(f"{data=}")
            
            plant = Plant.objects.get(name=crop_name)  

            harvest = Harvest.objects.create(plant=plant, harvest_date=date, quantity_harvested=quantity)
            
        except:
            pass
        
        return JsonResponse({
        'id': harvest.id,
        'crop_name': crop_name,
        'quantity': quantity,
        'date': date
    })
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)
                


def get_harvest(request):
    if request.method == 'GET':
        try:
            harvests = Harvest.objects.all()
            harvest_list = [
                {
                    'id': harvest.id,
                    'crop_name': harvest.plant.name,  
                    'quantity': harvest.quantity_harvested,
                    'date': harvest.harvest_date
                }
                for harvest in harvests
            ]
            return JsonResponse(harvest_list, safe=False)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)





def get_medicines(request):
    try:
        medicines = Medicine.objects.all().values('name', 'description', 'application_date', 'quantity' )
        medicines_list = list(medicines)
        return JsonResponse(medicines_list, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)




@csrf_exempt
def add_medicine(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            description = data.get('description')
            application_date = data.get('application_date')
            quantity = data.get('quantity')

            if not name or not description or not application_date or quantity is None:
                return JsonResponse({'error': 'All fields are required.'}, status=400)

            
            try:
                application_date = datetime.strptime(application_date, '%Y-%m-%d').date()
            except ValueError:
                return JsonResponse({'error': 'Invalid date format. Use YYYY-MM-DD.'}, status=400)

            medicine = Medicine.objects.create(
                name=name,
                description=description,
                application_date=application_date,
                quantity=quantity
            )
            return JsonResponse({
                'id': medicine.id,
                'name': medicine.name,
                'description': medicine.description,
                'application_date': medicine.application_date.strftime('%Y-%m-%d'),
                'quantity': medicine.quantity
            }, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed.'}, status=405)



def irrigation_system_view(request):
    if request.method == 'GET':
        irrigation_data = list(IrrigationSystem.objects.values())
        return JsonResponse(irrigation_data, safe=False)
    else:
        print("request received")
        data = json.loads(request.body)
        type =  data.get("type")
        details =  data.get("details")
        status =  data.get("status")
        last_inspection_date =  data.get("last_inspection_date")
        IrrigationSystem.objects.create(system_name=type, status=status, last_inspection_date=last_inspection_date)
    return JsonResponse({'error': 'Invalid request method'}, status=405)


 

@csrf_exempt
def add_irrigation_system(request):
    if request.method == 'POST':
        try:
            
            data = json.loads(request.body)
            print(data)
            irrigation_type = data.get('type')
            irrigation_details = data.get('details')
            irrigation_status = data.get('status', 'off').upper()  
            print(irrigation_status)
            last_inspection_date = data.get('last_inspection_date')

            
            IrrigationSystem.objects.create(
                system_name=irrigation_type,
                
                status=irrigation_status,
                last_inspection_date=last_inspection_date
            )

            
            return JsonResponse({'message': 'Irrigation system added successfully!'}, status=201)

        except Exception as e:
            
            return JsonResponse({'error': str(e)}, status=400)
    
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)




@csrf_exempt
def add_financial_record(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)  
            description = data.get('description')
            amount = data.get('amount')
            date = parse_date(data.get('date'))
            type_of_record = data.get('type')
            
            
            if not (description and amount and date and type_of_record):
                return JsonResponse({'error': 'Missing required fields'}, status=400)
            
        
            FinancialRecord.objects.create(
                description=description,
                amount=amount,
                date=date,
                type=type_of_record
            )
            
            return JsonResponse({'message': 'Record added successfully'}, status=201)
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)






@csrf_exempt
def handle_signup(request):
    if request.method == 'POST':
        try:
            print("data has been received")
            # Parse JSON data from the request body
            data = json.loads(request.body)
            username = data.get('email')  # Assuming 'email' is used as username
            password = data.get('password')
            
            print(data)

            # Validate that all fields are present
            if not username or not password:
                return JsonResponse({'status': 400, 'message': 'All fields are required'})

            # # Validate that the passwords match
            # if password != confirm_password:
            #     return JsonResponse({'status': 400, 'message': 'Passwords do not match'})

            # Check if the username (email) is already taken
            if User.objects.filter(username=username).exists():
                return JsonResponse({'status': 400, 'message': 'Username is already taken'})

            # Create and save the new user with a hashed password
            print("trying to create user")
            user = User.objects.create(
                username=username,
                email=username,
                password=make_password(password)  # Hash the password before saving
            )
            user.save()

            # Return success response
            return JsonResponse({'status': 201, 'message': 'User created successfully'}, status=201)
        
        except Exception as e:
            print(e)
            return JsonResponse({'status': 400, 'message': 'Invalid JSON data'})

    return JsonResponse({'status': 405, 'message': 'Method not allowed'}, status=405)

    
@csrf_exempt
def handle_login(request):
    if request.method == "POST":
        try:
            print("data received")
            data = json.loads(request.body)
            username = data.get('email')
            password = data.get('password')
            print(data)

            # Check if both fields are provided
            if not username or not password:
                return JsonResponse({"error": "Username and password are required."}, status=400)

            # Authenticate the user
            user = authenticate(request, username=username, password=password)

            if user is not None:
                # Log the user in
                login(request, user)
                print("logged in")
                return JsonResponse({"message": "Login successful"}, status=200)
            else:
                return JsonResponse({"error": "Invalid credentials"}, status=401)
        except Exception as e:
            return JsonResponse({"error": f"{e}"}, status=400)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)

