import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("================================");
        for (int i = 0; i < 3; i++) { // Loop to take 3 lines of input
            String str = scanner.next(); // Read the string
            int num = scanner.nextInt(); // Read the integer
            System.out.printf("%-15s%03d%n", str, num); 
        }
        System.out.println("================================");

        scanner.close();
    }
}
