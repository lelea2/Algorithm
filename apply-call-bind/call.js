/**
 * 1. Write a simple function to tell whether 2 is passed as parameter or not?
 */

//Idea: using Array.prototype.slice.call to convert arguments list into array list to check
function isTwoPassed() {
    var args = Array.prototype.slice.call(arguments);
    return (args.indexOf(2) > -1);
}

//Test case
//isTwoPassed(1,4) //false
//isTowPassed(5,3,1,2) //true


/**
 * 2. Write function decorating console.log
 * @param: {String}: decorating message, which is append infront of console log message
 */
function decorateLog(string) {
    var originalFunc = console.log;
    console.log = function(){
        originalFunc.apply(console, [string].concat(Array.prototype.slice.call(arguments)));
    }
}

decorateLog('Info: ');
//Test case:
//console.log('custom console is here'); //=> Test: custom console is here
//console.log('foo', 'bar'); //=> Test: foo bar
