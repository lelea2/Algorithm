// Run time O(n^2)
function getInvCount(n) {
  let inv_count = 0;
  for (int i = 0; i < n - 1; i++) {
    for (int j = i+1; j < n; j++) {
      if (arr[i] > arr[j]) {
        inv_count++;
      }
    }
    return inv_count;
  }
}

// Run time (O(nlogn))
function countInversions(array) {
  // Note: this uses a variant of merge sort

  //input handlers
  if (array === undefined) throw new Error("Array must be defined to count inversions");
  if (array.length === 0 || array.length === 1) return 0;
  
  var tally = 0; // count for inversions
  sort(array); // merge sort the array and increment tally when there are crossovers
  return tally;

  function sort(arr) {
    if (arr.length === 1) {
      return arr;
    }
    var right = arr.splice(Math.floor(arr.length/2), arr.length - 1);
    return merge(sort(arr), sort(right));
  }
  function merge(left, right) {
    var merged = [];
    var l = 0, r = 0;
    var multiplier = 0;
    while (l < left.length || r < right.length) {
      if (l === left.length){
        merged.push(right[r]);
        r++;
      } else if (r === right.length) {
        merged.push(left[l]);
        l++;
        tally += multiplier;
      } else if (left[l] < right[r]) {
        merged.push(left[l]);
        tally += multiplier;
        l++;
      } else {
        merged.push(right[r]);
        r++;
        multiplier++;
      } 
    }
    return merged;
  }
}

//tests to run in console
/*
console.assert(countInversions([1, 2, 3]) === 0, "Zero inversions for 1, 2, 3");
console.assert(countInversions([1, 3, 2]) === 1, "One inversion for 1, 3, 2");
console.assert(countInversions([1, 3, 2, 4]) === 1, "One inversion for 1, 3, 2, 4");
console.assert(countInversions([1, 3, 2, 4, 5]) === 1, "One inversions for 1, 3, 2, 4, 5");
console.assert(countInversions([3, 1, 2, 4, 5]) === 2, "Two inversions for 3, 1, 2, 4, 5");
console.assert(countInversions([3, 2, 1, 4, 5]) === 3, "Three inversions for 3, 2, 1, 4, 5");
console.assert(countInversions([3, 2, 1, 4, 5, 6]) === 3, "Three inversions for 3, 2, 1, 4, 5, 6");
console.assert(countInversions([6, 5, 4, 3, 2, 1]) === 15, "Fifteen inversions for 654321");
*/