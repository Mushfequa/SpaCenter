import java.util.HashMap;
import java.util.Map;


public class Check{
    public static void main (String [] args){

        String str="programming";
        Map<Character,Integer> charCounter =new HashMap<>();
        for(char ch:str.toCharArray){
            charCounter.put(ch,charCounter.getOrDefault(ch,0)+1 );

        }
System.out.println("Duplicate value");
for(Map.entry<Character,Integer> entry = charCounter.getEntrySet()){
if(entry.getValue()>1){
    System.out.println(entry.getKey()+""+entry.getValue());
}
}
        

    }
}