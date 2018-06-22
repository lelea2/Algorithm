// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
// For example: Given the below binary tree and sum = 22,
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \      \
//         7    2      1

// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(root == null) {
    return false;
  }

  var list = [];
  sumR2L(root, 0);
  return sumR2L(root, 0);

  function sumR2L(root, s) {
    if(root.left == null && root.right == null) { // if root does not have child 
      list.push(s);
      s += root.val;
      return s == sum;
    } 
    if(root.left != null && root.right == null) { // left has child, right not has child
      return sumR2L(root.left, s + root.val);
    }
    if(root.right != null && root.left == null) { // right has child, left not has child
      return sumR2L(root.right, s + root.val);
    }
    // both left and right has child
    return sumR2L(root.left, s + root.val) || sumR2L(root.right, s + root.val);
  }
};
