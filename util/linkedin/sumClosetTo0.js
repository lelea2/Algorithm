function diff(arr, p) {
  return Math.abs(arr[p[0]] + arr[p[1]]);
}

function isBetter(arr, p1, p2) {
  return diff(arr, p1) < diff(arr, p2);
}

// O(n^2)
function sumZero(arr){
  let bestPair = [0, 1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (isBetter(arr, [i, j], bestPair)) {
        bestPair = [i, j];
      }
    }
  }
  return bestPair;
}


// 1) Sort all the elements of the input array.
// 2) Use two index variables l and r to traverse from left and right ends respectively. Initialize l as 0 and r as n-1.
// 3) sum = a[l] + a[r]
// 4) If sum is -ve, then l++
// 5) If sum is +ve, then r–
// 6) Keep track of abs min sum.
// 7) Repeat steps 3, 4, 5 and 6 while l < r

// O(n)
function minAbsSumPair(arr, n) {
  // Variables to keep track of current sum and minimum sum
  var sum,
      min_sum = 999999;
  // left and right index variables
  var l = 0,
      r = n-1;
  // variable to keep track of the left and right pair for min_sum
  var min_l = l,
      min_r = n-1;
  /* Array should have at least two elements*/
  if(n < 2) {
    return;
  }
  arr.sort((a, b) => {
    return a > b
  });

  while(l < r) {
    sum = arr[l] + arr[r];
    /*If abs(sum) is less then update the result items*/
    if(Math.abs(sum) < Math.abs(min_sum)) {
      min_sum = sum;
      min_l = l;
      min_r = r;
    }
    if(sum < 0) {
      l++;
    } else {
      r--;
    }
  }
}
