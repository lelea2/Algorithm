// Run time: O(mlog(n))

function mapNodes(edges) {
  let nodeMap = {}; //hash table
  // Construct relationship table between 2 edges
  edges.forEach(edge => {
    let node1 = edge[0]; //first edge
    let node2 = edge[1]; // second edge
    if (!nodeMap[node1]) { // if not not existing
      nodeMap[node1] = [node2];
    } else {
      else nodeMap[node1].push(node2);
    }
    if (!nodeMap[node2]) {
      nodeMap[node2] = [node1];
    } else {
      nodeMap[node2].push(node1);
    }
  });
  return nodeMap;
}

// DFS
function dfsForest(nodeMap) {
  let forest = [];
  let nodes = Object.keys(nodeMap); // fid all the keys
  while (true) {
    let root = +nodes.find((node) => {
      return !nodeMap[node].visited;
    }); // see how many time visit the root
    if (isNaN(root)) {
      break; // all nodes visited
    }
    forest.push(dfs(root, nodeMap));
  }
  return forest;
}

function dfs(root, nodeMap, tree = []) {
  if (tree.includes(root)) {
    return tree; // base case
  }
  tree.push(root);
  nodeMap[root].visited = true;
  let connectedNodes = nodeMap[root];
  for (let i = 0; i < connectedNodes.length; i++) {
    let connectedNode = connectedNodes[i];
    dfs(connectedNode, nodeMap, tree);
  }
  return tree;
}


// Performance test
let edges = [];
for (let i = 0; i < 5000; i++) {
    let node1 = Math.floor(Math.random() * 30000);
    let node2 = Math.floor(Math.random() * 30000);
    edges.push([node1, node2])
}
let start = performance.now();
let nodeMap = mapNodes(edges);
let forest = dfsForest(nodeMap);

let end = performance.now();
let totalTime = end - start;
console.log(forest, totalTime)
