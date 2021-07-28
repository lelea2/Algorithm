/**
 * How to find the largest sum between 2 elements?
 */

//Idea: find 2 largest number in the array and return them
//Run time complexity: O(n)
function largestSum(arr) {
  var biggest = arr[0],
      second = arr[1],
      len = arr.length;
  if (len<2) { //If array length < 2, then we could not find largest sum
    return null;
  }
  if (biggest<second) { //Find the largest number among the first 2 indexes
    biggest = arr[1];
    second = arr[0];
  }
  for(var i = 2; i<len; i++) {
    if(arr[i] > biggest) { //Change both first the second bigest if find the larger number for all
      second = biggest;
      biggest = arr[i];
    } else if (arr[i]>second) {
      second = arr[i];
    }
  }
  return biggest + second; //Largest sum will be the sum of 2 largest number
}

// Second solution (not keeping track of index)
Array.prototype.largestSum = function maxSubArraySum() {
  var maximumSoFar = this[0],
      currentMaximum = this[0];
  for (var i = 0; i < this.length; i++) {
    currentMaximum = this[i] >= (currentMaximum + this[i]) ?
                      this[i] : currentMaximum + this[i];
    maximumSoFar = maximumSoFar >= currentMaximum ?
                    maximumSoFar : currentMaximum;
  }
  return maximumSoFar;
}


Array.prototype.largestSum = function maxSubArraySum() {
  var maximumSoFar = this[0],
      currentMaximum = this[0],
      start = 0, end = 0, maxEnd = 0;

  // a single for loop to go through items JUST ONCE !!
  for (var i = 1; i < this.length; i++) {
    // see note** below for this condition
    if (this[i] >= (currentMaximum + this[i])) {
      currentMaximum = this[i];
      start = i;
      end = i;
    } else {
      currentMaximum += this[i];
      end = i;
    }
    // check if you found a value greater than max so far.
    if (currentMaximum >= maximumSoFar) {
      maximumSoFar = currentMaximum;
      maxEnd = end; // update last index if you did.
    }
  }
  return {
    value: maximumSoFar,
    indices: [start, maxEnd] // not "end", as it would be the last array index.
  };
}


function largestSum(arr) {
  let maxSoFar = arr[0];
  let currMax = arr[0];
  let start = 0;
  let end = 0;
  let maxEnd = 0;
  for (let i = 1; i < arr.length; i++) {
    const curr = currMax + arr[i];
    if (curr <=0) {
      currMax = arr[i];
      start = i;
      end = i;
    } else {
      currMax = curr;
      end = i;
    }
    if (currMax >= maxSoFar) {
      maxSoFar = currMax;
      maxEnd = end;
    }
  }
  return {
    value: maxSoFar,
    indices: [start, end]
  };
}

// input - [0, -1, 1, 1, 1, -1, -1, 3, -1, 0];
// Result - value = 4, indices = [2, 7]
