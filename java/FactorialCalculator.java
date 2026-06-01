/*
11. Factorial Calculator
• Objective: Use loops to perform repetitive calculations.
• Task: Calculate the factorial of a number entered by the user.
• Instructions:
o Prompt the user for a non-negative integer.
o Use a for loop to calculate the factorial.
o Display the result.
*/

import java.util.Scanner;

class FactorialCalculator {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		long factorial = 1;

		for (int i = 2; i <= n; i++) {
			factorial *= i;
		}

		System.out.println(factorial);
		s.close();
	}
}