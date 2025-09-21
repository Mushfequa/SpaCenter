import java.util.Objects;

public class StudentHash{

    int id;
    String name;
    String email;

    public Student(int id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

public int hashCode(){
    return Objects.hash(name,email);
}
    public static void main(String[] args){
        Student s1 = new Student(1,"Alice","alice@gmail.com");
        Student s2 = new Student(2,"Arvil","arvil@gmail.com");

System.out.println("HashCode:"+s1.hashCode()+","+s2.hashCode());
    }
}