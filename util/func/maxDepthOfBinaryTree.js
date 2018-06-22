// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.

var maxDepth = function(root) {
  return find(root);
  function find(node) {
    if(node === null) {
      return 0;
    }
    var deepL = 1;
    var deepR = 1;
    // Find depth on the left
    if(node.left !== null) {
      deepL += find(node.left)
    }
    // Fine dept on the right
    if(node.right !== null){
      deepR += find(node.right)
    }
    return deepL > deepR ?　deepL: deepR;
  }
};