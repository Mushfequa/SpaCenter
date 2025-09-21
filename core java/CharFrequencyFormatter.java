import java.util.LinkedHashMap;
import java.util.Map;

public class CharFrequencyFormatter {
    public static void main(String[] args) {
        
String input = "abbcccddddeeeee";
Map<Character,Integer> map = new LinkedHashMap<>();
for(char ch:input.toCharArray()){
map.put(ch,map.getOrDefault(ch,0)+1);

}
StringBuilder result = new StringBuilder();
for(Map.Entry<Character,Integer> entry:map.entrySet()){
result.append(entry.getKey()).append(entry.getValue());

}
System.out.println(result.toString());
}
}