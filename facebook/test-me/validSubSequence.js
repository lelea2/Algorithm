// Run time: O(n)
// Space time: O(1)
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrIdx = 0;
  let seqIdx = 0;
  while(arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    arrIdx++;
  }
  return sequence.length === seqIdx;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
