// This is an input class. Do not edit.
class BinaryTree {
	constructor(value) {
this.value = value;
this.left = null;
this.right = null;
}
}

// Average case when tree is balanced
// O(n) time - n is number of node
// O(h) space - h is height of the tree
function binaryTreeDiameter(tree) {
return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
  if (tree === null) {
    return new TreeInfo(0, 0);
  }
  
  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);
  
  const longestPathThroughout = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
  const currentDiameter = Math.max(longestPathThroughout, maxDiameterSoFar);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);
  
  return new TreeInfo(currentDiameter, currentHeight);
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

// Do not edit the line below.
exports.binaryTreeDiameter = binaryTreeDiameter;
exports.BinaryTree = BinaryTree;