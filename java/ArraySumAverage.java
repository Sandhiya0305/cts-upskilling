/*
14. Array Sum and Average
• Objective: Work with arrays and perform calculations.
• Task: Calculate the sum and average of elements in an array.
• Instructions:
o Prompt the user to enter the number of elements.
o Read the elements into an array.
o Calculate and display the sum and average.
*/

import java.util.Scanner;

class ArraySumAverage {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int size = s.nextInt();
        int[] numbers = new int[size];
        int sum = 0;

        for (int i = 0; i < size; i++) {
            numbers[i] = s.nextInt();
            sum += numbers[i];
        }

        System.out.println(sum);
        System.out.println((double) sum / size);
        s.close();
    }
}