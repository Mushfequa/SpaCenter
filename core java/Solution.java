import java.io.*;
import java.util.Scanner;


public class Solution {
    public static void main(String[] args) throws IOException {
             Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt(); // Read integer input
        scanner.close(); // Close scanner

        // Loop to print the multiplication table from 1 to 10
        for (int i = 1; i <= 10; i++) {
            System.out.println(N + " x " + i + " = " + (N * i));
        }
    }
}
