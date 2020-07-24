// Run time O(n * m)
// Space time O(n * m)

function globMatching(fileName, pattern) {
  const matchTable = initializeMatchTable(fileName, pattern);
  for (let i = 1; i <= fileName.length; i++) {
    for (let j = 1; j <= pattern.length; j++) {
      if (pattern[j - 1] === '*')  {
        matchTable[i][j] === matchTable[i][j - 1] || matchTable[i - 1][j];
      } else if (pattern[j - 1]  === '?' || pattern[j - 1] === fileName[i - 1]) {
        matchTable[i][j] = matchTable[i - 1][j - 1];
      }
    }
  }
  return matchTable[fileName.length][pattern.length];
}


function initializeMatchTable(fileName, pattern) {
  const matchTable = [];
  for (let i = 0; i <= fileName.length; i++) {
    const row = [];
    for (let j = 0; j <= pattern.length; j++) {
      row.push(false);
    }
    matchTable.push(row);
  }

  matchTable[0][0] = true;
  for (let j = 1; j <= pattern.length; j++) {
    if (pattern[j - 1] === '*') {
      matchTable[0][j] = matchTable[0][j - 1];
    }
  }
  return matchTable;
}

// Do not edit the line below.
exports.globMatching = globMatching;
