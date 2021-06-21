// Given an array of ints = [6, 4, 0, 5, 0, 0, 0, 1, 0] move all non zero numbers to the left and zeros to the right. 
// How can you now improve your answer to O(n)?

// O(n)
function move_zeros_to_left(arr = []) {
  if (arr.length < 1) {
    return;
  }
  let write_index = arr.length - 1;
  let read_index = arr.length - 1;

  while (read_index >= 0) {
    if (arr[read_index] !== 0) {
      arr[write_index] = arr[read_index];
      write_index -= 1;
    }
    read_index -= 1;
  }
  while(write_index >= 0) {
    arr[write_index] = 0;
    write_index -= 1;
  }
  console.log(arr);
}
// move_zeros_to_left([6, 4, 0, 5, 0, 0, 0, 1, 0])
// move_zeros_to_left([6, 4, 0, 5, 0, 0, 0, 1, 0, 0])
// move_zeros_to_left([0, 6, 4, 0, 5, 0, 0, 0, 1, 0])


function pushZerosToEnd(arr) {
  let count = 0; // Count of non-zero elements

  // Traverse the array. If element encountered is non-
  // zero, then replace the element at index 'count'
  // with this element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[count++] = arr[i]; // here count is incremented
    }
  }

  // Now all non-zero elements have been shifted to
  // front and 'count' is set as index of first 0.
  // Make all elements 0 from count to end.
  while (count < arr.length) {
    arr[count++] = 0;
  }
  console.log('>>>Result:', arr);
}
 

// pushZerosToEnd([6, 4, 0, 5, 0, 0, 0, 1, 0])
// pushZerosToEnd([6, 4, 0, 5, 0, 0, 0, 1, 0, 0])
// pushZerosToEnd([0, 6, 4, 0, 5, 0, 0, 0, 1, 0])
// >>>Result: [ 6, 4, 5, 1, 0, 0, 0, 0, 0 ]                                        
// >>>Result: [ 6, 4, 5, 1, 0, 0, 0, 0, 0, 0 ]                                     
// >>>Result: [ 6, 4, 5, 1, 0, 0, 0, 0, 0, 0 ]  