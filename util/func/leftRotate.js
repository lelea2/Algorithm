function leftRotate(node) {
  var rightNode = node.right;

  // right is a node and not a leaf
  if (rightNode.nodeType === 'node') {
    // copy node content
    var content = node.content;
    node.content = rightNode.content;
    rightNode.content = content;

    // left rotation
    node.right = rightNode.right;
    rightNode.right = rightNode.left;
    rightNode.left = node.left;
    node.left = rightNode;

    leftRotate(rightNode);
  }
};

var Expression = function(content, left, right) {
  this.content = content;
  this.left = left;
  this.right = right;

  // left rotate this node down the tree
  leftRotate(this);
};