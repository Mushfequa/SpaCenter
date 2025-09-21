<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%-- <%@page import="java.sql.Connection, java.sql.DriverManager" %> --%>
<%@page import="java.sql.*"%>
<%@page import="bean.Student"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home page</title>

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
	
</script>

</head>
<body>
	<%
	ArrayList<Student> studentList = (ArrayList) request.getAttribute("data");
	System.out.println("Length:" + studentList.size());
	%>

	<div class="container">

		<div class="row mt-5">
			<div class="col card p-5">
				<h3 class="text-center text-success mb-5">Student List</h3>
				<table class="table table-border">
					<thead class="" thead-dark>
						<tr>
							<th scope="col" style=width:"10%">#</th>
							<th scope="col" style=width:"10%">Name</th>
							<th scope="col" style=width:"10%">Email</th>
							<th scope="col" style=width:"10%">Contact</th>
							<th scope="col" style=width:"10%">Gender</th>
							<th scope="col" style=width:"10%">Education</th>
							<th scope="col" style=width:"10%"></th>
							<th scope="col" style=width:"10%"></th>


						</tr>
					</thead>

					<tbody>
						<%
						for (Student student : studentList) {
						%>
						<tr>
							<td scope="col"><%=student.getId()%></td>
							<td scope="col"><%=student.getName()%></td>
							<td scope="col"><%=student.getEmail()%></td>
							<td scope="col"><%=student.getContact()%></td>
							<td scope="col"><%=student.getContact()%></td>
							<td scope="col"><%=student.getContact()%></td>
							<td scope="col"><a href="edit?id=<%=student.getId() %>" class="btn btn-primary">Edit</a></td>
							<td scope="col"><a href="delete?id=<%=student.getId() %>" class="btn btn-danger">Delete</a></td>
						</tr>
						<%
						}
						%>


					</tbody>
				</table>

			</div>
		</div>
	</div>

</body>
</html>


