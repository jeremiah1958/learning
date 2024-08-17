from django.shortcuts import render
from .models import Blog


def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def blog_list(request):
    blogs = Blog.objects.all()
    context = {'blogs': blogs}
    return render(request, 'blog.html', context)







#from django.http import HttpResponse

#def welcome(request):
  #  return HttpResponse('Hello world')
