import requests
from bs4 import BeautifulSoup
input("url:",url)
request=request.get(url)
if(r.status_code==200):
 soup= BeautifulSoup(request.content,'html.parser')
 title=soup.title
if title:
 print("title of the webpage",title.text)
else: 
 print("No title found on webpage") 