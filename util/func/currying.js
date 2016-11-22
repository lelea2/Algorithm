/**
 * What is currying?
 * -- Curring is partial invocation of a function.
 * Currying means first few arguments of a function is pre-processed and a function is returned.
 * The returning function can add more arguments to the curried function.
 * It's like if you have given one or two spice to the curry and cooked little bit,
 * still you can add further spice to it.
 */

Function.prototype.curry = function() {
    if (arguments.length < 1) {
        return this; //nothing to curry. return function
    }
    var self = this;
    var args = Array.prototype.slice.call(args);
    return function() {
        return self.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    }
}

