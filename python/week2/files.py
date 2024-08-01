# myFile = open('mbox.txt')
# kafile = myFile.read()
# length = len(kafile)
# myFile.close()

# # print(length)
# print(kafile[:20])

# Searching thru a file
# file = open('mbox.txt')

# for line in file:
#     line = line.rstrip()
#     # skip uninteresting lines
#     if not line.startswith('From:'):
#         continue
    # Process interesting lines
    # print(line)
    
# find emails '@iupui.edu'
# for line in file:
#     line = line.rstrip()
#     if line.find('@uct.ac.za') == -1: 
#         continue
#     print(line)

# leting user choosing filename
# fileName = input('Enter the file name: ')
# try:
#     file = open(fileName)
# except:
#     print(f'File cannot be opened: {fileName}')
#     exit()
    
# count = 0

# for line in file:
#     if line.startswith('Subject:'):
#         count = count + 1
# print(f'There were {count} subject lines in, {fileName}')

# writing files
newFile = open('hello.txt', 'w')
line1 = "Anguka nayo. Shuka"
newFile.write(line1)
newFile.close()

# print(newFile)