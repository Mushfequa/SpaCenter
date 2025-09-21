import java.net.DatagramSocket;
import java.net.DatagramPacket;


class Receiver1{
public void main(String[]args){
  DatagramSocket Socket="null";
  try{
  
  Socket=DatagramSocket();
  byte[]receiveBuffer= newByte[1024];  
  

while(true)
DatagramPacket sendPacket=new DatagramPacket(receiveBuffer,receiveBuffer.length);
Socket.receive(receivePacket);

String receiveData=new String(receivePacket.getData(),0,receivePacket.getLength());
System.out.println("Received:"+receiveData);
  
  if(message.equalsIgnoreCase("exit"));
  break;
  }
  }
  Scanner.close();
  
  }catch(Exception ex){
  ex.printStackTrace();
  
  }finally{
  if(Socket!=null &&! Socket.isClosed()){
  Socket.close();
  }
  }
  }
}
