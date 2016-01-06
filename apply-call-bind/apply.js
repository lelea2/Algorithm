/**
 * 2. How could you use Math.max to find the max value in an array?
 * Note: Default usage of Math.max as following
 * Eg: Math.max(10, 20);   //  20
 */

function getMax(arr) {
    return Math.max.apply(null, arr);
}
