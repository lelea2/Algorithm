//   An array of integers is said to represent the Binary Search Tree (BST)
//   obtained by inserting each integer in the array, from left to right, into the
//   BST.

//   Write a function that takes in two arrays of integers and determines whether
//   these arrays represent the same BST

// Run time O(n^2)
// Space time: O(d) 
// n is number of nodes in each array, d is deth of BST that they represent
function sameBst(arrayOne, arrayTwo) {
  return areSameBst(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
}

function areSameBst(arrayOne, arrayTwo, rootIndex1, rootIndex2, minVal, maxVal) {
  if (rootIndex1 === -1 || rootIndex2 === -1) {
    return rootIndex1 === rootIndex2;
  }
  if (arrayOne[rootIndex1] !== arrayTwo[rootIndex2]) {
    return false;
  }

  const leftRootIndex1 = getIdxOfFirstSmaller(arrayOne, rootIndex1, minVal);
  const leftRootIndex2 = getIdxOfFirstSmaller(arrayTwo, rootIndex2, minVal);
  const rightRootIndex1 = getIdxOfFirstBigger(arrayOne, rootIndex1, maxVal);
  const rightRootIndex2 = getIdxOfFirstBigger(arrayTwo, rootIndex2, maxVal);

  const currVal = arrayOne[rootIndex1];
  const leftSame = areSameBst(arrayOne, arrayTwo, leftRootIndex1, leftRootIndex2, minVal, currVal);
  const rightSame = areSameBst(arrayOne, arrayTwo, rightRootIndex1, rightRootIndex2, currVal, maxVal);
  return leftSame && rightSame;
}

function getIdxOfFirstSmaller(array, startIndex, minVal) {
  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[i] < array[startIndex] && array[i] >= minVal) {
      return i;
    }
  }
  return -1;
}

function getIdxOfFirstBigger(array, startIndex, maxVal) {
  for (let i = startIndex + 1; i < array.length; i++) {
    if (array[i] >= array[startIndex] && array[i] <= maxVal) {
      return i;
    }
  }
  return -1;
}

// const arrayOne = [10, 15, 8, 12, 94, 81, 5, 2, 11];
// const arrayTwo = [10, 8, 5, 15, 2, 12, 11, 94, 81];
// return true