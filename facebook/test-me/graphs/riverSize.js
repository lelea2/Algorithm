
// O(wh) run time, O(wh) space time
function riverSizes(matrix) {
  const sizes = [];
  // mark matrix as unvisited node
  const visited = matrix.map(row => row.map(value => false));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (visited[i][j]) continue;
      traverseNode(i, j, matrix, visited, sizes);;
    }
  }
  return sizes;
}

// depth first search
function traverseNode(i, j, matrix, visited, sizes) {
  let currentSize = 0;
  const nodeToExplore  = [[i, j]];
  while(nodeToExplore.length > 0) {
    const currNode = nodeToExplore.pop();
    i = currNode[0];
    j = currNode[1];
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) {
      continue;
    } else {
      currentSize++;
      // find unvisited neighbors
      const unVisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
      for (const neighbor of unVisitedNeighbors) {
        nodeToExplore.push(neighbor);
      }
    }
  }
  if (currentSize > 0) {
    sizes.push(currentSize);
  }
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];
  if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
  if (j > 0 && !visited[i][j - 1])  unvisitedNeighbors.push([i, j - 1]);
  if (j < matrix[0].length && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
  return unvisitedNeighbors;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;
