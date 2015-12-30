/**
 * Function return nth fibonacci number with given limit
 */
//List of array: 1, 1, 2, 3, 5, 8, 13...

//Runtime: O(n)
function fibonacci(n) {
    var fibo = [0, 1];
    if (n <=2) {
        return 1;
    }
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo[n];
}


//Recursive way
function fibonnaci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
