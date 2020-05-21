// O(n) time, O(d) space (d is depth of tree)
function betterInvertBinaryTree(tree) {
  if (tree === null) return;
  swapNode(tree);
  betterInvertBinaryTree(tree.left);
  betterInvertBinaryTree(tree.right);
}

// O(n) time, O(n) space
function invertBinaryTree(tree) {
  const queue = [tree];
  while(queue.length) {
    const current = queue.shift();
    if (current === null) continue;
    swapNode(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

function swapNode(tree) {
  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
