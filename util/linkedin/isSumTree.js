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

// Run time: O(n^2)
function isSumTree (root) {
  if (!root || root.left === null && root.right === null) {
    return true;
  }

  let ls = sum(root.left);
  let rs = sum(root.right);

  // "isSumTree(root.left) !== false" => to check whether subtree sum is also valid
  if ((root.val === ls + rs) && (isSumTree(root.left) !== false) && (isSumTree(root.right) !== false)) return true

  return false;
}

// helper function to get sum of left children and right children
function sum (node) {
  if (!node) return 0;
  return sum(node.left) + node.val + sum (node.right);
}


function Node (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinaryTree () {
  this.root  = null
}

let myTree = new BinaryTree()
myTree.root = new Node (26);
myTree.root.left = new Node(10);
myTree.root.right = new Node(3)
myTree.root.left.left = new Node (4);
myTree.root.left.right = new Node (6);
myTree.root.right.right = new Node (3);
