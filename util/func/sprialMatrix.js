/*
0,0  1,0  2,0

0,1  1,1  2,1

0,2  1,2  2,2


example output for n=3:
0,0
1,0
2,0
2,1
2,2
1,2
0,2
0,1
1,1
*/


function printMatrix(i, j, length) {
  let idir = 1;
  let jdir = 1;
  while (i < length && j < length) {
    print ([i][j]);
    if (i < length - 1 && i > 0) {
      i = i + idir;
    } else if ( i === x -1) { // last index of x
      if (j < length - 1) {
         j = j + jdir;
      } else { // j == y -1;
         idir = -1;
         i = i + idir;
      }
    } else if (i === 0 && j > 0) {
      jdir = -1;
      j = j + jdir;
    } else {
      printMatrix(i + 1, j + 1, length - 2);
    }
  }
}

