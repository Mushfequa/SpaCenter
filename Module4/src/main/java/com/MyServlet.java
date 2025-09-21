package com;

import java.io.IOException;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MyServlet
 */
@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
private String message;
	
	@Override
	public <ServletConfig> void init(ServletConfig config)throws ServletException{
		super.init(config);
		
		//Fetching the initialization parameter from web.xml
		
		message=config.getInitParameter("message");
		
	}
@Override

protected void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException IOException{
	response.setContentType("text/html");
	response.getWriter().println("<h1>"+message+"</h1>");
}
}
