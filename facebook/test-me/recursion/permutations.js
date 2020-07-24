// O(n*n!)time | O(n*n!) space
function getPermutations(array) {
  const perms = [];
  getPermHelper(0, array, perms);
  return perms;
}

function getPermHelper(i, array, perms) {
  if (i === array.length - 1) {
    perms.push(array.slice());
  } else {
    for(let j = i; j < array.length; j++) {
      swap(i, j, array);
      getPermHelper(i + 1, array, perms);
      swap(i, j, array);
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
// Do not edit the line below.
exports.getPermutations = getPermutations;

// input: [1,2, 3]
// output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
