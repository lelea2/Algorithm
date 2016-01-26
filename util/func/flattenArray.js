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


//Flatten the array, linear time
// This is done in a linear time O(n) without recursion
// memory complexity is O(1) or O(n) if mutable param is set to false
function flatten(array, mutable) {
    var toString = Object.prototype.toString;
    var arrayTypeStr = '[object Array]';

    var result = [];
    var nodes = (mutable && array) || array.slice();
    var node;

    if (!array.length) {
        return result;
    }

    node = nodes.pop();

    do {
        if (toString.call(node) === arrayTypeStr) {
            nodes.push.apply(nodes, node);
        } else {
            result.push(node);
        }
    } while (nodes.length && (node = nodes.pop()) !== undefined);

    result.reverse(); // we reverse result to restore the original order
    return result;
}

