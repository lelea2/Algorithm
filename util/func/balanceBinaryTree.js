// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as a binary tree
// in which the depth of the two subtrees of every node never differ by more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if(root == null || (root.right == null && root.left == null)) {
    return true;
  }
  // Find roogt depth
  var dL = findDeep(root.left);
  var dR = findDeep(root.right);

  // difference between left and right
  var diff = Math.abs(dL-dR) <= 1;

  // Check balance of the child node
  return diff && isBalanced(root.left) && isBalanced(root.right);

};

function findDeep(root) {
  if(root == null) {
    return 0;
  }
  var deepL = 1 + findDeep(root.left);
  var deepR = 1 + findDeep(root.right);

  return deepL > deepR ? deepL:deepR;
}
