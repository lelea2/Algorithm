// This is the class of the input root.
// Do not edit it.
// O(n) time and O(n) space
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const sums = [];
  calculateBranchSum(root, 0, sums);
  return sums;
}

function calculateBranchSum(node, runningSum, sums) {
  if (!node) {
    return;
  }
  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }
  calculateBranchSum(node.left, newRunningSum, sums);
  calculateBranchSum(node.right, newRunningSum, sums);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
