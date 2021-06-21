// O(n) run time
// O(d) space time (d is depth of tree)

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function flattenBinaryTree(root) {
  const [leftMost, _] = flattenTree(root);
  return leftMost;
}

// helper function connecting node
function connectNodes(left, right) {
  left.right = right;
  right.left = left;
}

function flattenTree(node) {
  let leftMost, rightMost;
  // left
  if(node.left === null) {
    leftMost = node;
  } else {
    const [leftSubtreeLeftMost, leftSubtreeRightMost] = flattenTree(node.left);
    connectNodes(leftSubtreeRightMost, node);
    leftMost = leftSubtreeLeftMost;
  }
  // righht
  if(node.right === null) {
    rightMost = node;
  } else {
    const [rightSubtreeLeftMost, rightSubtreeRightMost] = flattenTree(node.right);
    connectNodes(node, rightSubtreeLeftMost);
    rightMost = rightSubtreeRightMost;
  }
  return [leftMost, rightMost];
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.flattenBinaryTree = flattenBinaryTree;
