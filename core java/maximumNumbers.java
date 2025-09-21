public class maximumNumbers{
    public static void main(String[] args){
        int[] num={1,5,2,3,8};
        int max= num[0];
        for(int i=1; i<num.length;i++){
            if(num[i]>max){
                max= num[i];

            }
        }
        System.out.println(max);
        //int[] num={1,5,2,3,8};
        //int max= Array.stream(num).max().getAsInt();
        //        System.out.println(max);

    }
}