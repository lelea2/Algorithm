// Solution
// Sort the given array
// Iterate through the sorter array and keep track of the longest subarray with continuous elements in another array
// Return the maximum number in the result array

// Time Complexity: O (n log n)

const lengthofLargestSubarrayWithContinuousElements = (arr) => {
  arr.sort(); // sorted array
  let count = [];
  let inLen = arr.length;
  let j = 0;
  let initalCount = 1;
  for (let i = 0; i < inLen; i++) {
    while( (arr[i] + 1) == arr[i+1] ) {
      count[j] = initalCount + 1;
      initalCount++;
      i++;
    }
    initalCount = 1;
    j++;
  }

  // filter null elements from an array
  count = count.filter(Number);
  
  return Math.max(...count);
};

console.log(lengthofLargestSubarrayWithContinuousElements([4, 2, 1, 20])) // 2

console.log(lengthofLargestSubarrayWithContinuousElements([2, 4, 3])) // 3

console.log(lengthofLargestSubarrayWithContinuousElements([1, 563, 585, 571, 90, 92, 94, 93, 91, 45])) // 5

