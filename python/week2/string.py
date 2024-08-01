#string indexes
fruit = "Pinky Ponkie" #0,1,2,3...

letter = fruit[0]

# getting lenght
# len(fruit)

#print(len(fruit))
# last = fruit[len(fruit)-2]
#print(last)

# slices
# print(fruit[12:12])

# string comparison
# word = 'mango'

# if word < 'banana':
#     print('Your word, ' + word + ', comes before banana')
# elif ...:
#     print('Your word, ' + word + ', comes after banana')
# else:
#     print('alright, '+ word)
    
# string methods
word = 'banana'
newWord = word.upper() #convert to uppercase
newWord = word.lower() #convert to lowercase
# print(newWord)

index = word.find('n') #find position of one string
# print(index)

line = '  Here we go '
newLine = line.strip() #removes white spaces
# print(newLine)

line = 'Have a nice day'
starts = line.startswith('h')
# print(starts)

camels = 40
print(f'I have spotted {camels} camels')