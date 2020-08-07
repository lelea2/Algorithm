

// Parallel traversing
// O(n) for runtime
function findDomNodeInTree(rootA, rootB, targetNode) {
  if (rootA === targetNode) {
    return rootB;
  }

  let nodeB = null;

  for (let i =0; i < rootA.childNodes.length && nodeB === null; i++){
      nodeB = findDomNodeInTree(rootA.childNodes[i], rootB.childNodes[i], targetNode);
  }

  return nodeB;
}
