public class firstLetter{
    public static void main(String [] args){
        String str ="hello world";
        String [] word = str.split("");
        StringBuilder  st = new StringBuilder();
        for(String w :word){
            st.append(Character.toLowerCase(w.charAt(0)))
            .append(w.substring(1))
            .append("");

        }
        System.out.println(st.toString().trim());
    }
}