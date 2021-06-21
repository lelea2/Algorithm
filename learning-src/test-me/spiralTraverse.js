// O(n) run time,
// O(n) space
function spiralTraverse(array) {
  const result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;
  while(startRow <= endRow && startCol <= endCol) {
    // push element on col (left -> right)
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    // push element on row (up -> down)
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }
    // push element on ccol (right -> left)
    for (let col = endCol - 1; col >= startCol; col--) {
      // edge case when there is a single row in the middle of the matrix,
      // break so we don't double count
      if (startRow === endRow) {
        break;
      }
      result.push(array[endRow][col]);
    }
    // push element on row (down -> up)
    for (let row = endRow - 1; row > startRow; row--) {
      // edge ccase where single column in middle of matrix to avoid double count
      if (startCol === endCol) {
        break;
      }
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;

// {"array": [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]}
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

