/**
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, /. Each operand may be an integer or another expression. For example:
 * ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
 * ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
 */

//Idea: the idea of using stack for this one
//When it is a number, push it to the stack.
//When it is an operator, pop TWO numbers from the stack, do the calculation, and push back the result.

public static int evalRPN(String[] tokens) {
    int returnValue = 0;
    String operators = "+-*/"; //Store allowed operations
    Stack<String> stack = new Stack<String>(); //Create stack
    try {
        for (String t : tokens) { //Loop through array of char given
            if (!operators.contains(t)) { //push to stack if it is a number
                stack.push(t);
            } else {//pop numbers from stack if it is an operator
                int a = Integer.valueOf(stack.pop());
                int b = Integer.valueOf(stack.pop());
                switch (t) { //String statement (JDK 1.7)
                case "+":
                    stack.push(String.valueOf(a + b));
                    break;
                case "-":
                    stack.push(String.valueOf(b - a));
                    break;
                case "*":
                    stack.push(String.valueOf(a * b));
                    break;
                case "/":
                    stack.push(String.valueOf(b / a));
                    break;
                }
            }
        }
        returnValue = Integer.valueOf(stack.pop());
    } catch(Exception ex) {
        //We should catch for exception, case that array given is not valid format, and action cannot be perform
        System.out.println("Exception evaluate the expression");
    }

    return returnValue;
}
