from django.shortcuts import render, redirect
from .models import Blog
from .models import Subscriber
from django.contrib import messages
from .forms import BlogForm
from django.contrib.auth import authenticate, login
def index(request):
    return render(request, 'index.html')
def about(request):
    return render(request, 'about.html')
def blog_list(request):
    blogs = Blog.objects.all()
    context = {'blogs': blogs}
    return render(request, 'blog.html', context)
def subscriber(request):
    if request.method == 'POST':
        email = request.POST['email']
        if Subscriber.objects.filter(email=email).exists():
            messages.error(request, 'You are already subscribed!')
        else:
            subscriber = Subscriber(email=email)
            subscriber.save()
            messages.success(request, 'Thank you for subscribing!')
            return redirect('subscribe')
    return render(request, 'subscribe.html')
def add_blog(request):
    if request.method == 'POST':
        form = BlogForm(request.POST, request.FILES)
        if form.is_valid():
            blog = form.save()
            blog.save()
            return redirect('blog')
    else:
        form = BlogForm()
    return render(request, 'add_blog.html', {'form': form})

def error_404(request, exception):
    return render(request, '404.html')


def login_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            error_message = "Invalid credentials"
    else:
        error_message = None
    return render(request, 'myapp/login.html', {'error_message': error_message})







