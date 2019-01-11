//Referenced: https://github.com/trusktr/list-flatten/blob/master/src/index.js

//Keep track of current array
//If current index is an array, do a push
function flatten(array) {
    var currentArray = Array.from(array); // ES2015, in case we pass an array-like thing, shallow copy of array
    var breadcrumbs = [];
    var result = []; // flatten array

    var i = 0;
    while (currentArray) {
        if (currentArray[i] instanceof Array) {
            breadcrumbs.push({ currentArray, i });
            currentArray = currentArray[i]; //switch current array to inner array
            i = -1;
        } else {
            result.push(currentArray[i]);
        }
        var crumb = null;
        while (currentArray && i === currentArray.length - 1) {
            crumb = breadcrumbs.pop();
            currentArray = crumb ? crumb.currentArray : null;
            i = crumb ? crumb.i : null;
        }
        i += 1;
    }
    return result;
}

console.log(flatten([3, [3, 4, [2, 3]], 5, 3, [6, 7]]));
// [ 3, 3, 4, 2, 3, 5, 3, 6, 7 ]

// var flattenRecursive = function  (arr) {
//     return arr.reduce(function  (a,b) {
//         if (b instanceof Array) {
//             return a.concat(flattenRecursive(b));
//         } else {
//             return a.concat(b);
//         }
//     },[]);
// }

// console.log(flattenRecursive(b)); //<= [ 2, 1, 2, 3, 4, 2, 3, 4, 4, 5, 6 ]
