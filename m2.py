import requests
from bs4 import BeautifulSoup
url=input('Enter website URL:')
web='https://'+url
print(web)
response=requests.get(web)
if(response.status_code==200)
    soup=BeautifulSoup(response.text,'html.parser')
    title=soup.title
if title:
    print("Title",title.text)
    ltitle=len(title.text)
    print(ltitle)
else:
    print("No title found on the webpage")    
    
