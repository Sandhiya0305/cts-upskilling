/*
15. String Reversal
• Objective: Manipulate strings.
• Task: Reverse a string entered by the user.
• Instructions:
o Prompt the user for a string.
o Use a loop or StringBuilder to reverse the string.
o Display the reversed string.
*/

import java.util.Scanner;

class StringReversal {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        String text = s.nextLine();
        System.out.println(new StringBuilder(text).reverse());
        s.close();
    }
}