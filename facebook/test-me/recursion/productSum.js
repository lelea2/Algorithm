// Write a function that takes in a special arrays and returns its product sum.
// Eg: [x, y] === x + y;
// [x, [y, z]] === x + 2y + 2z;

function productSum(array, multiplier = 1) {
  let sum = 0;
  for (const element of array) {
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1);
    } else {
      sum += element;
    }
  }
  return sum * multiplier;
}

// Do not edit the line below.
exports.productSum = productSum;


// [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// == 5 + 2 + 2 * (7 + (-1)) + 3  + 2 (6  + 2 (-13 + 8)) + 4;
