import java.net.*;
import java.io.*;
 class MyClient{
public static void main(String []arg){
 try{
              Socket s = new Socket(localhost",888);
              InputStream inStr=s.getInputStream();
			  BufferedReader br = new BufferedReader(new InputStreamReader(inStr));
			  String receivedMessage= br.readLine();
			  System.out.println("Message:"+receivedMessage);
			  br.close();
			  s.close();
			  }catch(Exception ex){
	 
	          ex.printStackTrace();			 
			 }
			  }
			  }