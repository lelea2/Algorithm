/*We have an array of objects A and an array of indexes B. Reorder objects in array A with given indexes in array B. Do not change array A's length.
var A = [C, D, E, F, G];
var B = [3, 0, 4, 1, 2];

sort(A, B);
// A is now [D, F, G, C, E];
*/

//Same concept as array-mutate.js

var A = ['C', 'D', 'E', 'F', 'G'];
var B = [3, 0, 4, 1, 2];
var C = A.forEach(function(value, index) {
    A[B[index]] = value;
});

console.log(C);
