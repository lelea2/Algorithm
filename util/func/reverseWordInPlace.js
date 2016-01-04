/**
 * Function to reverse a sentence, and each word is reversed
 */
//Eg: "This is me" will become "sihT si em"
function reverseWordInPlace(str) {
    var wordLen = 0,
        result = '';
        temp = '';
    for (var i = str.length; i >=0; i--) {
        if (str[i] === ' ' || i === 0) { //Encounter blank or firstIndex
            if (i === 0) { //If first index, concat at the end of first word, and then add space
                result = temp + str[i] + ' ' + result;
            } else {
                result = temp + str[i] + result;
            }
            wordLen = 0;
            temp = '';
        } else {
            temp = temp + (str[i] || '');
            wordLen++;
        }
    }
    return result;
}

//Do it with browser method
//First reverse words by words, then reverse the whole result str
function reverseWordInPlace2(str) {
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
