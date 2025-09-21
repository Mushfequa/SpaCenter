package controller;



import java.io.IOException;
import java.sql.SQLException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import bean.Student;
import dao.StudentDao;

@WebServlet("/edit")
public class EditController extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req,HttpServletResponse resp) throws ServletException, IOException{
		int id = Integer.parseInt(req.getParameter("id"));
		
		System.out.println("id : "+id);
		
		StudentDao dao = new StudentDao();
		
		try {
			Student student = dao.getStudentByID(id);
			
			if(student!=null) {
				// redirect update jsp
				
				req.setAttribute("Student", student);
				req.getRequestDispatcher("update.jsp").forward(req, resp);
				
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
	}
	
}
