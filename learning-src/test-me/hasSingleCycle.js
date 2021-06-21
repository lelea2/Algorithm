// O(n) run time, O(1) space. time
function hasSingleCycle(array) {
  let numElementVisited = 0;
  let currIndex = 0;
  while(numElementVisited < array.length) {
    if (numElementVisited > 0 && currIndex === 0) {
      return false;
    }
    numElementVisited++;
    currIndex = getNextIndex(currIndex, array);
  }
  return currIndex === 0;
}

function getNextIndex(currentIdx, array) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;

// [2, 3, 1, -4, -4, 2]
// true
