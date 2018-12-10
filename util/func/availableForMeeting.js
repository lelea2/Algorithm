// Given a list of schedules, provide a list of times that are available for a meeting

// Example input:
// [
//   [[4,5],[6,10],[12,14]],
//   [[4,5],[5,9],[13,16]],
//   [[11,14]]
// ]

// Example Output:
// [[0,4],[11,12],[16,23]]

// First, make sure on interval

const input = [
  [[4,5],[6,10],[12,14]],
  [[4,5],[5,9],[13,16]],
  [[11,14]]
];

let intervals = [];
for (let i = 0; i < input.length; i++) {
  intervals = intervals.concat(input[i]);
}

function mergeIntervals(intervals) {
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

const bookSlot = mergeIntervals(intervals);

console.log(bookSlot);
let startTime = bookSlot[0][1];
let availArr = (bookSlot[0][0] > 0) ? [[0, bookSlot[0][0]]] : []; // first array if not 0

for(let i = 1; i < bookSlot.length; i++) {
  availArr.push([startTime, bookSlot[i][0]]);
  startTime = bookSlot[i][1];
}
if (startTime < 24) {
  availArr.push([startTime, 24]);
}

console.log(availArr);
