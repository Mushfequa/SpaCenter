import requests
from bs4 import Beautifulsoup
input("url:",url)
request=request.get(url)
if(r.status_code==200):
 soup=BeautifulSoup(request.content,'html.parser')
 title=soup.title
if title:
 print("title of webpage",title.text)
else:
 print("No title found on the webpage")
	