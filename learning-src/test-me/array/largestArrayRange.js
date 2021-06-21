// Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of integers contained in the array
// The first number in the output array should be the first number in the range, while second number should be the last number in the range

// array [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
// expected [0, 7]

// Naive solution: Sort the array, then loop through it, and check if the incremenent is by 1 => run time here is O(nlogn)

// Store our number in a hashtable
// Run time O(n)
// Space time O(n)
function largestRange(array) {
	let bestRange = [];
  let longestLength = 0;
  const nums = {};
  // Store hash table
  // every number in hash table map to boolean, that would tell us whether it's good or not 
  // raised the length and get the left and right value
  for (const num of array) {
    nums[num] = true;
  }
  for (const num of array) {
    if (!nums[num]) continue;
    nums[num] = false;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }
    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}