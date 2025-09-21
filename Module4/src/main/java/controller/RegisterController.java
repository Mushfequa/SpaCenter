package controller;

	import java.io.IOException;

	import java.io.PrintWriter;
	import java.sql.SQLException;
	
	
	import jakarta.servlet.RequestDispatcher;
	import jakarta.servlet.ServletException;
	import jakarta.servlet.annotation.WebServlet;
	import jakarta.servlet.http.HttpServlet;
	import jakarta.servlet.http.HttpServletRequest;
	import jakarta.servlet.http.HttpServletResponse;


	import bean.Student;
	import dao.StudentDao;

	@WebServlet("/register")
	public class RegisterController extends HttpServlet {

		@Override
		protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

			String name = req.getParameter("sname");
			String email = req.getParameter("email");
			String contact = req.getParameter("contact");
			String password = req.getParameter("password");
			String gender = req.getParameter("gender");
			String education = req.getParameter("education");

			Student student = new Student();
			student.setName(name);
			student.setEmail(email);
			student.setContact(contact);
			student.setPassword(password);
			student.setGender(gender);
			student.setEducation(education);

			StudentDao dao = new StudentDao();
			String msg = null;
			String error = null;

			try {
				int row = dao.insertStudent(student);
				System.out.println("code executed : " + row);
				if (row > 0) {
					msg = "Message Inserted Successfully!";
				} else {
					error = "Failed to Insert Record.";
				}

			} catch (SQLException e) {
				error = "Error:" + e.getMessage();

			}

			req.setAttribute("message", msg);
			req.setAttribute("error", error);

			RequestDispatcher dispatcher = req.getRequestDispatcher("home.jsp");
			dispatcher.forward(req, res);
			
		}

	}


