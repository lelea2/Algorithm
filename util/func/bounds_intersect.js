// values [0.2, 1.5, 2, 3, 2.5, -10]
// bounds [[0, 5], [1, 4] , [-2, 3]]
// Find intersects that values satisfy all the array
// [ 1.5, 2, 3, 2.5 ]

function intersect(values, bounds) {
  let min = -Infinity;
  let max = Infinity;
  // find bounds intersect
  for (let j = 0; j < bounds.length; j++) {
    if (min < bounds[j]) {
      min = bounds[j];
    }
    if (max > bounds[j]) {
      max = bounds[j];
    }
  }
  const intersectBounds = [min, max];
  const results = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] >= intersectBounds[0] && values[i] <= intersectBounds[1]) {
      results.push(values[i]);
    }
  }
  return results;
}

console.log(intersect([0.2, 1.5, 2, 3, 2.5, -10], [[0, 5], [1, 4] , [-2, 3]]));
// [ 1.5, 2, 3, 2.5 ] 