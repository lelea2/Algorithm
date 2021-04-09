// Write a function that takes in an array of at least two integers and returns an array of the starting and ending indices
// of the smallest subarray in the input array that needs to be sorted in place in order for the entire input array to be sorted
// in ascending order
// If the array is already sorted, the function should return [-1, -1]

// Sample
// array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
// Result
// [3, 9]
function subArraySort(array) {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }
  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }
  let subArrayLeftIndex = 0
  while (minOutOfOrder >= array[subArrayLeftIndex]) {
    subArrayLeftIndex++;
  }
  let subArrayRightIndex = array.length - 1;
  while (maxOutOfOrder <= array[subArrayRightIndex]) {
    subArrayRightIndex--;
  }
  return [subArrayLeftIndex, subArrayRightIndex];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) { // first index
    return num > array[i + 1];
  }
  if (i === array.length - 1) { // last index
    return num < array[i - 1];
  }
  // ascending order
  return num > array[i + 1] || num < array[i - 1];
}