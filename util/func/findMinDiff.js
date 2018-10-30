// Given two arrays of integers, compute the pair of values (one value in each array)
// with the smallest (non-negative) difference. Return the difference.
// Input : A[] = {l, 3, 15, 11, 2}
//         B[] = {23, 127, 235, 19, 8} 
// Output : 3  
// That is, the pair (11, 8) 

// Input : A[] = {l0, 5, 40}
//         B[] = {50, 90, 80} 
// Output : 10
// That is, the pair (40, 50)


// How to:
// 1. Sory arrayA and arrayB, making sure these 2 arrays have the same length
// 2. Compare index in array and increment the array has smaller value
function  findSmallestDifference(arrayA=[], arrayB=[], m, n) {
  arrayB.sort((a, b) => a < b);
  arrayA.sort((a, b) => a < b);
  let result = Math.max(arrayA[0], arrayB[0]);
  let i, j = 0;
  while(i < m && j < n) {
    if (Math.abs(arrayA[i] - arrayB[j]) < result) {
      result = Math.abs(arrayA[i] - arrayB[j]);
    }
    if (arrayA[i] < arrayB[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}
