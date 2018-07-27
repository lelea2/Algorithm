// Write a function that returns true if the given Binary Tree is SumTree else false.
// A SumTree is a Binary Tree where the value of a node is equal to sum of the nodes
// present in its left subtree and right subtree.
// An empty tree is SumTree and sum of an empty tree can be considered as 0.
// A leaf node is also considered as SumTree.
//         26
//       /   \
//     10     3
//   /    \     \
// 4      6      3

// Run time: O(n)

// 1) If the node is a leaf node then sum of subtree rooted with this node is equal to value
// of this node.
// 2) If the node is not a leaf node then sum of subtree rooted with this node is
// twice the value of this node (Assuming that the tree rooted with this node is SumTree).
function Node (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinaryTree () {
  this.root  = null
}

function isLeaf(node) {
  if (node === null) {
    return false;
  }
  // there is no child leafs
  if (node.left === null && node.right === null) {
    return true;
  }
  return false;
}

function isSumTree(node) {
  let ls = null; // left subtree
  let rs = null; // right subtree

  /* If node is NULL or it's a leaf node then return true */
  if (node == null || isLeaf(node) === 1) {
    return 1;
  }
  if (isSumTree(node.left) != 0 && isSumTree(node.right) != 0) {
    // Get the sum of nodes in left subtree
    if (node.left == null) {
      ls = 0;
    } else if (isLeaf(node.left) != 0) {
      ls = node.left.data;
    } else { // has child
      ls = 2 * (node.left.data);
    }
    // Get the sum of nodes in right subtree
    if (node.right == null) {
      rs = 0;
    } else if (isLeaf(node.right) != 0) {
      rs = node.right.data;
    } else {
      rs = 2 * (node.right.data);
    }
    /* If root's data is equal to sum of nodes in left
       and right subtrees then return 1 else return 0*/
    if ((node.data == rs + ls)) {
      return true;
    } else {
      return false;
    }
    return false;
  }
}
