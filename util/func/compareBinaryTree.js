// Given two binary trees, write a function to check if they are equal or not.
// Two binary trees are considered equal if they are structurally identical
// and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  // If both is null
  if(p === null && q=== null) {
    return true;
  }
  // one null, other is not null, false
  if(p !== null && q === null || p === null && q !== null) {
    return false;
  }
  // val diff, false
  if(p.val != q.val) {
    return false;
  }
  // find next level of tree (left and right)
  return isSameTree(p.right, q.right)&&isSameTree(p.left, q.left);
};