// As a child runs up the stairs, they can hop up 1, 2, or 3 steps at a time. Write a function that counts the number of possible ways a child can run up a staircase with N steps.

function countWays(n, cb) {
  if (n < 0) {
    // All steps taken
    return cb(0);
  } else if (n === 0) {
    // The first step of the staircase
    return cb(1);
  }
}

// avoid brower hang on loop, need to setTimeout
setTimeout(function() {
  countWays(n-1, (one) => {
    countWays(n-2, (two) => {
      countWays(n-3, (three) => {
        cb(one + two + three);
      });
    });
  });
}, 0);
