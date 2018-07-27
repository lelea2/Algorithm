// Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise starting from the root.
// For example, boundary traversal of the following tree is “20 8 4 10 14 25 22”

// We break the problem in 3 parts:
// 1. Print the left boundary in top-down manner.
// 2. Print all leaf nodes from left to right, which can again be sub-divided into two sub-parts:
// …..2.1 Print all leaf nodes of left sub-tree from left to right.
// …..2.2 Print all leaf nodes of right subtree from left to right.
// 3. Print the right boundary in bottom-up manner.

function Node (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinaryTree () {
  this.root  = null
}

function printBoundaryLeft(node) {
  if (node !== null) {
    if (node.left !== null) {
      console.log(node.val + " ");
      printBoundaryLeft(node.left);
    } else if (node.right !== null) {
      console.log(node.val + " ");
      printBoundaryLeft(node.right);
    }
  }
}

function printBoundaryRight(node) {
  if (node !== null) {
    if (node.left !== null) {
      printBoundaryLeft(node.left);
      console.log(node.val + " ");
    } else if (node.right !== null) {
      printBoundaryLeft(node.right);
      console.log(node.val + " ");
    }
  }
}

function printLeaves(node) {
  if (node !== null) {
    printLeaves(node.left);
    if (node.left === null && node.right === null) {
      console.log(node.val + " ");
    }
    printLeaves(node.right);
  }
}
function printBoundary(node) {
  printBoundaryLeft(node.left);
  printLeaves(node.left);
  printLeaves(node.right);
  printBoundaryRight(node.right);
}