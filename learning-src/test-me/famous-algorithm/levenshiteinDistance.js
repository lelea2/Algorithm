// Write a function that takes two strings and returns minimum
// number of edit operations that need to be perform to obtain the 2nd string
// eg:
// str1: "abc", str2: "yabd"
// 2 operators: insert y, substitute d for c

// dynamic programming
// building 2D array, making 2 strings has the same length
// 	  "" y a b d
// "" 0  1 2 3 4
// a  1  1 1 2 3
// b  2  2 2 1 2
// c  3
// if str1[r - 1] === str2[c - 1]: E[r][c] = E[r - 1][c - 1]
// else E[r][c] = 1 + min(E[r][c-1]), E[r -1][c], E[r-1][c-1])
// O(nm) run time
// O(nm) space time
function levenshteinDistance(str1, str2) {
  // 2d array metrix
  const edits = [];
  // build 2d array metrix
  // account for prefix empty string (length + 1)
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }
  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] == str1[j-1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] = 1 + Math.min(edits[i - 1][j - 1], edits[i -1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;
