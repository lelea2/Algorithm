/**
 * From a unsorted array, check whether there are any two numbers that will sum up to a given number?
 */

//Idea: the simplest way is looping through the array to find it
//Expected running complexity it O(n^2)
function sumFinder(arr, sum) {
    var len = arr.length;
    for(var i = 0; i < len-1; i++) {
        for(var j = i+1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}


//Can't we make it better?
//Idea: since this doesnt say exact pair of number, we could do the following trick:
//Loop through the array only once, find the diff between sum and certain number in array
//Check if the second number required is in array
function sumFinder2(arr, sum) {
    var len = arr.length,
        substract;
    for(var i =0; i<len; i++) {
        substract = sum - arr[i];
        if ((array.indexOf(substract) > -1) && (substract !== arr[i])) {
            return true;
        }
    }
    return false;
}
