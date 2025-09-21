package Assignment;

//Q.• Write a Java program to fetch data from web.xml to Servlet using ServletCotext.


import javax.servlet.ServletException;

import jakarta.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletContext;

public class ExampleServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Get the ServletContext
        ServletContext context = getServletContext();
        
        // Retrieve the context parameters
        String dbURL = context.getInitParameter("databaseURL");
        String dbUser = context.getInitParameter("databaseUser");
        String dbPassword = context.getInitParameter("databasePassword");
        
        // Set response content type
        response.setContentType("text/html");
        
        // Print the retrieved values
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Database Connection Details</h2>");
        out.println("<p>URL: " + dbURL + "</p>");
        out.println("<p>User: " + dbUser + "</p>");
        out.println("<p>Password: " + dbPassword + "</p>");
        out.println("</body></html>");
    }
}
