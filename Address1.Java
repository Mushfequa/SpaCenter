import java.net.*;
import java.io.*;
class Address1{
public static void main(String[]args){
try{
InetAddress ip=InetAddress.getByName("HostAddress");
System.out.println("HostAddress:"+ip.getHostAddress());
}catch(Exception e){
System.out.println(e);
}
}
}