// Given a list of integers from the range [1, N] with some of the elements missing. The task is to find the missing elements. Note that there can be duplicates in the list.

// Traverse the array:
// For each element:
//     if array[element] > 0:
//           Mark the element as visited
// Again, traverse the array:
//      if element isNot Visited:
//            add it as missing element

// Run time: O(2n)
function missing_elements(vec) {
  // Vector to store the list
  // of missing elements
  let mis = [];
  
  // For every given element
  for (let i = 0; i < vec.length; i++) { 
	  // Find its index
    let temp = Math.abs(vec[i]) - 1;
  
    // Update the element at the found index
    vec[temp] = vec[temp] > 0 ? -vec[temp] : vec[temp];
  }
  
  for (let i = 0; i < vec.length; i++) {
    // Current element was not present
    // in the original vector
    if (vec[i] > 0) {
	    mis.push(i + 1);
    }
  }
  return mis;
}

console.log(missing_elements([ 3, 3, 3, 5, 1 ])); // [2 4]
 