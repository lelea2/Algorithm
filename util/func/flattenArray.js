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

