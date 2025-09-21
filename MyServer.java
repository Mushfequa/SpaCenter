import java.io.*;
import java.net.*;
 class MyServer{
public static void main (String[] args){
try{
Socket s=new Socket("localhost",888);

InputStream instr=s.getInputStream();
BufferedReader br=new BufferedReader(new InputStreamReader(instr));
String ReceivedMessage=br.readLine();
System.out.println("Message:"+ReceivedMessage);



s.close();
br.close(); 

}catch(IOException ex){
ex.printStackTrace();
}

}
}