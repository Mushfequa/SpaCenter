import java.net;
import java.io;
class Client2{
	
	 public static void main(String[]args){
		 try{
			 Socket s =new Socket("localhost",888);
			
			 InputStream instr= s.getInputStream();
			 BufferedReader br = new BufferedReader(new InputStreamReader(instr));
			 String receivedmessage =br.readLine();
			 System.out.println("message:"+receivedMessage);
			 s.close();
			 br.close();
		 }catch(IOException ex){
			 ex.printStackTrace();
		 }
		 
	 }
}