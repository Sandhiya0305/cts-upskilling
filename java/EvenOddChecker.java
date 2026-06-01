/*
3. Even or Odd Checker
• Objective: Utilize conditional statements.
• Task: Determine if a number entered by the user is even or odd.
• Instructions:
o Prompt the user for an integer.
o Use the modulus operator % to check divisibility by 2.
o Display whether the number is even or odd.
*/

import java.util.Scanner;

class EvenOddChecker {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int number = s.nextInt();
		System.out.println(number % 2 == 0 ? "Even" : "Odd");
		s.close();
	}
}