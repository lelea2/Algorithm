/**
 * Logic to remove duplicate characters
 */

//Idea: Create object to keep strack of char key
//Re-walk through new object create, only concat char that only repeated once
function removeDuplicateChar(str) {
    var len = str.length,
        char,
        charCount = {},
        newStr = [];
    for(var i =0; i<len; i++) {
        char = str[i];
        if(charCount[char]) { //If key already exists
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    //Loop through array key
    for (var j in charCount){
        if (charCount[j] === 1) {
            newStr.push(j);
        }
    }
    return newStr.join('');
}
