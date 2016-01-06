### apply-call-bind

The headline says it all. We will experiment with JS apply(), call(), bind() and compare the differences here

#### Definition

**.call()**  - calls the same function with the specified arguments
```javascript
someFunction.call(objectToUseAsThis, arg1, arg2);
```

**.apply()** - calls the same function with the arguments specified in an array
```javascript
someFunction.apply(objectToUseAsThis, [arg1, arg2]);
```

**.bind()**  - creates a new function with the same function body, with a preset value of this (the first argument) and returns that function.
```javascript
var obj = {
   x: 81,
   getX: function() {
     console.log( this.x)
   }
};
obj.getX.bind(obj); //Create new function with same function body here
```

* Interesting fact
If older browser does not support bind() method, we'll use prototype to extend the core Function object as following:

```javascript
Function.prototype.bind = Function.prototype.bind || function(context) {
    var self = this;
    return function() {
        return self.apply(context, arguments);
    };
};
```
