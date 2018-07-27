// Given a Binary Tree where each node has positive and negative values.
// Convert this to a tree where each node contains the sum of the left and right sub trees
// in the original tree. The values of leaf nodes are changed to 0.

// For example, the following tree

//           10
//           /      \
//     -2        6
//       /   \      /  \ 
// 8     -4    7    5

// Change to
//             20(4-2+12+6)
//           /      \
//   4(8-4)      12(7+5)
//       /   \      /  \ 
// 0      0    0    0

// Solution
// Do a traversal of the given tree. 
// In the traversal, store the old value of the current node,
// recursively call for left and right subtrees and
// change the value of current node as sum of the values returned by the recursive calls.
// Finally return the sum of new value and value (which is sum of values in the subtree rooted with this node).

function Node (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinaryTree () {
  this.root  = null
}

function toSumTree(node) {
  if (node === null) {
    return 0;
  }
  // store old value
  let old_val = node.val;
  // Recursively call for left and right subtrees and store the sum
  // as new value of this node
  node.val = toSumTree(node.left) + toSumTree(node.right);

  // Return the sum of values of nodes in left and right subtrees
  // and old_value of this node
  return node.val + old_val;
}

function printInOrder(node) {
  if (node === null) {
    return;
  }
  console.log(printInOrder(node.left));
  console.log(node.val + " ");
  console.log(printInOrder(node.right));
}
