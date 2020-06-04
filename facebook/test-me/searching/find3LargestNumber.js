// Write a function that takes in an array of integers and without sorting, return the sorted array of 3 largest integer number

function _updateLargest(arr, num) {
  if (arr[2] === null || num > arr[2]) {
    update(arr, num, 2);
  } else if (arr[1] === null || num > arr[1]) {
    update(arr, num, 1);
  } else if (arr[0] === null || num > arr[0]) {
    update(arr, num, 0);
  }
}

// shift and update array
function update(arr, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      arr[i] = num;
    } else {
      arr[i] = arr[i + 1];
    }
  }
}
// O(n) time, O(1) space
function findThreeLargestNumbers(array) {
  // set up array this way to get mutable
  const threeLargest = [null, null, null];
  for (const num of array) {
    _updateLargest(threeLargest, num);
  }
  return threeLargest;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
