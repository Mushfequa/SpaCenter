public class palindromNum{
    public static void main(String [] args){
      int num=20 ,rem=0, total=0;
      int temp= num;
      while(temp!=0){
        rem= temp%10;
        total = total+(rem*rem*rem);
        temp= temp/10;

      }
     
      if(num==total){
        System.out.println(num+"number is armstrong");

      }else{
        System.out.println(num+"number is not armstrong");
      }

    }
}