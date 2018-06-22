// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: 
// “The lowest common ancestor is defined between two nodes v and w as the lowest node in 
// T that has both v and w as descendants (where we allow a node to be a descendant of itself).”
//       _6_
//     /    \
//    2      8
//   / \    / \
//  0   4  7   9
//     / \
//    3   5

// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. 
// Another example is LCA of nodes 2 and 4 is 2, 
// since a node can be a descendant of itself according to the LCA definition.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  var count = 0;

  while(true) {
    var value = root.val;
    if (p.val >= value && value >= q.val || p.val <= value && value <= q.val) {
      return root;
    } else if(p.val > value && q.val > value){
      root =  root.right;
    } else {
      root =  root.left;
    }
  }
};