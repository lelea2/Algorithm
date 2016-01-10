/**
 * 1. Create a function sum that will work like that: sum(a)(b) = a+b.
 * @method sum
 */
function sum(a) {
    return function(b) {
        return a + b;
    }
}
//Test: sum(1)(2);

/**
 * 2. Create a function sum that will work like that: sum(a)(b) = a+b and accepts any number of brackets.
 * @method sumAll
 */

//To make sum(1) callable as sum(1)(2), sum(1) need to return a function
//A function could be called or converted to number with valueOf
function sumAll(a) {
    var sum = a; //Keep track of sum, which is total of all number
    //Create function callable f, that will take the next value
    function f(b) {
        sum += b;
        return f; //function return function itself
    }
    f.toString = function() {
        return sum;
    }
    return f;
}
//Test: sum(0)(1)(2)(3)(4)(5)

/**
 * Write a function so it could execute the following
 * console.log(sumtest(2,3));   // Outputs 5
 * console.log(sumtest(2)(3));  // Outputs 5
 */
function sumtest(x, y) {
    if (y !== undefined) {
        return x + y;
    } else {
        return function(y) {
            return x + y;
        };
    }
}

/** Or **/
function sumtest(x) {
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else {
        return function(y) {
            return x + y;
        };
    }
}
