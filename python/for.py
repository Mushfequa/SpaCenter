print('for loop')
cars=["tata","mahindra","swift"]
for x in cars:
 print(x)
 
print('for loop char wise listing')
for x in "mahindra":
 print(x)  
 
print('\n for loop word wise with break')
cars=["tata","mahindra","swift"]
for x in cars:
 print(x) 
 if x =="mahindra":
  break
  
print('\n for loop with break')
cars=["tata","mahindra","swift"]
for x in cars:
 if x =="mahindra":
  break   
 print(x) 
 
 
print('\n for loop with continue')
cars=["tata","mahindra","swift"]
for x in cars:
 if x =="mahindra":
  continue   
 print(x) 

print('\n for loop with range')
for x in range(2):
 print(x)

print('\n for loop with range with starting')
for x in range(2,6):
 print(x) 
 
print('\n for loop with range with starting and incriment')
for x in range(2,6,9):
 print(x) 
 
print('\n nested is a loop inside aloop')
adj=["test","red","big"]
cars=["tata","mahindra","swift"]
for x in adj:
 for y in cars:
  print(x,y)

 print(x) 