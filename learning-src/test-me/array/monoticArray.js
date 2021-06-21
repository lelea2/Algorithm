// Write a function that takes in arrays of integers
// and return boolean whether array is monotonic
// Monotonic array is include elements (left to right)
// entirely non-increasing or non-decreasing

function isMonotonic(array) {
  if (array.length <= 2) {
    return true;
  }
  let direction = array[1] - array[0]; // define increase or decrease
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    // find out difference
    const difference = array[i] - array[i - 1];
    const inValidArr = (direction > 0) ? difference < 0 : difference > 0;
    if (inValidArr) {
      return false;
    }
  }
  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;

// input: {"array": [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]}
// result: true
