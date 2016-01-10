/**
 * Get a square of a given number, cannot use multiplication or division
 * . Gauss’ formula for the sum of the first n integers is \sum_{i=1}^{n} i = \frac {n(n+1)}{2}.
 */

function OddSquare(n) {
    var result = 0;
    for (var i = 0; i < n; i++) {
         result += n;
    }
    return result;
}
