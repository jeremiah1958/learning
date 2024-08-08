from django.http import HttpResponse


def helloworld(request):
    return HttpResponse('Hello, my first Django app')