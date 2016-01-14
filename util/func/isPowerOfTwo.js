/**
 * Write a function to check given integer number if power of 2
 */

//General brute force method to check if number is power of
//Continuously divided given number for the "powered" number given
//until the result reach 1
function IsPowerOf(n, b) {
    if (n > 1) {
        while (n % b === 0) {
            n /= b;
        }
    }
    return (n === 1);
}


//So, to check for isPowerOfTwo, we could do the following
//Idea: using brute force method,
//Checking is power of 2
function isPowerOfTwo(n) {
    return IsPowerOf(n, 2);
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(9));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(27));


//Same idea checking for isPowerOfThree
function isPowerOfThree(n) {
    return IsPowerOf(n, 3);
}
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(8));
console.log(isPowerOfThree(9));
