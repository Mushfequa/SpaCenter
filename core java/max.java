public class Max(){

    public static void main(String [] args){

        int [] arr={21,5,89,16,32};
        int max =findMaxElement(arr);

        System.out.println("maximum element in the array:"+max);
    }
    public static void findMaxElement(int [] arr){

        int max =arr[0];
        for(int i=1;i<arr.length;i++){

            if(arr[i]>max){
                 max= arr[i];

            }
        }
        return max;
    }
}