public class ReverseArray{
    public static void main(String[] args){
        int[] arr= {"java" ,"python"};
        reverseArray(arr);
        System.out.println("Reversed Array:");

        for(int languages: arr){
            System.out.println("languages:"+"");

        }
    }

        public static void reverseArray(int [] arr){
            int left= 0;
            int right= arr.length-1;

            while(left<right){
               int temp=arr[left];
               arr[left]=arr[right];
               arr[right]=temp;

               left++;
               right--;
               
            }
        }
    }
