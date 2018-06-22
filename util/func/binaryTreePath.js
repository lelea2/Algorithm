// Given a binary tree, return all root-to-leaf paths.
// For example, given the following binary tree:
//     1
//    / \
//   2   3
//    \
//     5  
// All root-to-leaf paths are: ["1->2->5", "1->3"]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(!root) { // if root null
    return [];
  }
  var list = [];
  findPath(root, "");
  return list;

  // This is helper function to find path of certain node
  function findPath(node, str) {
    if(node.right == null && node.left == null) { // end of node
      list.push(str + node.val); // push to maintain list
    } else {
      if (node.left != null) { // if left node is not null
        findPath(node.left, str + node.val + "->" );
      }
      if (node.right != null) { // if right node is not null
        findPath(node.right, str + node.val + "->" );
      }
    }
  }
};
