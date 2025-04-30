import java.util.Scanner;
public class VotingEligibility {
    // Method to check voting eligibility
    static void checkEligibility(int age) {
        if (age < 18) {
            // Throwing an exception if age is less than 18
            throw new ArithmeticException("Person is not eligible to vote");
        } else {
            System.out.println("Person is eligible to vote");
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your age: ");
        int age = sc.nextInt();

        try {
            checkEligibility(age);
        } catch (ArithmeticException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
// wap to show exception handling process with the help of    keyword  throw such that when the age entered byu the user is less than 18 then it throws a message that person is not eligible to vote
//wap to show exception handling in any arithmetic operation
      