# Syntax of a while loop
# while condition is true:
#     do A
    
# counter = 5

# while counter > 0:
#     print("Counter =", counter)
#     counter = counter -1
    
# break
j = 0

for i in range(5):
    j = j + 2
    print('i = ', i, 'j = ', j)
    if j == 6:
       continue
    print('i will be skipped')