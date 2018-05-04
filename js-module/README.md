### 1. The difference between AMD, CommonJS and UMD

* AMD (Asynchrounous module definition) ~ RequireJS

```javascript
define(['jquery', 'underscore'], function ($, _) {
  //    methods
  function a(){};    //    private because it's not returned (see below)
  function b(){};    //    public because it's returned
  function c(){};    //    public because it's returned

  // exposed public methods
  return {
    b: b,
    c: c
  }
});

```

* CommonJS ~ Browserify (node project like)

```javascript
var $ = require('jquery');
var _ = require('underscore');

// methods
function a(){};    //    private because it's omitted from module.exports (see below)
function b(){};    //    public because it's defined in module.exports
function c(){};    //    public because it's defined in module.exports

// exposed public methods
module.exports = {
  b: b,
  c: c
};

```

* UMD (Univeral Module defition): both AMD and CommonJS compatible

```javascript
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'underscore'], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = factory(require('jquery'), require('underscore'));
  } else {
    // Browser globals (root is window)
    root.returnExports = factory(root.jQuery, root._);
  }
}(this, function ($, _) {
  // methods
  function a(){};    //    private because it's not returned (see below)
  function b(){};    //    public because it's returned
  function c(){};    //    public because it's returned

  // exposed public methods
  return {
    b: b,
    c: c
  }
}));

```