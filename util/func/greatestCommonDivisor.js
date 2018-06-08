/**
 * Find the greatest common divisor between 2 number
 */

//Idea: keep local variable as great common devisor
//and continuously loop (divisor incremented by 1, has to safisfy < n1 & < n2)
//Runtime: O(m+n)
function getGreatestCommonDivisor(n1, n2) {
    if(n1 < 2 || n2 < 2) {
        return 1;
    }
    var divisor = 2,
        greatestCommonDivisor = 1;
    while (divisor <= n1 && divisor <= n2) {
        if ((n1 % divisor === 0) && (n2 % divisor === 0)) {
            greatestCommonDivisor = divisor;
        }
        divisor++;
    }
    return greatestCommonDivisor;
}

module.exports = getGreatestCommonDivisor;


/** I stole it from online note, using recursion */
//Shorter version, using recursive
function greatestCommonDivisor2(a, b) {
    if (b == 0) {
        return a;
    } else {
        return greatestCommonDivisor2(b, a%b);
    }
}
