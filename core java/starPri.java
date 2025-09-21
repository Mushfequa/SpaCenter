public class starPri{
    public static void printPat (int n){
int i,j ;
        for( i= n;i<=1;i++){
            for(j =1; j<=i;j++){
                System.out.print("");

            }
            for(j =i; j<=n-i;j++){
            System.out.print(""+(char)(65+i));

        }
        System.out.println();
    }
    }
    public static void main (String [] args){
        int n =5;
        printPat(n);

    }
}