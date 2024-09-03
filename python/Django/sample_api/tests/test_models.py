# from django.test import TestCase

# from sample_app.models import Students

# class TestStudents(TestCase):
#     def setUp(self):
#         self.student = Students.objects.create(
#             first_name = "Jeremiah",
#             last_name = "Barakka",
#             address = "Sicily",
#             roll_number = "123",
#             mobile = "0745311580",
            
#             )
    
#     def test_student_creation(self):
#         self.assertEqual(self.student.first_name, "Jeremiah")
#         self.assertEqual(self.student.last_name, "Barakka")
#         self.assertEqual(self.student.address, "Sicily")
#         self.assertEqual(self.student.roll_number, 123)
#         self.assertEqual(self.student.mobile, "0745311580")
    
#     def test_roll_number_unique(self):
#         with self.assertRaises(Exception):
#             Students.objects.create(
#             first_name = "Jeremiah",
#             last_name = "Barakka",
#             address = "Sicily",
#             roll_number = 123,
#             mobile = "0745311580",
#             )
#     def test_mobile_unique(self):
#         with self.assertRaises(Exception):
#             Students.objects.create(
#             first_name = "Jeremiah",
#             last_name = "Barakka",
#             address = "Sicily",
#             roll_number = 123,
#             mobile = "0745311580",
#             )    
        

        