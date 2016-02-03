/**
 * 1. Write a simple function to tell whether 2 is passed as parameter or not?
 */

//Idea: using Array.prototype.slice.call to convert arguments list into array list to check
function isTwoPassed() {
    var args = Array.prototype.slice.call(arguments);
    return (args.indexOf(2) > -1);
}

//Test case
isTwoPassed(1,4) //false
isTowPassed(5,3,1,2) //true


/**
 * 2. Write function decorating console.log
 * @param: {String}: decorating message, which is append infront of console log message
 */
function decorateLog(string) {
    var originalFunc = console.log;
    console.log = function() {
        originalFunc.apply(console, [string].concat([].slice.call(arguments))); //passing array argument, concat array here
    }
}

decorateLog('Info: ');
//Test case:
console.log('custom console is here'); //=> Test: custom console is here
console.log('foo', 'bar'); //=> Test: foo bar

/**
 * How could you set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my
 * message"
 */

//Idea: log() function could takes multiple of argument ==> use array.slice to change argument to array of argument
//Shift originial array to make sure the fisrst index will always be "(app)"
//input in console log, console.log with take list of array argument
function log() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift('(app)'); //mutate array
    console.log.apply(console, args); //passing array argument, therefore use apply
}

//Test case
log('my message'); //(app) my message
log('my message', 'your message'); //(app) my message your message
