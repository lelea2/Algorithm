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

// Second solution
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
