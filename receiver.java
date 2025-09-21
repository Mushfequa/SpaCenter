

import java.net.DatagramPacket;
import java.net.DatagramSocket;

 class Receiver {
    public static void main(String[] args) {
        DatagramSocket socket = null;
        try {
            socket = new DatagramSocket(9876); // Port number to listen on
            byte[] receiveBuffer = new byte[1024];

            while (true) {
                DatagramPacket receivePacket = new DatagramPacket(receiveBuffer, receiveBuffer.length);
                socket.receive(receivePacket);

                String receivedData = new String(receivePacket.getData(), 0, receivePacket.getLength());
                System.out.println("Received: " + receivedData);

                // Break the loop if the sender sends "exit"
                if (receivedData.equalsIgnoreCase("exit")) {
                    break;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (socket != null && !socket.isClosed()) {
                socket.close();
            }
        }
    }
}
