<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Demo</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
	crossorigin="anonymous">


<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
	crossorigin="anonymous">
	
	<script type="text/javascrip>"
	function validation(){
		
		var name= document.getElemntById("name").value;
		var email = document.getElementById("email").value;
		var address = document.getElementById("address").value;
		var contact = document.getElementById("contact").value;
		var gender = document.getElementById("gender").value;
		var education = document.getElementById("education").value;
		var password = document.getElementById("password").value;
        var cpassword = document.getElementById("cpassword").value;
        
        
        var nameError=document.getElementById("nameErr");
        var emailError=document.getElementById("emailErr");
        var addressError=document.getElementById("addressErr");
        var contactError=document.getElementById("contactErr");
        var genderError=document.getElementById("genderErr");
        var educationError=document.getElementById("educationErr");
        var passwordError=document.getElementById("passwordErr");
        var cpasswordError=document.getElementById("cpasswordErr");
        
        //name validation
        var nameReg=/^[A-Za-z]+$/;
        if(name==null || name=""){
        	nameError.innerHTML="Please enter name";
        	
        	
        	
        }else if (!nameReg.test(name)){
        	nameError.innerHTML="Name must be in alphabet"
        }else{
        	nameError.innerHTML="";
        	
        }
        

        
	}

</script>
</head>
<body>
<div class = "container">

<div class = "row " mt-5>

<div class = "col-5 card-5">

<h3  class= "text-center text-success mb-5">Registration</h3>
 <form action="registration" method="post">
 
 <div class="form-group mb-2">
 
 <label class= "form label">Name</label>
 
 <input type="text"name="name"id="name"/>
 <span class="text-danger" id="nameErr"></span>
 </div>
 <div class= "form-group mb-2">
 <label class="form label">Email</label>
 <input type="text" name="email"id=""email />
 <span class="text-danger"id="emailErr"></span>
 </div>
 
 <div class ="form-group mb-2">
 <label class="form label">Address</label>
 <input type="text" name="address"id="address"/>
 <span class = "text-dange" id="addressErr"></span>
 </div>
 
 
 <div class ="form-group mb-2">
 <label class= "form label">Contact</label>
 <input type ="text"name="contact"id="contact"/>
 <span class="text-danger" id="contactErr"></span>
 </div>
 
 <div class ="form-group mb-2">
 <label class="form label">Gender</label>
 <input type="radio" name="gender"value="male"/>male
 <input type="radio" name="gender"value="female"/>female
 <span class = "text-dange" id="genderErr"></span>
 </div>
   
  <div class="form-group mb-2">
  <label class="form label">Education</label>
  
  <select name ="education " id ="education">
  <option value="">---Select Education---</option>
  <option value="10th">10th</option>
  <option value="12th">12th</option>
  <option value="BEth">BE</option>
  <option value="BCA">BCA</option>
  <option value="MCA">MCA</option>
  <option value="OTHER">OTHER</option>
  
  </select>
  </div>
  <
 
 <div class ="form-group mb-2">
 <label class="form label">Password</label>
 <input type="text" name="password"id="password"/>
 <span class = "text-dange" id="passwordErr"></span>
 </div>
 
 <div class ="form-group mb-2">
 <label class="form label">Confirm Password</label>
 <input type="text" name="cpassword"id="cpassword"/>
 <span class = "text-dange" id="cpasswordErr"></span>
 </div>
 
 </form>

</div>

<div class = "col-5 card-7">

</div>

</div>

</div>

</body>
</html><%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Demo</title>
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
crossorigin="anonymous">


<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
crossorigin="anonymous">

<script type="text/javascrip>"
function validation(){
    
    var name= document.getElemntById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var contact = document.getElementById("contact").value;
    var gender = document.getElementById("gender").value;
    var education = document.getElementById("education").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    
    
    var nameError=document.getElementById("nameErr");
    var emailError=document.getElementById("emailErr");
    var addressError=document.getElementById("addressErr");
    var contactError=document.getElementById("contactErr");
    var genderError=document.getElementById("genderErr");
    var educationError=document.getElementById("educationErr");
    var passwordError=document.getElementById("passwordErr");
    var cpasswordError=document.getElementById("cpasswordErr");
    
    //name validation
    var nameReg=/^[A-Za-z]+$/;
    if(name==null || name=""){
        nameError.innerHTML="Please enter name";
        
        
        
    }else if (!nameReg.test(name)){
        nameError.innerHTML="Name must be in alphabet"
    }else{
        nameError.innerHTML="";
        
    }
    

    
}

</script>
</head>
<body>
<div class = "container">

<div class = "row " mt-5>

<div class = "col-5 card-5">

<h3  class= "text-center text-success mb-5">Registration</h3>
<form action="registration" method="post">

<div class="form-group mb-2">

<label class= "form label">Name</label>

<input type="text"name="name"id="name"/>
<span class="text-danger" id="nameErr"></span>
</div>
<div class= "form-group mb-2">
<label class="form label">Email</label>
<input type="text" name="email"id=""email />
<span class="text-danger"id="emailErr"></span>
</div>

<div class ="form-group mb-2">
<label class="form label">Address</label>
<input type="text" name="address"id="address"/>
<span class = "text-dange" id="addressErr"></span>
</div>


<div class ="form-group mb-2">
<label class= "form label">Contact</label>
<input type ="text"name="contact"id="contact"/>
<span class="text-danger" id="contactErr"></span>
</div>

<div class ="form-group mb-2">
<label class="form label">Gender</label>
<input type="radio" name="gender"value="male"/>male
<input type="radio" name="gender"value="female"/>female
<span class = "text-dange" id="genderErr"></span>
</div>

<div class="form-group mb-2">
<label class="form label">Education</label>

<select name ="education " id ="education">
<option value="">---Select Education---</option>
<option value="10th">10th</option>
<option value="12th">12th</option>
<option value="BEth">BE</option>
<option value="BCA">BCA</option>
<option value="MCA">MCA</option>
<option value="OTHER">OTHER</option>

</select>
</div>
<

<div class ="form-group mb-2">
<label class="form label">Password</label>
<input type="text" name="password"id="password"/>
<span class = "text-dange" id="passwordErr"></span>
</div>

<div class ="form-group mb-2">
<label class="form label">Confirm Password</label>
<input type="text" name="cpassword"id="cpassword"/>
<span class = "text-dange" id="cpasswordErr"></span>
</div>

</form>

</div>

<div class = "col-5 card-7">

</div>

</div>

</div>

</body>
</html>