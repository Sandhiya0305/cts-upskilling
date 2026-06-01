/*
2. Simple Calculator
• Objective: Practice arithmetic operations and user input.
• Task: Develop a calculator that performs addition, subtraction, multiplication, and division.
• Instructions:
o Prompt the user to enter two numbers.
o Ask the user to choose an operation.
o Display the result of the operation.
*/

import java.util.Scanner;

class SimpleCalculator {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		double a = s.nextDouble();
		double b = s.nextDouble();
		char op = s.next().charAt(0);

		double result;
		switch (op) {
			case '+': result = a + b; break;
			case '-': result = a - b; break;
			case '*': result = a * b; break;
			case '/': result = a / b; break;
			default:
				System.out.println("Invalid operation");
				s.close();
				return;
		}

		System.out.println(result);
		s.close();
	}
}