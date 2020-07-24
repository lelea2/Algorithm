// Write a function that takes a non-empty array of distinct integers and return
// a array of sets that sum up to target sum
// Note: naive solution is looping through array to generate set,
// which result O(n^3) in runtime

// O(n^2) runtime, O(n) space
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b); // ascending sorting
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++)  {
    let left = i +1;
    let right = array.length - 1;
    while(left < right) {
      const currSum = array[i] + array[left] + array[right];
      if (currSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currSum < targetSum) {
        left++;
      } else if (currSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

// array: [12, 3, 1, 2, -6, 5, -8, 6]
// target: 0
// output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
