import java.util.Scanner;

public  class ArrayNums{
    public static void main(String [] args){
       String [] languages = new String[5];
Scanner sc = new Scanner(System.in);
for(int i =0; i<= languages.length;i++){
    System.out.println("Enter language:");
    String language= sc.nextLine();
    languages[i] = language;


}
       


    }
}