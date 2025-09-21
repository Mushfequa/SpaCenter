public class ConsonentExample{
    public static void main(String [] args){
        String str ="Hello programming";
        int vowels=0;
        int consonants=0;

        str = str.toLowerCase().replaceAll("\\s+","");

        for(char ch :str.toCharArray()){
            if(ch>='a'&& ch<='z'){
                if("aious".equals(str));
                vowels++;
                consonants++;

            }

        }
        System.out.println("vowels:"+vowels+"consonants:"+consonants);
    }

}

