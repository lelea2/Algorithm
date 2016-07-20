/**
 * My own collection of functionalities checking Javascript object that i found useful
 */

/**
 * Helper function checking if response is object
 * @method isObject
 */
function isObject(obj) {
    return (obj === Object(obj) && !Array.isArray(obj));
}

/**
 * Helper function checking if current object is JSON
 * @method isJSON
 */
function isJSON(input) {
    //If input is object return right away
    if (isObject(input)) {
        return true;
    }
    //Trying to parse JSON, if successful, then that is JSON object
    try {
        JSON.parse(input);
    } catch (ex) {
        return false;
    }
    return true;
}

/**
 * Helper function to check for is empty object
 * @method isEmptyObject
 */
function isEmptyObj(obj) {
    //Idea: checking Objects.key(obj).length to make sure obj has key
    try {
        var isEmpty = (!Object.keys(obj).length);
        return isEmpty;
    } catch(ex) {
        return true;
    }
}

/**
 * Clone an object
 * @method cloneObj
 */
function cloneObj(obj) {
    var target = {};
    for (var i in obj) {
        //Check if key is valid with "hasOwnProperty"
        if (obj.hasOwnProperty(i)) {
            target[i] = obj[i];
        }
    }
    return target;
}

/**
 * Helper function to extend the current object
 * If obj1 and obj2 has the same key, obj2 will overwrite obj1
 * This function will only extend the first level
 * @method extendObj
 */
function extendObj(obj1, obj2) {
    var origObj;
    // Don't do anything if add isn't an object
    if (!obj2 || typeof obj2 !== 'object') {
        return obj1;
    }

    var keys = Object.keys(obj2),
        i = keys.length;
    while (i--) {
        obj1[keys[i]] = obj2[keys[i]];
    }
    return obj1;
}

/**
 * Checking object equality
 * Notice: this only check for the first level of the object
 */
function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

/**
 * Helper function to remove empty value in object
 * @method removeEmptyValues
 */

function removeEmptyValues(obj) {
    for (var propName in obj) {
        if (typeof propName === 'object') {
            removeEmptyValues(propName);
        } else if (!obj[propName] || obj[propName].length === 0) {
            delete obj[propName];
        }
    }
    return obj;
}

