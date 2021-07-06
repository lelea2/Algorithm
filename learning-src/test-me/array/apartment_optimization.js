// blocks = [{
// 	"gym": true,
//   "school": false,
//   "store": false,
// }, {
//   "gym": true,
//   "school": false,
//   "store": true, 
// }, {
//   "gym": true,
//   "school": true,
//   "store": false
// }, {
//   "gym": false,
//   "school": true,
//   "store": false
// }, {
//   "gym": false,
//   "school": true,
//   "store": true
// }];

// reqs = ["gym", "school", "store"]
// EXPECT VALUE: 3

// Brutforce: get distance from other block => O(b^2)
// Loop through reqs to get and compare to get the shortest distance
// Run time: O(b^2*r);

// Better performance???
// Loop through blocks once to find array of distance
// loop through array of distance to get array of distance from block 
// Run time: O(br)
// Space time: O(br)
function apartmentHunting(blocks, reqs) {
  const minDistanceFromBlocks = reqs.map(req => getMinDistances(blocks, req));
  console.log('>>> minDistanceFromBlocks', minDistanceFromBlocks);
  // [ [ 0, 0, 0, 1, 2 ],                                  
  // [ Infinity, 1, 0, 0, 0 ],                                                     
  // [ Infinity, 0, 1, 1, 0 ] ] 
  const maxDistanceAtBlocks = getMaxDistanceAtBlocks(blocks, minDistanceFromBlocks);
  console.log('>>> maxDistanceAtBlocks', minDistanceFromBlocks);
  // [ [ 0, 0, 0, 1, 2 ],                                    
  // [ Infinity, 1, 0, 0, 0 ],                                                     
  // [ Infinity, 0, 1, 1, 0 ] ] 

  return getIdxAtMinValue(maxDistanceAtBlocks);
}

function getIdxAtMinValue(array) {
  let idxAtMinValue = 0;
  let minValue = Infinity;
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      idxAtMinValue = i;
    }
  }
  return idxAtMinValue;
}

function getMaxDistanceAtBlocks(blocks, minDistanceFromBlocks) {
  const maxDistanceAtBlocks = new Array(blocks.length);
  for (let i = 0; i < blocks.length; i++) {
    const minDistanceAtBlocks = minDistanceFromBlocks.map(distances => distances[i]);
    maxDistanceAtBlocks[i] = Math.max(...minDistanceAtBlocks);
  }
  return maxDistanceAtBlocks;
}

function getMinDistances(blocks, req) {
  const minDistances = new Array(blocks.length);
  let closetReqIdx = Infinity;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) {
      closetReqIdx = i;
    }
    minDistances[i] = distanceBetween(i, closetReqIdx);
  }
  for (let i = blocks.length - 1; i > 0; i--) {
    if (blocks[i][req]) {
      closetReqIdx = i;
    }
    minDistances[i] = Math.min(minDistances[i], distanceBetween(i, closetReqIdx));
  }
  return minDistances;
}

function distanceBetween(a, b) {
  return Math.abs(a - b);
}

/******************************************************/
/******************** TEST ****************************/
/******************************************************/
const blocks = [{
	"gym": true,
  "school": false,
  "store": false,
}, {
  "gym": true,
  "school": false,
  "store": true, 
}, {
  "gym": true,
  "school": true,
  "store": false
}, {
  "gym": false,
  "school": true,
  "store": false
}, {
  "gym": false,
  "school": true,
  "store": true
}];

const reqs = ["gym", "school", "store"];

console.log(apartmentHunting(blocks, reqs));