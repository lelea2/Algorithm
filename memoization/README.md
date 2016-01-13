
* Reference from: http://www.sitepoint.com/implementing-memoization-in-javascript/

#### Problem statement

*Programs often waste time calling functions which recalculate the same results over and over again. This is particularly true with recursive and mathematical functions. (Eg: Fibonacci)


#### Definition
* Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Because **JavaScript objects behave like associative arrays**, they are ideal candidates to act as caches. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function.  However, if the data is not cached, then the function is executed, and the result is added to the cache.

#### Things to remember

* Memoization can potentially increase performance by caching the results of previous function calls.
* Memoized functions store a cache which is indexed by their input arguments.  If the arguments exist in the cache, then the cached value is returned.  Otherwise, the function is executed and the newly computed value is added to the cache.
* Object arguments should be stringified before using as an index.
* Memoization can be automatically applied to referentially transparent functions.
* Limitation:
 -- Memoization may not be ideal for infrequently called or fast executing functions.
 -- memoized functions consume additional memory. ==> memory consumption can be unbound

#### Automatic memoization function

```javascript
function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var args = slice.call(arguments);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(this, args));

  }
}
```


