/**
 * Function to find first non repeat character in a string
 * @return {string} first character not being repeated
 */

//Idea: Create an object to keep track of number of repeat char in array
//Key of the object is that char
//Notice: this solution work only with ASCII (need to find better solution for unicode)
//For case insenstive, we could transfrom string to lowerCase first
//Return false if there is no char that is non-repeated
function findFirstNonRepeatChar(str) {
    var charCount = {};
    for (var i = 0; i < str.length; i++) {
        if (!charCount[str[i]]) {
            charCount[str[i]] = 1;
        } else {
            charCount[str[i]]++;
        }
    }
    for(var j in charCount) {
        if (charCount[j] === 1) {
            return j;
        }
    }
    return false;
}
