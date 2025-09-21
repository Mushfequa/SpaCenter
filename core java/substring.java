import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int intValue = scanner.nextInt(); // Read integer
        double doubleValue = scanner.nextDouble(); // Read double
        scanner.nextLine(); // Consume the leftover newline character
        String stringValue = scanner.nextLine(); // Read full line of text

        // Print outputs in the required format
        System.out.println("String: " + stringValue);
        System.out.println("Double: " + doubleValue);
        System.out.println("Int: " + intValue);

        scanner.close(); // Close scanner
    }
}
