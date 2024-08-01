import unittest

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n -1)
    
class TestFactorial(unittest.TestCase):
    def testFactorial(self):
        self.assertEqual(factorial(0), 1)
        self.assertEqual(factorial(1), 1)
        self.assertEqual(factorial(2), 2)
        self.assertEqual(factorial(3), 6)
        self.assertEqual(factorial(4), 24)

# Exercise: Coding challege 4.4