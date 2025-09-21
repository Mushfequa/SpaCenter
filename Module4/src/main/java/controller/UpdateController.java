package controller;



import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import bean.Student;
import dao.StudentDao;

@WebServlet("/update")


public class UpdateController extends HttpServlet {

	@Override
	protected void doPost(HttpServletRequest req,HttpServletResponse resp)throws ServletException, IOException{
		int id= Integer.parseInt(req.getParameter("id"));

		String name = req.getParameter("sname");
		String email = req.getParameter("email");
		String contact = req.getParameter("contact");
		String password = req.getParameter("password");
		String gender = req.getParameter("gender");
	    String education = req.getParameter("education");
 


		Student student = new Student();
		student.setId(id);
		student.setName(name);
		student.setEmail(email);
		student.setContact(contact);
		student.setPassword(password);
		
		StudentDao dao = new StudentDao();
		String msg = null;
		String error = null;

		try {
			int row = dao.updateStudent(student);
			System.out.println("code executed : " + row);
			if (row > 0) {
				msg = "Message Updated Successfully!";
			} else {
				error = "Failed to Update Record.";
			}

		} catch (SQLException e) {
			error = "Error:" + e.getMessage();

		}

		req.setAttribute("message", msg);
		req.setAttribute("error", error);

		RequestDispatcher dispatcher = req.getRequestDispatcher("studentlist");
		dispatcher.forward(req, resp);


	}

}
