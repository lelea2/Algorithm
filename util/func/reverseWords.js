/**
 * Function to reverse words of a sentences
 */

//Assume split is available
function reverseWords(str) {
    var arr = str.split(' '), //Split into array of words
        revArr = [];
    for (var i = arr.length - 1; i >=0; i--) {
        if (arr[i] !== '') { //handle multiple white space
            revArr.push(arr[i]);
        }
    }
    return revArr.join(' ');
}

//Assume that split is NOT available in this case
//Then we will need to walk through the array, startIndex=lastIndex,
//encounter for white space to get the wordLen

function reverseWords2(str) {
    var revArr = [],
        wordLen = 1;
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ' || i === 0) { //If encounter white space or first index
            revArr.push(str.subStr(i, wordLen + 1));
            wordLen = 0;
        } else { //If have not encounter white space or last index, increment wordLen
            wordLen++;
        }
    }
    return revArr.join(' ');
}

//Using method
function reverseWords3(str) {
    return str.split(' ').reverse().join(' ');
}
