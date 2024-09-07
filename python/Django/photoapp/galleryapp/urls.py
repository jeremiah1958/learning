from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import signup_view, login_view, gallery_view, logout_view, profile_view, change_password

urlpatterns = [
    path('signup/', signup_view, name='signup'),
    path('login/', login_view, name='login'),
    path('gallery/', gallery_view, name='gallery'),
    path('logout/', logout_view, name='logout'),
    path('profile/', profile_view, name='profile'),
    path('profile/change-password/', change_password, name='change_password'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)