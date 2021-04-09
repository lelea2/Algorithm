
// Given an array of integers between 1 and n, inclusive,
// where n is the length of the array,
// Write a function that returns the first integer that appears more than once (when the array is read from left to right)

// Array [2, 1, 5, 2, 3, 3, 4] // n = 7
// Output: 2

// Store in a map/set
// O(n) runtime, O(n) spacetime
function firstDuplicateValue(array) {
  const seen = new Set();
  for (const value of array) {
    if (seen.has(value)) {
      return value;
    }
    seen.add(value);
  }
  return -1;
}

///////// Better solution, mark seen value as negative number
// O(n) runtime
// O(1) space
function firstDuplicateValue(array) {
  for (const value in array) {
    const absVal = Math.abs(value);
    if(array[absVal - 1] < 0) {
      return absVal;
    }
    array[absVal - 1] *= -1;
  }
  return -1;
}
// 2 -1 5 2 3 3 4
// -2 -1 5 2 3 3 4
// -2 -1 5 2 -3 3 4
// 2