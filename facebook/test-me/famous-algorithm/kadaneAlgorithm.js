// Write a function that takes non-empty array
// amd return the max sum that can obtained

// O(n) run time, O(1) space time
function kadanesAlgorithm(array) {
  let maxEnding = array[0];
  let maxSoFar = array[0];
  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    maxEnding = Math.max(num, maxEnding + num);
    maxSoFar = Math.max(maxSoFar, maxEnding);
  }
  return maxSoFar;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;

// array: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// output: 19
