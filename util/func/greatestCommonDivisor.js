/**
 * Find the greatest common divisor between 2 number
 */

function getGreatestCommonDivisor(n1, n2) {
    if (n1 < 2 || n2 < 2) {
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


/** I still it from online note, using recursion */

function greatestCommonDivisor2(a, b){
    if(b == 0) {
        return a;
    } else {
        return greatestCommonDivisor2(b, a%b);
    }
}
