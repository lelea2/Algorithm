// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Input: grid = [
// 	["1","1","1","1","0"],
// 	["1","1","0","1","0"],
// 	["1","1","0","0","0"],
// 	["0","0","0","0","0"]
// ]
// Output: 1

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

function numbOfIsland(grid) {
  let count = 0;
  // Run time: O(n^2)
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        visitAdjacent(i, j, grid);
      }
      visit(i, j, grid);
    }
  }
  return count;
}

function visitAdjacent(i, j, grid) {
  // left
  if (visit(i, j - 1, grid)) {
    visitAdjacent(i, j - 1, grid);
  }
  // right
  if (visit(i, j + 1, grid)) {
    visitAdjacent(i, j + 1, grid);
  }
  // top
  if (visit(i - 1, j, grid)) {
    visitAdjacent(i - 1, j, grid);
  }
  // bottom
  if (visit(i + 1, j, grid)) {
    visitAdjacent(i + 1, j, grid);
  }
}

function visit(i, j, grid) {
  if (i < 0 || i >= grid.length) {
    return false;
  } else if (j < 0 || j >= grid[0].length) {
    return false;
  } else if (grid[i][j] === '1') {
    // found land, mark as visit
    grid[i][j] = -1;
    console.log(grid);
    return true;
  } else {
    return false;
  }
}

console.log(numbOfIsland([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"] 
])); // 1

console.log(numbOfIsland([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"] 
])); // 3