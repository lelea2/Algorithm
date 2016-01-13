/**
 * How to keep the array sorted when you insert data into the array
 */

//Idea: Binary search, assume given array already sorted in ascending order
//In this problem solving, no duplicated record will be insert,
//if element already existed in the array, then we don't insert that anymore
//Recursive solution

function binaryInsert(value, array, startVal, endVal) {
    var length = array.length;
    var start = (typeof startVal !== 'undefined') ? startVal : 0;
    var end = (typeof endVal !== 'undefined') ? endVal : (length - 1);
    var m = start + Math.floor((end - start)/2); //find median of the tree
    //If empty array given, then return array with value insert right away
    if(length === 0) {
        array.push(value);
        return;
    }
    //If value > the last element of the array, then add value as last element of the array
    if(value > array[end]) {
        array.push(value); //push
        return;
    }
    //If value < the first element of the given array, then append it to the first element of the array
    //Do array.splice for this, deleteCount = 0
    if(value < array[start]) {
        array.splice(start, 0, value);
        return;
    }
    //Return if start and end index collided
    if(start >= end) {
        return;
    }
    //Walk the binary tree as following
    //Walk left
    if(value < array[m]) {
        binaryInsert(value, array, start, m - 1);
        return;
    }
    //Walk right
    if(value > array[m]) {
        binaryInsert(value, array, m + 1, end);
        return;
    }
}
