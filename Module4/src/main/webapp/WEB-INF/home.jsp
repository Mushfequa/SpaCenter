<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%-- <%@page import="java.sql.Connection, java.sql.DriverManager" %> --%>
<%@page import="java.sql.*"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home Page</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
	crossorigin="anonymous">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
	crossorigin="anonymous"></script>

<script type="text/javascript">
	function validateForm() {
		//alert('Event executed');

		var uname = document.getElementById("sname").value;
		var email = document.getElementById("email").value;
		var contact = document.getElementById("contact").value;
		var password = document.getElementById("password").value;
		var cpassword = document.getElementById("cpassword").value;
		var gender = document.getElementById("gender").value;

		var nameError = document.getElementById("snameErr");
		var emailError = document.getElementById("emailErr");
		var contactError = document.getElementById("contactErr");
		var passwordError = document.getElementById("passwordErr");
		var cpasswordError = document.getElementById("cpasswordErr");
		var btnSubmit = document.getElementById("submitButton");

		// user field validation;
		//alert(uname+','+email+','+contact+','+password);

		var nameReg = /^[A-Za-z]+$/;

		if (uname == null || uname == "") {
			nameError.innerHTML = "enter name";
			btnSubmit.disabled = true;

		} else if (!nameReg.test(uname)) {
			nameError.innerHTML = "mismatch";
			btnSubmit.disabled = true;

		} else {
			nameError.innerHTML = "";
			btnSubmit.disabled = false;

		}

		// email field validation
		var emailReg = /^[A-Za-z0-9-_.]+@[A-Za-z]+\.[A-Za-z]{2,4}$/;
		if (email == null || email == "") {
			emailError.innerHTML = "Email should not be blank";
			btnSubmit.disabled = true;
		} else if (!emailReg.test(email)) {
			emailError.innerHTML = "Invalid email address";
			btnSubmit.disabled = true;
		} else {
			emailError.innerHTML = "";
			btnSubmit.disabled = false;
		}

		// contact field validation

		var contactReg = /^\d{10}$/;

		if (contact == null || contact == "") {
			contactError.innerHTML = "contact should not be blank";
			btnSubmit.disabled = true;
		} else if (!contactReg.test(contact)) {
			contactError.innerHTML = "contact should be of 10 digits";
			btnSubmit.disabled = true;
		} else {
			contactError.innerHTML = "";
			btnSubmit.disabled = false;
		}

		// password field validation

		var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

		if (password == null || password == "") {
			passwordError.innerHTML = "password should not be blank";
			btnSubmit.disabled = true;
		} else if (!passwordReg.test(password)) {
			passwordError.innerHTML = "Must contains atleast one uppercase, lowercase, digit and length up to 16 characters";
			btnSubmit.disabled = true;
		} else {
			passwordError.innerHTML = "";
			btnSubmit.disabled = false;
		}

		if (cpassword == null || cpassword == "") {
			cpasswordError.innerHTML = "Please confirm your password";
			btnSubmit.disabled = true;
		} else if (cpassword != password) {
			cpasswordError.innerHTML = "Password mismatch";
			btnSubmit.disabled = true;
		} else {
			cpasswordError.innerHTML = "";
			btnSubmit.disabled = false;
		}

	}
</script>

</head>
<body>
	<div class="container d-flex justify-content-center min-vh-100 align-items-center">

		<div class="col-5 card p-5">
			<h3 class="text-center text-success mb-5">Registration Form</h3>


			<%
			String message = (String) request.getAttribute("message");

			if (message != null) {
			%>
			<div class="alert alert-success alert-dismissible fade show"
				role="alert">
				<%=message%>
				<button type="button" class="btn-close" data-bs-dismiss="alert"
					aria-label="Close"></button>
			</div>
			<%
			}
			%>

			<%
			String error = (String) request.getAttribute("error");

			if (error != null) {
			%>
			<div class="alert alert-danger alert-dismissible fade show"
				role="alert">
				<%=error%>
				<button type="button" class="btn-close" data-bs-dismiss="alert"
					aria-label="Close"></button>
			</div>
			<%
			}
			%>




			<form action="register" method="post">
				<div class="form group mb-2">
					<label class="form-label">User Name</label> <input type="text"
						class="form-control" name="uname" id="uname"
						onKeyup="validateForm();" /> <span class="text-danger"
						id="unameErr"></span>
				</div>

				<div class="form group mb-2">
					<label class="form-label">Email Address</label> <input type="text"
						class="form-control" name="email" id="email"
						onKeyup="validateForm();" /> <span class="text-danger"
						id="emailErr"></span>
				</div>

				<div class="form group mb-2">
					<label class="form-label">Contact Number</label> <input type="text"
						class="form-control" name="contact" id="contact"
						onKeyup="validateForm();" /> <span class="text-danger"
						id="contactErr"></span>
				</div>
				<div class="form group mb-2">
					<label class="form-label">Password</label> <input type="text"
						class="form-control" name="password" id="password"
						onKeyup="validateForm();" /> <span class="text-danger"
						id="passwordErr"></span>
				</div>
				<div class="form group mb-2">
					<label class="form-label">Confirm Password</label> <input
						type="text" class="form-control" name="cpassword" id="cpassword"
						onKeyup="validateForm();" /> <span class="text-danger"
						id="cpasswordErr"></span>
				</div>
				
				<div class="form group mb-2">
					<label class="form-label">Gender</label> 
					<input type="radio" class="form-control" name="male" id="male">male
				    <input type="radio" class="form-control" name="female" id="female">female
					
				</div>
				<div class ="form group mb-2">
				<label class ="form-label">Education</label>

				<td><select name="education" id="education">

						<option value="">--- Select Education ---</option>
						<option value="10th">10th</option>
						<option value="12th">12th</option>
						<option value="BCom">BCom</option>
						<option value="BE">BE</option>
						<option value="Other">Other</option>
				</select></td>
				<span style="color: red;" id="education_error"></span>

			</div>
				
				
				<div>
					<input type="submit" class="btn btn-success me-3" id="submitButton"
						value="Submit"> <input type="reset"
						class="btn btn-primary me-3" id="resetButton" value="Reset">

					<a href="userlist" class="btn btn-warning">View Users</a>
				</div>

			</form>


		</div>

	</div>

</body>
</html>