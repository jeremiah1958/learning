from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from . import models
from django.db.models import Q
from django.contrib.auth.decorators import login_required
from .forms import UserUpdateForm, CustomPasswordChangeForm
from django.contrib.auth import update_session_auth_hash
# View for user registration
def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        # Create a new user
        try:
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            messages.success(request, 'Account created successfully. You can now log in.')
            return redirect('gallery')
        except Exception as e:
            messages.error(request, f'Error creating account: {e}')
    return render(request, 'signup.html')

# View for user login
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'Logged in successfully.')
            return redirect('gallery')
        else:
            messages.error(request, 'Invalid username or password.')
    return render(request, 'login.html')

# View for displaying the photo gallery
def gallery_view(request):
    # Fetch photos from the database (if you have a Photo model)
    query = request.GET.get("q", "none")
    if query == "none":        
        photos = models.Photo.objects.all()  # Example model query
        print("photos have been fetched")
        print(photos[0].image)
    else:
        photos = models.Photo.objects.filter(Q(title__icontains=query)|Q(tags__icontains=query))

    return render(request, 'gallery.html', {'photos': photos})

# View for logging out
@login_required
def logout_view(request):
    logout(request)
    messages.success(request, 'Logged out successfully.')
    return redirect('login')



@login_required
def profile_view(request):
    if request.method == 'POST':
        user_form = UserUpdateForm(request.POST, instance=request.user)

        if user_form.is_valid():
            user_form.save()
            messages.success(request, 'Your profile has been updated!')
            return redirect('profile')  # Redirect back to the profile page after updating
    else:
        user_form = UserUpdateForm(instance=request.user)

    context = {'user_form': user_form}
    return render(request, 'profile.html', context)

@login_required
def change_password(request):
    if request.method == 'POST':
        form = CustomPasswordChangeForm(user=request.user, data=request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  # Important to keep the user logged in after password change
            messages.success(request, 'Your password has been updated!')
            return redirect('profile')
    else:
        form = CustomPasswordChangeForm(user=request.user)

    context = {'form': form}
    return render(request, 'change_password.html', context)
