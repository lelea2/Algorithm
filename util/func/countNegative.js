// Optiomal solution
// Traverse the matrix from right-> left, top -> bottom.
// Find the last negative number’s index in the 1st row.
// Using this information, find the last negative number’s index in the 2nd row.
// Keep repeating this process until either you run out of negative numbers or you get to the last row.

const countNegative = ( M, n, m ) => {
  var count = 0;
  // start from top right
  var i = 0;
  var j = m - 1;
  while ( j >= 0 && i < n ) {
    if ( M[i][j] < 0 ) {
      // last negative number is at index j. Hence, there j + 1 negative numebrs at index i
      count += (j + 1);
      // Move to the next row
      i += 1;
    } else {
      // Move to the next column
      j -= 1;
    }
  }
  return count;
};

var M = [ 
  [-3, -2, -1,  1],
  [-2,  -12,  3,  4],
  [4,   5,  7,  8]
];

console.log(countNegative(M, 3, 4)); // 5