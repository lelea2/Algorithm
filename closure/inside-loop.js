//Problem statement
/**
 *  for(var i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 10);
    }
 * The following code above will not print number from 0 to 9, but will print number 10 ten times.
 * If we want to print 0 to 9 sequential and in centain period, this is what we will need to do
 */

//Using closure, i as global var in this case
function printNum() {
    for (var i = 0; i < 10; i++) {
        setTimeout((function(i) { //This is call IIEF: Intermediate invoked function expression
            console.log(i);
        }(i)), 10)
    }
}

//Another solution, is to use bind method, and apply console.log method binding in this case

for (var j = 0; j < 10; j++) {
    setTimeout(console.log.bind(console, i), 10);
}
