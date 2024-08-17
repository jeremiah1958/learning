from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse

class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    
    def get_absolute_url(self):
        return reverse("author-detail", args=[str(self.id)])
    
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    


class Blog(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    # image = models.ImageField(upload to='static/' blank=True, null=True)
    date_posted = models.DateTimeField(default=timezone.now)
    last_updated = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)
    
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['-date_posted']
        
    #classmethod
    def published(cls):
        return cls.objects.filter(is_published=True)