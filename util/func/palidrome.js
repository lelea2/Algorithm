/**
 * Determine if a string is palidrome (reverse of the string is the same as its original)
 */

//Idea: loop through 1st half of the given string and compare it to the last half of given str
function isPalidrome(str) {
    var len = str.length / 2;
    for (var i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

//Alternate solution,
//Using string split, reverse array and re-join
function isPalidrome2(str) {
    str = str.replace(/\W/g, '').toLowerCase(); //case insensitive
    return (str == str.split('').reverse().join(''));
}
