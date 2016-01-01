/**
 * Reverse a string without using reverse() string method
 */

//Note to self:
//String concatenation works OK with modern browser,
//However, it might become slow in old browser, eg: IE < 8,
//Therefore, the first approach, runtime O(n), put char in array in reverse order, then do join
function stringReverse(str) {
    var arr = [];
    if (!str || str.length < 1) {
        return str;
    }
    for (var i = str.length - 1; i >=0 ; i--) {
        arr.push(str[i]);
    }
    return arr.join();
}

//We could do it in a recursive way, which will always concat charAt(0) at the end
function stringReverse2(str) {
    if (!str || str.length < 1) {
        return str;
    }
    return stringReverse2(str.substr(1)) + str.charAt(0);
}

//We could also do it using method
function stringReverse3(str) {
    if (!str || str.length < 1) {
        return str;
    }
    return str.split('').reverse().join('');
}
