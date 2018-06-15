/*
 * Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.
 * The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.
 */

function sym() {

  // Convert the argument object into a proper array
  let args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  const getDiff = (arr1, arr2) => {
    // Returns items in arr1 that don't exist in arr2
    // non-intersection between 2 array
    function filterFunction(arr1, arr2) {
      return arr1.filter((item) => {
        return arr2.indexOf(item) === -1;
      });
    }
    // Run filter function on each array against the other then get unique values
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter((item, idx, arr) => {
        // Keep any items that are unique - the index of the current item === index of the first occurrence in the array
        return arr.indexOf(item) === idx;
      });
  };

  // Reduce all arguments getting the difference of them
  return args.reduce(getDiff, []);
}