function binarySearchHelper(array, target, left, right) {
  if (left > right) {
    return -1;
  } else {
    const middle = Math.floor((left + right) / 2);
    const match = array[middle];
    if (target === match) {
      return middle;
    } else if (target < match) { // search left
      return binarySearchHelper(array, target, left, middle - 1);
    } else { // search right
      return binarySearchHelper(array, target, middle + 1, right);
    }
  }
}

// O(log(n)) time, O(log(n)) space
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length -1);
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
