// Given a set of non-negative integers, and a value sum,
// determine if there is a subset of the given set with sum equal to given sum.

// Examples: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
// Output:  True  //There is a subset (4, 5) with sum 9.

// Naive approach (recursive)
function isSubsetSum(arr, n, sum) {
  if (sum === 0) {
    return true;
  }
  if (n === 0 && sum !== 0) {
    return false;
  }
  // If last element is greater
  // than sum, then ignore it
  if (arr[n - 1] > sum) {
    return isSubsetSum(arr, n - 1, sum);
  }
  /* else, check if sum can be 
       obtained by any of the following
        (a) including the last element
        (b) excluding the last element */
  return isSubsetSum(arr, n -1, sum) || isSubsetSum(arr, n - 1, sum - arr[n -1]);
}

// Dynamic program
// We create a boolean 2D table subset[][] and fill it in bottom up manner.
// The value of subset[i][j] will be true if there is a subset of set[0..j-1]
// with sum equal to i., otherwise false. Finally, we return subset[sum][n]
function isSubsetSum(arr, n, sum) {
  // The value of subset[i][j] will
  // be true if there is a subset of
  // set[0..j-1] with sum equal to i
  let subset = new Array();
  // If sum is 0, then answer is true
  for (let i = 0; i <= n; i++) {
    subset[i][0] = true;
  }
  // If sum is not 0 and set is empty,
  // then answer is false
  for (let i = 1; i <= sum; i++) {
    subset[0][i] = false;
  }
  // Fill the subset table in botton
  // up manner
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (j < arr[i-1]) {
        subset[i][j] = subset[i-1][j];
      }
      if (j >= arr[i-1]) {
        subset[i][j] = subset[i-1][j] || subset[i - 1][j - arr[i-1]];
      }
    }
  }
  return subset[n][sum];
}
