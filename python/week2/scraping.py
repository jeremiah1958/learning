import requests # type: ignore

from bs4 import BeautifulSoup # type: ignore

url = 'https://www.jumia.co.ke/flash-sales'

response = requests.get(url)

# print(response.status_code)

soup = BeautifulSoup(response.content, "html.parser")

items = soup.find_all('article', class_='prd _fb _p col c-prd')

for item in items:
    print(item.text)