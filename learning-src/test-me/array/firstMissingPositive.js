// Find the smallest positive number missing from an unsorted array


// Traverse the array, Ignore the elements which are greater than n and less than 1.
// While traversing check a[i]!=a[a[i]-1] if this condition hold true or not .
// If the above condition is true then swap a[i], a[a[i] – 1]  && swap until a[i] != a[a[i] – 1]  condition will fail .
// Traverse the array and check whether a[i] != i + 1 then return i + 1.
// If all are equal to its index then return n+1.


// Solution 1
const findFirstMissingPos = arr =>
    [...Array(Math.max(...arr) + 1).keys()]
        .filter(int => !arr.includes(int + 1))[0] + 1;

// Solution 2
function firstMissingPositive(arr, n) {
  // Check if 1 is present in array or not
  for(let i = 0; i < n; i++) {    
    // Loop to check boundary
    // condition and for swapping
    while (arr[i] >= 1 && arr[i] <= n && arr[i] != arr[arr[i] - 1]) {
      // swap 
      let temp = arr[arr[i]-1];
      arr[arr[i]-1] = arr[i];
      arr[i] = temp;
    }
  }
  
  console.log('>>>>', arr);
  // Finding which index has value less than n
  for(let i = 0; i < n; i++) {
    if (arr[i] != i + 1) {
      return (i + 1);
    }
  }

  // If array has values from 1 to n
  return (n + 1);
}

let arr=[2, 3, -7, 6, 8, 1, -10, 15 ];
console.log(firstMissingPositive(arr, arr.length));
// >>>> [ 1, 2, 3, -7, 15, 6, -10, 8 ]
// 4

console.log(firstMissingPositive([3, 4, -1, 1], 4)); // 2
console.log(firstMissingPositive([1, 2, 0], 3)); // 3
 