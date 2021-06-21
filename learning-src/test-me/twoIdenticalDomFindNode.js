// Given two identical DOM tree structures, A and B, and a node from A, find the corresponding node in B
// Use parallel traversing

function findDomNodeInTree(rootA, rootB, targetNode) {
	if (rootA === targetNode) {
    return rootB;
	}
    
	let nodeB = null;
    
	for (let i=0; i < rootA.childNodes.length && nodeB === null; i++) {
    nodeB = findDomNodeInTree(rootA.childNodes[i], rootB.childNodes[i], targetNode);
	}
    
	return nodeB;
}

/***************************************************************************************/
/**********************************Find path ******************************************/
function indexOf(arrLike, target) {
  return Array.prototype.indexOf.call(arrLike, target);
}

// Given a node and a tree, extract the nodes path 
function getPath(root, target) {
  var current = target;
  var path = [];
  while (current !== root) {
    path.unshift(indexOf(current.parentNode.childNodes, current));
    current = current.parentNode;
  }
  return path;
}

// Given a tree and a path, let's locate a node
function locateNodeFromPath(root, path) {
  var current = root;
  for (var i = 0, len = path.length; i < len; i++) {
    current = current.childNodes[path[i]];
  }
  return current;
}

function getDoppleganger(rootA, rootB, target) {
  return locateNodeFromPath(rootB, getPath(rootA, target));
}