// Save this as SimpleCalculator.java
public class SimpleCalculator {
    public static void main(String[] args) {
        if (args.length != 3) {
            System.out.println("Usage: java SimpleCalculator <num1> <operator> <num2>");
            System.out.println("Operators: +  -  *  /  %");
            return;
        }

        double num1 = Double.parseDouble(args[0]);
        String operator = args[1];
        double num2 = Double.parseDouble(args[2]);

        double result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                System.out.println("Sum: " + result);
                break;
            case "-":
                result = num1 - num2;
                System.out.println("Difference: " + result);
                break;
            case "*":
                result = num1 * num2;
                System.out.println("Product: " + result);
                break;
            case "/":
                if (num2 == 0) {
                    System.out.println("Error: Division by zero");
                } else {
                    result = num1 / num2;
                    System.out.println("Quotient: " + result);
                }
                break;
            case "%":
                if (num2 == 0) {
                    System.out.println("Error: Modulus by zero");
                } else {
                    result = num1 % num2;
                    System.out.println("Modulus: " + result);
                }
                break;
            default:
                System.out.println("Invalid operator. Use +, -, *, / or %.");
        }
    }
}
