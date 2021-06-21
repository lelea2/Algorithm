// Write a function that takes in a non-empty array of integers that are sorted in ascending order
// Return a new array of the same length with the squares of the original integers sorted in ascending order

// Run time O(n)
// Space time O(n)
function sortedSquaredArray(array) {
  const sortedArr = new Array(array.length).fill(0);
  let smallerValIndex = 0;
  let largerValIndex = array.length - 1;

  for (let i = array.length - 1; i >=0; i--) {
    const smallerVal = array[smallerValIndex];
    const largerVal = array[largerValIndex];
    if (Math.abs(smallerVal) > Math.abs(largerVal)) {
      sortedArr[i] = smallerVal * smallerVal;
      smallerValIndex++;
    } else {
      sortedArr[i] = largerVal * largerVal;
      largerValIndex--;
    }
  }
  return sortedArr;
}

// const input = [1, 2, 3, 5, 6, 8, 9];
// const expected = [1, 4, 9, 25, 36, 64, 81];