// write function that takes in two non-empty array of integers
// and find the pair of numbers whose absolute difference closet to 0

// Run time: O(nlog(n)) + O(mlog(m))
// Space time: O(1)
function smallestDifference(arr1, arr2) {
  arr1.sort((a, b) => a -b);
  arr2.sort((a, b) => a -b);
  let idx1 = 0;
  let idx2 = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idx1 < arr1.length && idx2 < arr2.length) {
    const firstNum = arr1[idx1];
    const secondNum = arr2[idx2];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idx1++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idx2++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

// arr1: [-1, 5, 10, 20, 28, 3]
// arr2: [26, 134, 135, 15, 17]
// result: [28, 26]
