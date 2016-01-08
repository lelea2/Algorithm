/**
 * Function checking if number if prime number
 * @return Boolean value
 */

//Idea: Loop through number < squareroot of n
//If n divisible by any of that number that number, then n is not prime
function isPrime(n) {
    //For simple case, return boolean value right away
    if (n === 2 || n === 3) {
        return true;
    }
    if (n % 2 === 0) { //even number, return false
        return false;
    }
    var divisor = 3,
        limit = Math.ceil(Math.sqrt(n)); //limit, taking squareroot
    while (divisor <= limit) {
        if (n % divisor === 0) {
            return false;
        }
        divisor += 2; //increment by 2, making sure it's always odded number
    }
    return true;
}

module.exports = isPrime;
