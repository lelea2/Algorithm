//Referenced: https://github.com/trusktr/list-flatten/blob/master/src/index.js

function flatten(array) {
    var currentArray = Array.from(array); // ES2015, in case we pass an array-like thing.
    var breadcrumbs = [];
    var result = [];

    var i=0
    while (currentArray) {

        if (currentArray[i] instanceof Array) {
            breadcrumbs.push({currentArray, i});
            currentArray = currentArray[i];
            i = -1;
        } else {
            result.push(currentArray[i]);
        }

        var crumb = null;
        while ( currentArray && i === currentArray.length - 1 ) {
            crumb = breadcrumbs.pop();
            currentArray = crumb ? crumb.currentArray : null;
            i = crumb ? crumb.i : null;
        }

        i+=1;
    }

    return result;
}
