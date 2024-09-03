from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Students(models.Model):
    
    first_name = models.CharField(max_length=200)
    
    last_name = models.CharField(max_length=200)
    
    address = models.CharField(max_length=200)
    
    roll_number = models.IntegerField()
    
    mobile = models.CharField(max_length=10)
    
    
    
    def __str__(self):
        
        return self.first_name + " " + self.last_name
    
    
class Blog(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    last_updated = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['-date_posted']
    @classmethod
    def published(cls):
        return cls.objects.filter(is_published=True)    
