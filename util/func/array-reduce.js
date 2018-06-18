/** Playing with array.reduce() function in JS */
/** Referenced: http://blog.jaykanakiya.com/javascript-reduce-method/ */

//JS method applies a function against an accumulator and each value the array has
//to reduce it into 1 single value

//Syntax
// array.reduce(function(accumulator, currentValue, currentIndex, array) {

// });

//Calculate SUM
var calculateSum = function (a) {
    return a.reduce(function (i,c) {
        return i+c;
    });
}

console.log(calculateSum([1,2,3,4])); // <= 10


//Calculate the product of all the elements of the array (mutliplication)
var calculateProduct = function (a) {
    return a.reduce(function (i,c) {
        return i * c;
    });
}

console.log(calculateProduct([1,2,3,4])); <= 24

//Calculate the sum of even elements
/* This can be achieved better by using filter Ex.5 */

[1,2,3,4].reduce(function(a,b,i) {
    if (i%2 === 0) {
        return a+b;
    } else {
        return a;
    }
}); //<= 4

//Using array.filter to solve the problem above
var filterEvenSum = function (arr) {
    return arr.filter(function (a,i) {
        return !(i%2);
    }).reduce(function (a,b) {
        return a+b;
    });
}

console.log(filterEvenSum([1,2,3,4])); //<= 4


//Flatten array (This only solve one level of nested array)
var flattenArray = function (a) {
    return a.reduce(function  (i,c) {
        return i.concat(c);
    });
}

var b = [[1,2,3],[2,3,4],[4,5,6]];

console.log(flattenArray(b)); //<= [ 1, 2, 3, 2, 3, 4, 4, 5, 6 ]

//Flatten array in recursive level (this is solved for all nested array)
//Note:
//using array.push is faster than array.concat since internal array.concat itself will do an interative walk through of the array
var b = [2,[1,2,[3,4]],[2,3,4],[4,5,6]];

var flattenRecursive = function(arr) {
    return arr.reduce(function(a,b) {
        if (b instanceof Array) {
            return a.concat(flattenRecursive(b));
        } else {
            return a.concat(b);
        }
    },[]);
}

console.log(flattenRecursive(b)); //<= [ 2, 1, 2, 3, 4, 2, 3, 4, 4, 5, 6 ]
