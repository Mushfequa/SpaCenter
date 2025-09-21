

import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Scanner;

class Sender {
    public static void main(String[] args) {
        DatagramSocket socket = null;
        try {
            socket = new DatagramSocket();
            InetAddress receiverAddress = InetAddress.getByName("localhost");
            Scanner scanner = new Scanner(System.in);

            System.out.println("Enter messages to send. Type 'exit' to quit.");
            while (true) {
                String message = scanner.nextLine();
                byte[] sendBuffer = message.getBytes();

                DatagramPacket sendPacket = new DatagramPacket(sendBuffer, sendBuffer.length, receiverAddress, 9876);
                socket.send(sendPacket);

                if (message.equalsIgnoreCase("exit")) {
                    break;
                }
            }

            scanner.close();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (socket != null && !socket.isClosed()) {
                socket.close();
            }
        }
    }
}
