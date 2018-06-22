// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric: 
// But the following [1,2,2,null,3,null,3] is not:

// YES -- [1,2,2,3,4,4,3]
//      1
//    /   \
//   2     2
//  / \   / \
// 3   4 4   3  

// NO -- [1,2,2,null,3,null,3]
//    1
//  /   \
// 2     2
//  \     \
//   3     3

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
var isSymmetric = function(root) {
  if(root == null || (root.right == null && root.left == null) ){
    return true;
  }

  // reverse tree on the right
  root.right = revertTree(root.right);
  return isSameTree(root.left, root.right);

  // Function to reverse tree
  function revertTree(node) {
    if (node == null || node.left == null && node.right == null) {
      return node;
    }
    var temp = revertTree(node.left); // temp -> left (reverse child)
    node.left = revertTree(node.right); // left -> right (reverse child)
    node.right = temp; // right -> temp
    return node;
  }

  // function checking similar tree
  function isSameTree(left,right) {
    if(left == null && right== null) {
      return true;
    }
    if(left == null && right != null || right == null &&left != null) {
      return false;
    }
    if(left.val != right.val) {
      return false;
    }
    return isSameTree(left.right, right.right) && isSameTree(left.left, right.left);
  }
};