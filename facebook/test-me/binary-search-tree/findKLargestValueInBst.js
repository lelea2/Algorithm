class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
  constructor(numberOfNodesVisited, latestVisitedNodeValue) {
    this.numberOfNodesVisited = numberOfNodesVisited;
    this.latestVisitedNodeValue = latestVisitedNodeValue;
  }
}

// O(h + k) run time
// O(h) space time
// h - height of the tree & k - input parameter
function findKthLargestValueInBst(tree, k) {
  const treeInfo = new TreeInfo(0, -1);
  reverseInOrderTraverse(tree, k, treeInfo);
  return treeInfo.latestVisitedNodeValue;
}

function reverseInOrderTraverse(node, k, treeInfo) {
  if (node === null || treeInfo.numberOfNodesVisited >= k) {
    return;
  }
  reverseInOrderTraverse(node.right, k, treeInfo);
  if (treeInfo.numberOfNodesVisited < k) {
    treeInfo.numberOfNodesVisited++;
    treeInfo.latestVisitedNodeValue = node.value;
    reverseInOrderTraverse(node.left, k, treeInfo)
  }
}

// {
//   "k": 3,
//   "tree": {
//     "nodes": [
//       {"id": "15", "left": "5", "right": "20", "value": 15},
//       {"id": "20", "left": "17", "right": "22", "value": 20},
//       {"id": "22", "left": null, "right": null, "value": 22},
//       {"id": "17", "left": null, "right": null, "value": 17},
//       {"id": "5", "left": "2", "right": "5-2", "value": 5},
//       {"id": "5-2", "left": null, "right": null, "value": 5},
//       {"id": "2", "left": "1", "right": "3", "value": 2},
//       {"id": "3", "left": null, "right": null, "value": 3},
//       {"id": "1", "left": null, "right": null, "value": 1}
//     ],
//     "root": "15"
//   }
// }