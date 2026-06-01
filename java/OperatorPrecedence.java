/*
8. Operator Precedence
• Objective: Explore how Java evaluates expressions.
• Task: Evaluate and display the result of complex expressions.
• Instructions:
o Write expressions combining multiple operators, e.g., int result = 10 + 5 * 2;.
o Display the result and explain the order of operations.
*/

class OperatorPrecedence {
	public static void main(String[] args) {
		int result = 10 + 5 * 2;
		int grouped = (10 + 5) * 2;

		System.out.println(result);
		System.out.println(grouped);
	}
}