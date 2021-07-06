// the class store the corresponding index, and the diff between this float num
// to its floor int
class NumWithDiff {
	constructor(index, diffToFloor) {
    this.index = index;
    this.diffToFloor = diffToFloor;
  }
}

function roundPriceToMatchTarget(arr = [], target) {
  const numDiff = new Array(arr.length);
  const result = [];
  let floorSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let floor = Math.floor(arr[i]);
    result.push(floor);
    floorSum += floor;
    numDiff[i] = new NumWithDiff(i, arr[i] - floor);
  }

  numDiff.sort((a, b) => a.diffToFloor - b.diffToFloor);

  let i = arr.length - 1;
  // we want to round up some values
  // but we want to minimize each diffs
  // so we choose the biggest diff value, which means we can minimize each diffs
  while (target > floorSum) {
    let resI = numDiff[i].index;
    result[resI] = result[resI] + 1;
    floorSum++;
    i--;
  }
  return result;
}

console.log(roundPriceToMatchTarget([0.7, 2.8, 4.9], 8)); // [0,3,5]