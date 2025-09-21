public class Factorial{
    public static void main (String [] args){
        int number=6;
        int factorial=findFactorial(number);
    
System.out.println("factorial of:"+factorial+"is:"+factorial);
    }
        public static int findFactorial(int n) {
            if(n==0||n==1){
                return 1;

            }
            return n* findFactorial(n-1);
        

    }
}
