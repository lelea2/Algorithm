// isolated layer wrapper (for the local variables)
(function (_W) {

  var cache = [],                // will store all timeouts IDs
    _set = _W.setTimeout,      // save original reference
    _clear = _W.clearTimeout;  // save original reference

  // Wrap original setTimeout with a function
  _W.setTimeout = function (CB, duration) {
    // also, wrap the callback, so the cache referece will be removed
    // when the timerout has reached (fired the callback)
    var id = _set(function () {
      CB();
      removeCacheItem(id);
    }, duration || 0);

    cache.push(id); // store reference in the cache array

    // id must be returned to the user could save it and clear it if they choose to
    return id;
  }

  // Wrap original clearTimeout with a function
  _W.clearTimeout = function (id) {
    _clear(id);
    removeCacheItem(id);
  }

  // Add a custom function named "clearTimeouts" to the "window" object
  _W.clearTimeouts = function () {
    cache.forEach(n => _clear(n))
    cache.length = [];
  }

  // removes a specific id from the cache array
  function removeCacheItem(id) {
    var idx = cache.indexOf(id);

    if (idx > -1)
      cache = cache.filter(n => n != id)
  }

})(window);
