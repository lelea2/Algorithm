// Write a function that takes in a potentially invalid BST and returns boolen represting whether BST is valid
// Eash BST node has an integer value, a left child node, right child node
// A node is said to be a valid BST node if and only if it satisfies BST property

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time - n is number of node in the tree
// O(d) space - d is depth of the tree
function validateBST(tree) {
  return isValidBST(tree, -Infinity, Infinity);
}

function isValidBST(tree, minValue, maxValue) {
  if (tree === null) {
    return true;
  }
  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }
  const leftValid = isValidBST(tree.left, minValue, tree.value);
  const rightValid = isValidBST(tree.right, tree.value, maxValue);
  return leftValid && rightValid;
}