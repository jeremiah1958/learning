# myproject/myapp/views.py
from django.shortcuts import render, redirect
from .models import FoodItem

def index(request):
    food_items = FoodItem.objects.all()
    total_calories = sum(item.calories for item in food_items)
    return render(request, 'myapp/index.html', {'food_items': food_items, 'total_calories': total_calories})

def add_food(request):
    if request.method == 'POST':
        name = request.POST['name']
        calories = int(request.POST['calories'])
        FoodItem.objects.create(name=name, calories=calories)
        return redirect('index')
    return render(request, 'myapp/add_food.html')

def delete_food(request, food_id):
    FoodItem.objects.get(id=food_id).delete()
    return redirect('index')

def reset_calories(request):
    FoodItem.objects.all().delete()
    return redirect('index')
