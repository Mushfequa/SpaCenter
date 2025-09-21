import java.net.*;
import java.io.*;
class Client{
public static void main (String[] args){
try{
    Socket s = new Socket("localhost",888);
	
    InputStream instr=s. getInputStream();
	BufferedReader br=new BufferedReader( new InputStreamReader(instr));
	String receivedMessage = br.readLine();
	System.out.println("Messages:"+receivedMessage);
	br.close();
	s.close();
}catch(IOException ex){
 ex.printStackTrace();
}
}
}