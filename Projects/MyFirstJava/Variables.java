import java.util.Scanner;

public class Variables{
    public static void main(String[] args){
        // Whole Numbers
        byte b = 127;
        short ss = 32000;
        int x = 4;
        long bigNumber = 100L;

        // Real Numbers
        float y = 3.14f;
        double z = 2.72;

        // Special Types
        char c = 'A';
        boolean decision = true;


        // Print Lines
        System.out.println("------------------------------");
        System.out.println("Yo Vecais!");
        System.out.println("Bytes = " + b);
        System.out.println("BigNumber = " + bigNumber);

        System.out.println("Kopums = " + x + ss + y + z + c );

        // If/Else Method
        if(decision == true){
            System.out.println("Nice :)");
        }else{
            System.out.println("Sad :(");
        }

        System.out.println("-------------------------------");

        // Input with Scanner Method
        System.out.println("Kaa tevi sauc?");
        Scanner input2 = new Scanner(System.in);
        String vards = input2.next();
        System.out.println("-------------------------------");

        System.out.println("Enter the amount of money in cents.");
        Scanner input = new Scanner(System.in);
        double money = input.nextInt();

        System.out.println("-------------------------------");
        System.out.println(vards + " ir par " + money/100 + "EUR bagataks");
        System.out.println("--------------------------------");
    }
}