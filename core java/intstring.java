import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt(); // Read integer input
        in.close();

        // Convert integer to string
        String s = Integer.toString(n); 
        
        // Check if conversion is successful
        if (s.equals(String.valueOf(n))) {
            System.out.println("Good job");
        } else {
            System.out.println("Wrong answer");
        }
    }
}
