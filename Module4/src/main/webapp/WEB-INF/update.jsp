
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%-- <%@page import="java.sql.Connection, java.sql.DriverManager" %> --%>
<%@page import="java.sql.*"%>
<%@page import="bean.Student"%>

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

		var nameError = document.getElementById("snameErr");
		var emailError = document.getElementById("emailErr");
		var contactError = document.getElementById("contactErr");
		var passwordError = document.getElementById("passwordErr");
		var cpasswordError = document.getElementById("cpasswordErr");
        var cpasswordError = document.getElementById("genderErr");
		var cpasswordError = document.getElementById("educationErr");
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
	<%
	Student student = (Student) request.getAttribute("student");
	%>
	<div
		class="container d-flex justify-content-center align-items-center min-vh-100">


		<div class="col-5  card p-5">

			<h3 class="text-center text-success mb-5">Update Details</h3>

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
			<div class="alert alert-success alert-dismissible fade show"
				role="alert">
				<%=error%>
				<button type="button" class="btn-close" data-bs-dismiss="alert"
					aria-label="Close"></button>

			</div>
			<%
			}
			%>


			<form action="update" method="post">

				<div class="form-group mb-2">
					<input type="hidden" id="id" name="id" value="<%=student.getId()%>">
					<label class="form-label">Student Name</label> <input type="text"
						class="form-control" name="sname" id="sname"
						value="<%=student.getName()%>" onkeyup="validateForm();" /> <span
						class="text-danger" id="snameErr"></span>
				</div>


				<div class="form-group mb-2">
					<label class="form-label">Email Address</label> <input type="text"
						class="form-control" name="email" id="email"
						value="<%=student.getEmail()%>" onkeyup="validateForm();" /> <span
						class="text-danger" id="emailErr"></span>
				</div>

				<div class="form-group mb-2">
					<label class="form-label">Contact Number</label> <input type="text"
						class="form-control" name="contact" id="contact"
						value="<%=student.getContact()%>" onkeyup="validateForm();" /> <span
						class="text-danger" id="contactErr"></span>
				</div>

				<div class="form-group mb-2">
					<label class="form-label">Password</label> <input type="text"
						class="form-control" name="password" id="password"
						value="<%=student.getPassword()%>" onkeyup="validateForm();" /> <span
						class="text-danger" id="passwordErr"></span>
				</div>
				<div class="form-group mb-2">
					<label class="form-label">Gender</label> <input type="radio"
						class="form-control" name="gender" id="male"
						value="<%=student.getMale()%>" onkeyup="validateForm();" />
						<input type="radio"
						class="form-control" name="gender" id="female"
						value="<%=student.getFemale()%>" onkeyup="validateForm();" /> <span
						class="text-danger" id="genderErr"></span>
				</div>
				<div>
					<input type="submit" class="btn btn-success " id="SubmitButton"
						value="Update">
				</div>

			</form>
		</div>


	</div>
</body>
</html>