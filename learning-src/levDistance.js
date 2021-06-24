// https://www.linkedin.com/pulse/javascript-algorithms-levenshteins-distance-om-shankar/
function calculateLevDistance1 (src, target) {
  if (!tgt.length) return src.length;
  if (!src.length) return tgt.length;

  return Math.min(
    calculateLevDistance( src.slice(1), tgt ) + 1, calculateLevDistance( tgt.slice(1), src ) + 1,
    calculateLevDistance( src.slice(1), tgt.slice(1) ) + ( src[0] == tgt[0] ? 0 : 1 )
  );
}

function calculateLevDistance(src, tgt) {
  var realCost;

  var srcLength = src.length,
    tgtLength = tgt.length,
    tempString, tempLength; // for swapping

  var resultMatrix = new Array();
    resultMatrix[0] = new Array(); // Multi dimensional

  // To limit the space in minimum of source and target,
  // we make sure that srcLength is greater than tgtLength
  if (srcLength < tgtLength) {
    tempString = src; src = tgt; tgt = tempString;
    tempLength = srcLength; srcLength = tgtLength; tgtLength = tempLength;
  }

  for (var c = 0; c < tgtLength+1; c++) {
    resultMatrix[0][c] = c;
  }

  for (var i = 1; i < srcLength+1; i++) {
    resultMatrix[i] = new Array();
    resultMatrix[i][0] = i;
    for (var j = 1; j < tgtLength+1; j++) {
      realCost = (src.charAt(i-1) == tgt.charAt(j-1))? 0: 1;
      resultMatrix[i][j] = Math.min(
        resultMatrix[i-1][j]+1,
        resultMatrix[i][j-1]+1,
        resultMatrix[i-1][j-1] + realCost // same logic as our previous example.
      );
    }
  }

  return resultMatrix[srcLength][tgtLength];
}
