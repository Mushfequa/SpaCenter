import java.util.HashMap;
public class charFrequency{
    public static void main (String [] args){
        String str = "banana";
        
        HashMap<Character,Integer> map = new HashMap<>();
        for(char ch: str.toCharArray()){
            map.put(ch,map.getOrDefault(ch,0)+1);
        }
        
       System.out.println( map);
    }
}
