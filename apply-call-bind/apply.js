/**
 * 2. How could you use Math.max to find the max value in an array?
 * Note: Default usage of Math.max as following
 * Eg: Math.max(10, 20);   //  20
 */

function getMax(arr) {
    return Math.max.apply(null, arr);
}


//Using apply with function call
function sum() {
    var i, l, result = 0;
    for (i = 0, l = arguments.length; i < l; i++) {
        result += arguments[i];
    }
    return result;
}
sum(1,2,3); // 6

var data = [1,2,3];
sum.apply(null, data); // 6
