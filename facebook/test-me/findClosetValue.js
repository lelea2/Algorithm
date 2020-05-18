// Average O(logn) time, O(1) space
// Worst O(n) time, O(1) space
function findClosestValueInBst(tree, target) {
  return findClosetValueHelper(tree, target, Infinity);
}

function findClosetValueHelper(tree, target, closet) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closet) > Math.abs(target - currentNode.value)) {
      closet = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closet;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

// Ex: tree
// {
//   "nodes": [
//     {"id": "10", "left": "5", "right": "15", "value": 10},
//     {"id": "5", "left": "2", "right": "5-2", "value": 5},
//     {"id": "15", "left": "13", "right": "22", "value": 15},
//     {"id": "2", "left": "1", "right": null, "value": 2},
//     {"id": "5-2", "left": null, "right": null, "value": 5},
//     {"id": "13", "left": null, "right": "14", "value": 13},
//     {"id": "22", "left": null, "right": null, "value": 22},
//     {"id": "1", "left": null, "right": null, "value": 1},
//     {"id": "14", "left": null, "right": null, "value": 14}
//   ],
//   "root": "10"
// }

// target: 12
