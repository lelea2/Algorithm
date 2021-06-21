// Write function that takes array and construct BST tree with min height

// O(nlog(n)) run time
// O(n)  space (n is length of the array)
function minHeightBst(array) {
  return constructTree(array, null, 0, array.length - 1);
}

function constructTree(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;
  const minIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = array[minIdx];
  if (bst === null) {
    bst = new BST(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }
  // left node
  constructTree(array, bst, startIdx, minIdx - 1);
  // right node
  constructTree(array, bst, minIdx + 1, endIdx);
  return bst;
}
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
