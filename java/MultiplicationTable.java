/*
5. Multiplication Table
• Objective: Implement loops.
• Task: Print the multiplication table for a number up to 10.
• Instructions:
o Prompt the user for a number.
o Use a for loop to iterate from 1 to 10.
o Multiply the input number by the loop counter and display the result.
*/

import java.util.Scanner;

class MultiplicationTable {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();

		for (int i = 1; i <= 10; i++) {
			System.out.println(n + " x " + i + " = " + (n * i));
		}

		s.close();
	}
}