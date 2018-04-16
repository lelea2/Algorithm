// Measure time with Date vs. process.hrtime()

var start = new Date();
var hrstart = process.hrtime();

setTimeout(function (argument) {
  // execution time simulated with setTimeout function
  var end = new Date() - start,
    hrend = process.hrtime(hrstart);

  console.info("Execution time: %dms", end);
  console.info("Execution time (hr): %ds %dms", hrend[0], hrend[1]/1000000);
}, 1);

// Execution time: 1ms
// Execution time (hr): 0s 1.025075ms

// Execution time: 3ms
// Execution time (hr): 0s 2.875302ms