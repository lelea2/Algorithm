/**
 * How can you match substring of a sting?
 */

//Idea: Will use to pointer (one for string and another for the substring) while iterating the string. And will have another variable to hold the starting index of the initial match.

function subStringFinder(str, subStr){
    var idx = 0,
        i = 0,
        j = 0,
        len = str.length,
        subLen = subStr.length;
    for(var i = 0; i<len; i++) {
        if(str[i] == subStr[j]) {
            j++;
        } else {
            j = 0;
        }

        //check starting point or a match
        if(j == 0) {
            idx = i; //update your index to be the new starting point
        } else if (j === subLen) { //if fit str length
            return idx;
        }
    }
    return -1; //return -1 if no string match
}

//Test cas
subStringFinder('abbcdabbbbbck', 'ab') //Result: 0
subStringFinder('abbcdabbbbbck', 'bck') //Result: 9
subStringFinder('abbcdabbbbbck', 'bbbck') //Result: -1 -- not find substring
