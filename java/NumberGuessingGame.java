/*
10. Number Guessing Game
• Objective: Implement loops and conditional logic.
• Task: Create a game where the user guesses a randomly generated number.
• Instructions:
o Generate a random number between 1 and 100.
o Prompt the user to guess the number.
o Provide feedback if the guess is too high or too low.
o Continue until the user guesses correctly.
*/

import java.util.Random;
import java.util.Scanner;

class NumberGuessingGame {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int secret = new Random().nextInt(100) + 1;
		int guess;

		while ((guess = s.nextInt()) != secret) {
			System.out.println(guess < secret ? "Too low" : "Too high");
		}

		System.out.println("Correct");
		s.close();
	}
}