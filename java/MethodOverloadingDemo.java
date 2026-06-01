/*
12. Method Overloading
• Objective: Understand method overloading in Java.
• Task: Create multiple methods with the same name but different parameters.
• Instructions:
o Define methods named add that accept:
▪ Two integers.
▪ Two doubles.
▪ Three integers.
o Each method should return the sum of its parameters.
o Call each method and display the results.
*/

class MethodOverloadingDemo {
    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println(add(2, 3));
        System.out.println(add(2.5, 3.5));
        System.out.println(add(1, 2, 3));
    }
}