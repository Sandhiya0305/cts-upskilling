/*
16. Palindrome Checker
• Objective: Combine string manipulation and conditional logic.
• Task: Check if a string is a palindrome.
• Instructions:
o Prompt the user for a string.
o Remove any non-alphanumeric characters and convert to lowercase.
o Check if the string reads the same forwards and backwards.
o Display the result.
*/

import java.util.Scanner;

class PalindromeChecker {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        String formatted = s.nextLine().replaceAll("[^A-Za-z0-9]", "").toLowerCase();
        String reversed = new StringBuilder(formatted).reverse().toString();
        System.out.println(formatted.equals(reversed) ? "Palindrome" : "Not a palindrome");
        s.close();
    }
}