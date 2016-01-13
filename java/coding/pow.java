/**
 * Implement pow(x, n).
 * This is to solve in recursion, to test your ability to write recursion function
 */

public static double power(double x, int n) {
    if (n == 0) {
        return 1; //power of any number to 0 is 1
    }
    if (n == 1) {
        return x; //power of any number to 1 is itself
    }
    double v = power(x, n/2);
    if (n % 2 == 0) { //Range: 2, 4, 6 ...
        return v * v;
    } else { //Range:
        return v * v * x;
    }
}

public static double pow(double x, int n) {
    if (n < 0) {
        return (1/power(x, -n));
    } else {
        return power(x, n);
    }
}


//Another solution, cleaner that combine the logic above
public double pow2(double x, int n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return x;
    }
    if (n == 2) {
        return x * x;
    }
    if (n % 2 == 0) { //even pow number
        return pow2(pow2(x, n / 2), 2);
    } else if (n > 0) { //odd pow number
        return x * pow2(pow2(x, n / 2), 2);
    } else { //(n <0) //pow number < 1
        return 1 / x * pow2(pow2(x, n / 2), 2);
    }
}
