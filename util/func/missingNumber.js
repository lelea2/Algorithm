/**
 * You have an array of numbers 1 to 100 in an array. Only one number is missing in the array. The array is unsorted. Find the missing number.
 *  Idea: the sum of a linear series of n numbers = n*(n+1)/2
 *  If only 1 number is missing, we could do the sum of given array and compare to the expected result
 */

function missingNumber(arr) {
    var n = arr.length + 1, //find number of expected number in array
        sum = 0,
        expectedSum = n* (n+1)/2; //Sum of linear n numbers
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return expectedSum - sum;
}

//Test case
missingNumber([5, 2, 6, 1, 3]); //4
