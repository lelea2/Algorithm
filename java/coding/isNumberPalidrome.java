/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

//Idea:
//Interate of number, compare the first to the last digit and so on
public static boolean isNumberPalidrome(int x) {
    if (x < 0) { //negitive number is not palidrome
        return false;
    }

    int div = 1; //find the greatest divider in 0 (hundreds or thousands...)
    while (x/div > 0) {
        div *= 10;
    }
    while (x != 0) {
        int left = x/div; //find the first digit in that number
        int right = x%10; //always find the last digit of the number

        if (left != right) {
            return false;
        }
        x = (x % div) / 10; //remove first and last digit
        div = div/100;
    }

    return true; //if the loop satisfied, then return true here
}
