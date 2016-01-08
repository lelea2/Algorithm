/**
 * Function to merge 2 sorted array, return a final sorted array
 */

//Loop through array 1 and arry2, can use while loop
//Since both arr are sorted, increment array with smaller number and continue
function mergeSortedArray(arr1, arr2) {
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    //Idea: keep a pointer with arr1 and arr2
    //result arr is concatenation of 2 given array
    var i = 0,
        j = 0,
        mergedArr = [];
    //continue to loop to finish the array
    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] <= arr2[j]) { //arr1 has smaller value
            mergedArr.push(arr1[i]);
            i++;
        } else { //if arr2 has smaller value
            mergedArr.push(arr2[j]);
            j++;
        }
    }
    return mergedArr;
}

module.exports = mergeSortedArray;
