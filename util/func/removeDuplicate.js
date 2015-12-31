/**
 * Function to remove duplicate value in array
 * @return array with non-duplicate value
 */
//Idea: create array maintain a list of key element, if true, which means element already there

function removeDuplicate(arr) {
    var exist = {},
        newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var elem = arr[i];
        if (!exists[elem]) {
            newArr.push(elem);
            exists[elem] = true;
        }
    }
    return newArr;
}

module.exports = removeDuplicate;
