import java.io.*;
import java.net.*;
class Address{
public static void main (String[]args){
try{
InetAddress localhost = InetAddress.getByName("LocalHost");
System.out.println("LocalHost:"+localhost);


}catch(UnknownHostException e){

System.out.println(e);
}
}
}