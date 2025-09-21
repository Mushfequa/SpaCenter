import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int lineNumber = 1;

        while (scanner.hasNext()) { // Continue until EOF
            String line = scanner.nextLine(); // Read the line
            System.out.println(lineNumber + " " + line); // Print with line number
            lineNumber++; // Increment line number
        }
        
        scanner.close(); // Close the scanner
    }
}
