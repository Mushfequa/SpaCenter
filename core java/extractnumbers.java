public class extractnumbers{
    public static void main (String [] args){
        String str = "12abc45";
        String numbers = str.replaceAll("[^0-9]","");
       System.out.println( "Extracted numbera:"+numbers);
    }
}