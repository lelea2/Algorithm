// Suppose we have n cargos in a queue that we want to ship from one location to another location. Find the minimum ship capacity we need to deliver all cargos in 5 days

// For example
// Cargo: 1 2 3 4 5 6 7 8 9 10
// 1. Find the sum of all weight: 55
// 2. Use binary search to find the minimum capacity that is capable of shipping all cargo in 5 days.

function findMinimumCapacity(weights = [], days = 5) {
  // Keep track of the range of remaining capacities to try out. 
  let left = 0;
  let right = weights.reduce((acc, curr) => acc + curr, 0);

  // Keep track of the minimum capacity found so far.
  let minimumCapacity = -1;
  
  // Binary search loop to find the mimimum capacity. 
  while (right - left > 1) {
    // Typical binary search algorithm: find the midpoint. 
    let capacity = (right + left) / 2;
    if (shipInGivenDays(weights, capacity, days)) {
      // Case 1. Shipping all cargoes in 5 days possible with the
      // given capacity: discard the right side of possibilities.
      right = capacity;
      minimumCapacity = capacity;
    } else {
      // Case 2. Cannot ship all cargoes with the given capacity:
      // discard the left side of possibilities.
      left = capacity;
    }
  }

  return minimumCapacity;
}

// Returns true if it is possible to ship all the given weights 
// with the given capacity in 5 days. 
function shipInGivenDays(weights = [], capacity, days) {
  let currentSum = 0;
  let count = 0;
  for (let i = 0; i < weights.length; i++) {
    // If a cargo is heavier than the given capacity, we
    // cannot ship this specific cargo at all.
    if (weights[i] > capacity) {
      return false;
    }

    // No more space to add an additional cargo.
    if (currentSum + weights[i] > capacity) {
      count++;
      currentSum = 0;
    }

    currentSum += weights[i];
  }

  // Last cargo has not been counted in the while loop so plus 1.
  return count + 1 <= days;
}


console.log(findMinimumCapacity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15.46875 ~ 16