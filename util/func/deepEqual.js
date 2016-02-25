/**
 * Checking deepEqaul object in JS
 */

function deepEqual (x, y) {
    if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length) {
            return false;
        }
        for (var prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop])) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return true;
    } else if (x !== y) {
        return false;
    } else {
        return true;
    }
}

var obj = {here: {is: "an", other: "3"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", other: "2"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", other: "3"}, object: 2}));
// → true

