/*
4. Leap Year Checker
• Objective: Apply nested conditional logic.
• Task: Check if a given year is a leap year.
• Instructions:
o Prompt the user to enter a year.
o A year is a leap year if it's divisible by 4 but not by 100, unless it's also divisible by 400.
o Display the result accordingly.
*/

import java.util.Scanner;

class LeapYearChecker {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int year = s.nextInt();
		boolean leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
		System.out.println(leap ? "Leap Year" : "Not a Leap Year");
		s.close();
	}
}