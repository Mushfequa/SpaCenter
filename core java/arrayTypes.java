import java.util.Scanner;

public  class arrayTypes{
    public static void main (String [] args){
        int [] num = {1,2,3,4,5};
        int sum = 0;
        for(int i = 0; i<=num.length; i++){
            sum = sum+num[i];

            System.out.println("addition of element:"+sum);
        }

        Scanner sc = new Scanner(System.in);
        int [] [] array= new int[3][3];
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++) {
                System.out.println("insert in array at["+i+"]["+j+"]:");
               array[i][j]= num;

            } 
        }
    }
}