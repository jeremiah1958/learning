# common regex characters
"""
.(dot) - matches any single character exept new line
d - matches any digit character (0 - 9)
w - matches any word character(a-z,A-Z,0-9,_)
S - matches any white spaces(space,tab,newline, etc)
[] - matches any character within the brackets
^ - matches the start of string or line
$ - matches end of a string or line
* - matches zero or more occurrence of the precedin character
+ - matches one or more occurrence of the preceding character
? - matches zero or one occurrence of the preceding character
() - groups multiple characteers together for use with quantifiiers
"""

# re - is a regex module

# examples
import re

# text = "Contact us at info@zinduaschool.com or inquiry@zindualschool.com"

# emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}\b', text)
# print(emails)

# data extraction
# text = "My phone number is 070-777-2715."
# pattern = r"\d{3}-\d{3}-\d{4}"
# match = re.search(pattern, text)

# if match:
#     phoneNumber = match.group()
#     print("Phone number found: ", phoneNumber)
# else:
#     print("Phone number not found")
    
# extract dates
# text = "This event will be held on 25/12/2024"
# pattern = r"\b\d{2}/\d{2}/\d{4}\b"
# date = re.findall(pattern, text)
# print("Date found: ", date)

# extracting urls
text = "Visit us at https://zinduaschool.com for more information"
pattern = r"https?://\S+"
url = re.findall(pattern, text)
print("URLs found: ", url)

# Exercise
"""
Regex coding challenge
"""