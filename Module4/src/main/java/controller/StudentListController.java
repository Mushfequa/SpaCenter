package controller;

public class StudentListController {
	package controller;

	import java.io.IOException;
	import java.sql.SQLException;
	import java.util.ArrayList;

	import jakarta.servlet.ServletException;
	import jakarta.servlet.annotation.WebServlet;
	import jakarta.servlet.http.HttpServlet;
	import jakarta.servlet.http.HttpServletRequest;
	import jakarta.servlet.http.HttpServletResponse;

	import bean.Student;
	import dao.StudentDao;

	@WebServlet("/studentlist")
	public class UserListController extends HttpServlet {
		
		@Override
		protected void service(HttpServletRequest req,HttpServletResponse resp)throws ServletException, IOException{
			StudentDao dao =new StudentDao();
			try {
				ArrayList<Student> studentList=dao.getStudentList();
				req.setAttribute("data",studentList);
				//forward request to users
				req.getRequestDispatcher("Students.jsp").forward(req,resp);
				
			}catch(SQLException e) {
				e.printStackTrace();
				System.out.println("Error:"+e.getMessage());
			}
		}

	}


}
