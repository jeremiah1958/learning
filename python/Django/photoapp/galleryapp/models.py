from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    bio = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return f'{self.user.username} Profile'

class Photo(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='photos/')
    tags = models.CharField(max_length=100, blank=True)
    uploaded_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='uploaded_photos')
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class UserInteraction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    photo = models.ForeignKey(Photo, on_delete=models.CASCADE, related_name='interactions')
    liked = models.BooleanField(default=False)
    disliked = models.BooleanField(default=False)

    class Meta:
        unique_together = ('user', 'photo')

    def __str__(self):
        return f"{self.user.username}'s interaction with {self.photo.title}"
