/**
 * Implement of cache function in JS
 */

//Solution 1, assume that only 1 argument being passed

function cacheFn(fn) {
    var cache={};
    return function(arg) {
        if (cache[arg]){ //If available in cache, read from it
           return cache[arg];
        } else {
            cache[arg] = fn(arg); //store new cache
            return cache[arg];
        }
    }
}

//Function contains multiple argument,
//Idea: use JS apply, call to parse arguments, and store cache key
return function() {
    var args = arguments;
    var key = [].slice.call(args).join('');
    if(cache[key]) { //Read from cache key
        return cache[key];
    } else { //Store cache key if it's not available and return value
        cache[key] = fn.apply(this, args); //Assume that function "fn" defined
        return cache[key];
    }
}
