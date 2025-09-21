import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int q = scanner.nextInt(); // Number of queries

        for (int i = 0; i < q; i++) {
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            int n = scanner.nextInt();
            
            int sum = a; // Start with a
            for (int j = 0; j < n; j++) {
                sum += (int) Math.pow(2, j) * b; // Compute the term
                System.out.print(sum + " "); // Print without newline
            }
            System.out.println(); // Newline after each series
        }

        scanner.close(); // Close scanner
    }
}
