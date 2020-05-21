// Function to move all instances of integer to the end of the array

// O(n) run time, O(1) space time
function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    if (array[j] === toMove) {
      j--;
    }
    if (array[i] === toMove) {
      swapElem(i, j, array);
    }
    i++;
  }
  return array;
}

// helper funtion to swap array
function swapElem(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
