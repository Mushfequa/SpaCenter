import java.sql.*;
public class PreparedInsert{

public static void main(String []args) throws Exception{
try{
class.forName("com.mysql.jdbc.Driver");
Connection conn = (DriverManager.getConnection("jdbc:mysql://localhost:3307/DIET","root"."pwd");
String query ="insert into dietstudent values(?,?,?,?)";
PreparedStatement ps = conn.prepareStatement(query);
    ps.setString (1,"14092");
    ps.setString (1,"abc_comp");
    ps.setString (3,"computer");
    ps.setString (4,"cx");

}        
        
        }
}