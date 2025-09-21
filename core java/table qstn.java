import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt(); // Read the integer input
        scanner.close(); // Close scanner to prevent memory leak

        if (N % 2 != 0) { // Odd number
            System.out.println("Weird");
        } else { // Even number
            if (N >= 2 && N <= 5) {
                System.out.println("Not Weird");
            } else if (N >= 6 && N <= 20) {
                System.out.println("Weird");
            } else { // N > 20
                System.out.println("Not Weird");
            }
        }
    }
}
