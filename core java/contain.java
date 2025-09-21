public class contain{
    public static void main(String[]args){
        String str="12ab234";
        String str1="java is programmming language";
        System.out.println(str.matches("\\d+")?"only digits":"contain only non digits");
        System.out.println(str1.replace("","%20"));
        System.out.println(str1.replace("java","python"));
    }
}