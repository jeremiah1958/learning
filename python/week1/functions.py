# syntax of a function
# def functionName(list of parameters):
#     code what the function needs to do 
#     return expression

def checkIfNumberPrime(number):
    for x in range(2, number):
        if(number%x == 0):
            return False
        return True

# answer = checkIfNumberPrime(233)


# Global variable
# message1 = "Global Variable"

# def myfunction():
#     print("\nINSIDE THE FUNCTION")
#     # global variables are accessed insede a function
#     print(message1)
#     # declare a local variable
#     message2 = "Local Variable"
#     print(message2)
    
# myfunction()
# print(message1)

# default values
# def someFunction(a,b,c=3,d=4,e=6):
#     print(a,b,c,d,e)

# someFunction(1,2)

# variable length
# def addNumbers(*num):
#     sum = 0
#     for i in num:
#         sum = sum + i
#     print(sum)
    
# addNumbers(4,7)

# def memberAge(**age):
#     for i,j in age.items():
#         print("Name = %s, Age = %s"%(i,j))
        

# memberAge(Allan = 18, Joan = 18, Shawn = 21)