import java.util.List;
import java.util.ArrayList;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;
public class collectionList{
    public static void main (String [] args){
        List <String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Grapes");
        fruits.add("Water Melon");
        fruits.add("Pineapple");
        System.out.println("ArrayList(list of fruits)");
        for(String fruit:fruits){
            System.out.println(fruit);
        }

        Set<String> employeeNames= new HashSet<>();
        employeeNames.add("Alice");
        employeeNames.add("Bob");
        employeeNames.add("Arvil");
        employeeNames.add("Tom");
        System.out.println("HashSet(set of employee)");
        for(String employeeName:employeeNames){
            System.out.println(employeeName);

    }
    Map<Integer,String> employeeMap= new HashMap<>();
    employeeMap.put(1,"Alice");
    employeeMap.put(2,"Bob");
    employeeMap.put(3,"Arvil");
    employeeMap.put(4,"Tom");
        System.out.println("HashMap(set of employee)");
        for(Map.Entry<Integer,String> entry:employeeMap.entrySet()){
            System.out.println("ID:"+entry.getKey()+"name:"+entry.getValue());

    }


}
}