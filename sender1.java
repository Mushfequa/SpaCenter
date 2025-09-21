import java.net.DatagramSocket;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.util.Scanner;

class Sender1{
public static void main(String[]arg){
	DatagramSocket sockt=null;
	try{
		Socket= new DatagramSocket();
		InetAddress receiveAddress= InetAddress.getByName("localhost");
		Scanner scanner=new Scanner(System.in);
		System.out.println("enter message to send type 'exit' to quit.");
		while(true){
		String message=scanner.nextLine();
		byte[]sendBuffer= message.getBytes[1024];
		
		DatagramPacket sendPacket=new DatagramPacket(sendBuffer,sendBuffer.length,receiverAddress,9876);
		socket.send(sendPacket);
		
		if(message.equalsIgnoreCase("exit")){
			break;
		}
		}
		
	scanner.close();
}catch(Exception ex){
ex.printStackTrace();
}finally{
	if("socket!=null"&& !socket.isClosed()){
	socket.close();
}
}
}
}

