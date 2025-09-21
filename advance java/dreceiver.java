import java.net.*;
 class DReceiver{
public static void main(String []args) throws Exception{
try{
	
DatagramSocket ds =new DatagramSocket (6666);
byte[] buf =new byte[1024];
DatagramPacket dp = new DatagramPacket(buf,1024);
ds.receive(dp);
String str =new String(dp.getData(),0,dp.getLength());
System.out.println("Receiver:"+str);
ds.close();
}catch(Exception ex){
	ex.printStackTrace();
	
}
}
 }