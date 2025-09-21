def call_by_value(x):
        x=x*2
		print("in function num updated to",x)
		return
def call_by_reference(list):
        list.append('D')
        print("in function num updated to",x)
	    return
my_list=['E']
num=6
print("number before="num)
call_by_value(num)
print("after function num value",num)
print("list before="my_list)
call_by_value(my_list)
print("after function num list is",my_list)
		