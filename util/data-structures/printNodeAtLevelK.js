//        1
//      /   \
//    2      3
//  /  \    /
// 4    7  8 

const printNodesAtLevelK = (root, k) => {
  if (root === NULL) {
    return;
  }
  if (k === 0) {
    console.log(`Node at Level k = ${root.data}`);
    return;
  } else {
    printNodesAtLevelK(root.left, k-1);
    printNodesAtLevelK(root.right, k-1);
  }
};
