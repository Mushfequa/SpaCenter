public class star1{
    public static void main (String []args){
        int a,b;
        for(a=0;a<=5;a++){
           
            for(b=2*(5-1);b<a;b--){
                System.out.print("");
            }
                for(b=a;b<5;b++){
                    
                System.out.print(""+(char)(65+a));
            }
            
            System.out.println();
        }
    }
      
}
