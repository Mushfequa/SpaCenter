public class palindromeEx{
    public static void main(String [] args){
        String str="programming";
        String reversed = new StringBuilder(str).reverse().toString();
        System.out.println(str.equals(reversed)?"string is palindrom":"not a palindrom");
    }
}