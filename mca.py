print('for loop')
cars=["audi","tata","mahindra"]
for x in cars:
 print(x)
 
print('\nfor loop char wise listing')
for x in "mahindra":
 print(x)
print('\nfor loop with word wise with break')
cars=["audi","tata","mahindra"]
for x in cars:
 print(x) 
 if x =="mahindra":
  break  
  
print('\nfor loop with word wise with continue')
cars=["audi","tata","mahindra"]
for x in cars:
 if x =="mahindra":
  continue
 print(x) 
 
print('for loop with range')     
for x in range(2,6):
 print(x)     