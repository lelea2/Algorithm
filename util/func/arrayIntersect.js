/**
 * Find intersection between 2 array with pure js
 */

//Idea: create a hashvalue to check for existing variable
//pick either arr1, arr2 to create this hashvalue
//Loop through the remaining array to check for same value
//Result the third array which is intersection of these 2 array
//Assume that indexOf works (not encounter for IE8)
function arrayIntersect(arr1, arr2) {
    var hashArr = {}, //hash value obj
        arr = [];//result array
    for (var i = 0; i < arr2.length; i++) {
        hashArr[arr2[i]] = true;
    }
    for (var j = 0; j < arr1.length; j++) {
        if (hashArr[arr1[j]] === true && arr.indexOf(arr1[j]) < 0) {
            arr.push(arr1[j]);
        }
    }
    return arr;
}