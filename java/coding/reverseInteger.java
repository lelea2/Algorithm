/**
 * Reverse digits of an integer.
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 */


//Idea: calculate mod from divison method
//Need to keep a flag to determine this given integer is negative or not
//Extra credit here to be able to mention number out of range, we will need to catch exception
//So, implement this function with try/catch block in mind
public static int reverseInteger(int x) {
    try {
        boolean flag = false; //this is the flag to check whether integer is negative or not
        if (x < 0) {
            x = 0 -x; //convert x to positive
            flag = true;
        }
        int res = 0;
        int p = x;
        //Making a loop here to caculate for mode solucation
        while (p > 0) {
            int mod = p % 10;
            p = p/10;
            res = res * 10 + mod;
        }
        if (flag == true) {
            res = 0 - res;
        }
        return res;
    } catch(InputMismatchException exception) {
        System.out.println("This is not an integer");
    }
}
