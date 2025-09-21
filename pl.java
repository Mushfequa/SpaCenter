 class Pl{
public static void main(String[]args){
 
 int temp,rem,rev=0;
 int n=121;
  temp=n;
  
  while(n>0){
  rem=n%10;
  rev = (rev*10)+rem;
  n= n/10;
  
  
  }
  if(rev==temp){
  System.out.println("yes it is palindrom");
  
  }else{
    System.out.println("yes it is  not palindrom");

  }

}
}