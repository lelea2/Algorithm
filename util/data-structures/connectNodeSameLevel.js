var BST = new BinarySearchTree();

BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);
BST.insertNode(13);


function connectNodesAtSameLevel (BST) {
  var temp, temp2, queue = [];
  // Initialize roots height
  BST.root.height = 0;
  queue.push(BST.root);
  while (queue.length) {
    // Deque the Queue
    temp = queue.splice(0, 1)[0];
    // Set the nextRight for the temp node
    if (queue[0]) {
      temp2 = queue[0];
      if (temp.height === temp2.height) {
        temp.nextRight = temp2;
      } else {
        temp.nextRight = undefined;
      }
    }
    // Enqueue the Queue
    if (temp.left) {
      queue.push(temp.left);
      // Set relevant height
      temp.left.height = temp.height + 1;
    }
    if (temp.right) {
      queue.push(temp.right);
      temp.right.height = temp.height + 1;
    }

  }
}

connectNodesAtSameLevel(BST);
console.log(BST);
