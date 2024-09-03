from django.test import TestCase, RequestFactory
from django.urls import reverse
from sample_app.models import Blog
from sample_app.views import blog_list

class BlogListViewTest(TestCase):
    
    def setUp(self):
        self.factory = RequestFactory()
        self.url = reverse('blog_list')
        
    def test_blog_view_list_view(self):
        Blog.objects.create(title='Blog 1', content='content 1')    
        Blog.objects.create(title='Blog 2', content='content 2')
        
        request = self.factory.get(self.url)    
        
        response = blog_list(request)
    
        self.assertEqual(response.status_code, 200)
    
        self.assertTemplateUsed(response, 'blog_list.html')
     
        