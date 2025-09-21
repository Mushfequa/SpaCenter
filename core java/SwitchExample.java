public class SwitchExample {
    public static void main(String [] args){
        int month =2;
        String monthName;

        swith (month)
        {
            case 1:
            monthName="jan";
            break;
            case 2:
            monthName="fab";
            break;
           default:
            monthName="invlid";
           System.out.println("this month is:"+monthName);
        }

    }
}