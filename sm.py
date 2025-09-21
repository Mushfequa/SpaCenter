import mysql.connector
mydb = mysql.connector.connect(
  host="127.0.0.10",
  user="root",
  password="root"
)
print(mydb)  