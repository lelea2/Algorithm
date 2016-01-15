/**
 * Simple example of a closure,
 * See the code below, which value it should return
 */

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);

//RESULT: 1
//Reason: in closure, inner function still have access to outer function variable, therefore, x is defined,
//since it is considered as outer function variable for inner function
