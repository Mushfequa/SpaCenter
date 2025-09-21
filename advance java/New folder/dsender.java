import java.net.*;
 class DSender{
public static void main(String []args) throws Exception{
 try{
DatagramSocket ds =new DatagramSocket();
String str ="Message sent from sender ";
InetAddress ip  = InetAddress.getByName("localhost");
DatagramPacket dp = new DatagramPacket(str.getBytes(),str.length(),ip,9876);
ds.send(dp);
ds.close();
 }catch(Exception ex){
	 
	 ex.printStackTrace();
 }


}

}