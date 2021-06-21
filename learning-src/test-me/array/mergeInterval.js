// Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, 
// and returns the new intervals in no particular order
// Sample:
// [
//   [1, 2],
//   [3, 5],
//   [4, 7],
//   [6, 8],
//   [9, 10]
// ]
// Expected
// [
//    [1, 2],
//    [3, 8],
//    [9, 10],
// ]

function mergeOverlappingIntervals(intervals) {
  // test if there are at least 2 intervals
  if (intervals.length <= 1) {
    return intervals;
  }

  let stack = [];
  let top   = null;

  // sort the intervals based on their start values
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  // push the 1st interval into the stack
  stack.push(intervals[0]);

  // start from the next interval and merge if needed
  for (let i = 1; i < intervals.length; i++) {
    // get the top element
    top = stack[stack.length - 1];

    // if the current interval doesn't overlap with the
    // stack top element, push it to the stack
    if (top[1] < intervals[i][0]) {
      stack.push(intervals[i]);
    } else if (top[1] < intervals[i][1]) {
      // otherwise update the end value of the top element
      // if end of current interval is higher
      top[1] = intervals[i][1];
      stack.pop();
      stack.push(top);
    }
  }

  return stack;
}