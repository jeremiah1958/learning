userInput = input("Enter 1, 2 or 888: ")

if userInput == "1":
    print("Hello world")
    print("How are you?")
    
elif userInput == "2":
    print("Python rocks")
    print("I love python")

elif userInput == "888":
    print("Abudance")


else:
    print("You did not enter a valid number")
    
    #Inline If
    num1 = 12 if userInput == "1" else 13
    
    print(num1)
    
    
    