/**
 * The first time it'll wait (at least) 1000 ms
 * when your code gets executed, it might be a little late, say 1046 ms, so we subtract 46 ms from our delay for the next cycle and the next delay will be only 954 ms.
 * This won't stop the timer from firing late (that's to be expected), but helps you to stop the delays from pilling up.
 */
var myDelay = 1000;
var thisDelay = 1000;
var start = Date.now();

function startTimer() {
  setTimeout(function() {
    // your code here...
    // calculate the actual number of ms since last time
    var actual = Date.now() - start;
    // subtract any extra ms from the delay for the next cycle
    thisDelay = myDelay - (actual - myDelay);
    start = Date.now();
    // start the timer again
    startTimer();
  }, thisDelay);
}


