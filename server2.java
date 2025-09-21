import java.net;
import java.io;
class Server2{
	
	 public static void main(String[]args){
		 try{
			 ServerSocket ss =new ServerSocket();
			 Socket s =ss.accept();
			 OutputStream obj= s.get OutputStream();
			 PrintStream ps = new PrintStream(obj);
			 ps.print("Hello Client:");
			 ss.close();
			 s.close();
			 ps.close();
		 		 }catch(IOException ex){
			 ex.printStackTrace();		 
				 }
	 }
}