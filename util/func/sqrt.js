/**
 * Manually calculate square root of a number with JS
 * Initially, we could use Math.sqrt() method for this purposes
 * Referenced from: https://gist.github.com/joelpt/3824024
 */

//Math method: https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Babylonian_method
//n: number for be square-rooted
function squirt(n, g) {
    if (!g) {
        // Take an initial guess at the square root
        g = n / 2.0;
    }
    var d = n / g; // Divide our guess into the number
    var ng = (d + g) / 2.0; // Use average of g and d as our new guess
    if (g === ng) {
        // The new guess is the same as the old guess; further guesses
        // can get no more accurate so we return this guess
        return g;
    }
    // Recursively solve for closer and closer approximations of the square root
    return squirt(n, ng);
}

console.log(squirt(42)); // 6.48074069840786
console.log(squirt(49)); //7
