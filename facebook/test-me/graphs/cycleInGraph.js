// Given a list of edges representing an unweighted, directed graph with at least one node
// Write a function that returns boolean representing whether the give graph contains a cycle

// O(v + e) time
// O(v) space time
// where v is number of vertices and e is the number of edges in graph
function cycleInGraph(edges) {
  const numberOfNodes = edges.length;
  const visited = new Array(numberOfNodes).fill(false);
  const currentlyInStack = new Array(numberOfNodes).fill(false);

  for (let node = 0; node < numberOfNodes; node++) {
    if (visited[node]) {
      continue;
    }
    const containsCycle = inNodeCycle(node, edges, visited, currentlyInStack);
    if (containsCycle) {
      return true;
    }
  }
  return false;
}

function inNodeCycle(node, edges, visited, currentlyInStack) {
  visited[node] = true;
  currentlyInStack[node] = true;
  const neighbors = edges[node];
  for (const neighbor in neighbors) {
    if (!visited[neighbor]) {
      const containsCycle = isNodeCycle(neighbor, edges, visited, currentlyInStack);
      if (containsCycle) {
        return true;
      }
    } else if (currentlyInStack[neighbor]) {
      return true;
    }
  }
  currentlyInStack[node] = false;
  return false;
}