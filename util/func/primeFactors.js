/**
 * Find all the prime factor of a number
 * @return array of prime number which is factor of given number
 */

//Runtime: O(n)
function primeFactors(n) {
    var divisor = 2,
        factors = [];
    while (n > 2) {
        if (n % divisor === 0) {
            factors.push(divisor); //this is OK. First divisor always 2, so prime number
            n = n/divisor;
        } else {
            divisor++;
        }
    }
    return factors; //duplicate prime factors are ok in this case
}

/** Second approach */
function primeFactors2(n) {
    var divisor = 3,
        factors = [];
    if (n % 2 === 0) {
        factors.push(2);
    }
    while (n > 3) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n/divisor;
        } else {
            divisor += 2;
        }
    }
    return factors;
}

module.exports = primeFactors;
