public class PrintPats{

    public static void printPat(int n){
        int i ,j;
        for(i=n;i>=1;i--){
            for(j=1;j<=i;j++){
                System.out.println(" ");
            }
            for(j=0;j<=n-i;j++){
                System.out.println(" *");
            }
            System.out.println();
        }
        
    }
    public static void main(String [] args){

        int n=6;
        printpat(n);
    }

}
