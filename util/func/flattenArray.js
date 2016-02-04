/**
 * Flaten array in JS
 * Eg: [1, [2, [ [3, 4], 5], 6]] ==> [1, 2, 3, 4, 5, 6]
 */
//This question is to test the capability to traverse structure
//Recursive call
function flatten (arr, resultArr) {
    var result = resultArr || [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flatten(arr[i], result);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

//Usage of array.reduce, array.concat (notice: this is also recursive call)
//Syntax: arr.reduce(callback[, initialValue])
function flatten2(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten2(toFlatten) : toFlatten);
    }, []);
}
flatten2([1, [2, [ [3, 4], 5], 6]]);

//Flatten array given certain depth

/**
 * Flatten an array with depth.
 *
 * @param  {Array}  array
 * @param  {Array}  result
 * @param  {number} depth
 * @return {Array}
 */
function flattenDownDepth (array, result, depth) {
    depth--;
    for (var i = 0; i < array.length; i++) {
        var value = array[i];

        if (depth > -1 && Array.isArray(value)) {
            flattenDownDepth(value, result, depth);
        } else {
            result.push(value);
        }
    }
    return result;
}
