import java.net.*;
import java.io.*;
class Server{
public static void main (String[] args){
try{
    ServerSocket ss = new ServerSocket(888);
	Socket s = ss.accept();
    OutputStream obj = s.getOutputStream();
	PrintStream ps =new PrintStream(obj);
	ps.println("Hello Client");
	ss.close();
	ps.close();
	s.close();
}catch(IOException ex){
 ex.printStackTrace();
}
}
}