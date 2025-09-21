import java.io.*;
import java.net.*;
class MyClient{
public static void main (String[] args){
try{
ServerSocket ss=new ServerSocket(888);
Socket s=ss.accept();
OutputStream obj=s.getOutputStream();
PrintStream ps=new PrintStream(obj);
ps.println("hello mushfequa");


ss.close();
s.close();
ps.close(); 

}catch(IOException ex){
ex.printStackTrace();
}

}
}