// Given an array of positive integers arr[] and a sum x, find all unique combinations in arr[] where the sum is equal to x. 
// The same repeated number may be chosen from arr[] unlimited number of times. Elements in a combination (a1, a2, …, ak) must be printed in non-descending order. (ie, a1 <= a2 <= … <= ak). 
// Input : arr[] = 2, 4, 6, 8 
//             x = 8
// Output : [2, 2, 2, 2]
//          [2, 2, 4]
//          [2, 6]
//          [4, 4]
//          [8]

// 1. sort the array in non-decreasing order
// 2. demove duplicate in the array
// 3. recursion and backtracking
// 3.1 If at any time sub-problem sum == 0 then add that array to the result
// 3.2 Else if sum is negative then ignore that sub-problem.
// 3.3  Else insert the present array in that 
// index to the current vector and call 
// the function with sum = sum-ar[index] and
// index = index, then pop that element from 
// current index (backtrack) and call the 
// function with sum = sum and index = index+1

function combinationSum(arr, sum) {
	const result = [];
  let temp = [];

  // es6 array Set make array unique
  const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);
  findNumbers(result, sortedArr, temp, sum, 0);
  return result;
}

function findNumbers(result, arr, temp, sum, index) {
  if (sum === 0) {
    result.push([...temp]);
    return;
  }
  
  for (let i = index; i < arr.length; i++) {
    if (sum - arr[i] >= 0) {
      temp.push(arr[i]);
      findNumbers(result, arr, temp, sum - arr[i], i);
      temp.pop();
    }   
  }
}

console.log(combinationSum([2, 4, 6, 8], 8));
console.log(combinationSum([3,12,9,11,6,7,8,5,4], 15));

// [ [ 2, 2, 2, 2 ], [ 2, 2, 4 ], [ 2, 6 ], [ 4, 4 ], [ 8 ] ]                      
// [ [ 3, 3, 3, 3, 3 ],                                                            
//   [ 3, 3, 3, 6 ],                                                               
//   [ 3, 3, 4, 5 ],                                                               
//   [ 3, 3, 9 ],                                                                  
//   [ 3, 4, 4, 4 ],                                                               
//   [ 3, 4, 8 ],                                                                  
//   [ 3, 5, 7 ],                                                                  
//   [ 3, 6, 6 ],                                                                  
//   [ 3, 12 ],                                                                    
//   [ 4, 4, 7 ],                                                                  
//   [ 4, 5, 6 ],                                                                  
//   [ 4, 11 ],                                                                    
//   [ 5, 5, 5 ],                                                                  
//   [ 6, 9 ],                                                                     
//   [ 7, 8 ] ]