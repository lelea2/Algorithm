/**
 * Implement finboncci with memoization
 */

//Create closure,
//If in memo, then read from memo, other wise, caculate and put into memo
var fibonacci = (function() {
    var memo = {}; //key array to store value (memo)

    function f(n) {
        var value;
        if (n in memo) {
            value = memo[n]; //If in memo, read from memo
        } else {
            if (n === 0 || n === 1) {
                value = n;
            } else {
                value = f(n - 1) + f(n - 2);
            }
        }
        memo[n] = value;
        return value;
    }

    return f;
})();
