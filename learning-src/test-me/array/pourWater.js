// We are given an elevation map, heights[i] representing the height of the terrain at that index. 
// The width at each index is 1. After V units of water fall at index K, how much water is at each index
// After V units of water fall at indexK, how much water is at each index?
// Water first drops at index K and rests on top of the highest terrain or water at that index. Then, it flows according to the following rules:
// If the droplet would eventually fall by moving left, then move left.
// Otherwise, if the droplet would eventually fall by moving right, then move right.
// Otherwise, rise at it's current position.
// Here, "eventually fall" means that the droplet will eventually be at a lower level if it moves in that direction. Also, "level" means the height of the terrain plus any water in that column.

// https://aaronice.gitbook.io/lintcode/array/pour-water

function pourWater(heights = [], v, k) {
  if (heights.length === 0 || v === 0) {
    return heights;
  }
  if (k < 0 || k > heights.length - 1) {
    return heights;
  }
  let n = heights.length;
  let index = 0;
  while (v > 0) {
    index = k;
    // find lowest / hole on the left
    for (let i = k - 1; i >= 0; i--) {
      if (heights[i] < heights[index]) {
        index = i;
      } else if (heights[i] > heights[index]) {
        break;
      }
    }

    if (index != k) {
      heights[index]++;
      v--;
      continue;
    }

    // find lowest on the right
    for (let i = k + 1; i < n; i++) {
      if (heights[i] < heights[index]) {
        index = i;
      } else if (heights[i] > heights[index]) {
        break;
      }
    }

    heights[index]++;
    v--;
  }
  return heights;
}

console.log(pourWater([2,1,1,2,1,2,2], 4, 3)); // [2,2,2,3,2,2,2]
