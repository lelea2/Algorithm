### apply-call-bind

The headline says it all. We will experiment with JS apply(), call(), bind() and compare the differences here

Read: http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/

#### Definition

**.call()**  - calls the same function with the specified arguments
```javascript
someFunction.call(objectToUseAsThis, arg1, arg2);
```

**.apply()** - calls the same function with the arguments specified in an array (Want to know one trick, EASY! :) 'a' stands for 'array')
```javascript
someFunction.apply(objectToUseAsThis, [arg1, arg2]);
```

**.bind()**  - creates a new function with the same function body, with a pre-set value of this (the first argument) and returns that function.
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

### Why “foo”.toString() is not the same as toString.call(“foo”)?

```javascript
var toString = Object.prototype.toString;

"foo".toString(); // "foo"
toString.call("foo"); // [object String]

[].toString(); // ""
toString.call([]); // [object Array]

{}.toString(); // syntax error
toString.call({}); // [object Object]
```

### Difference between Object.prototype.toString.call(arrayObj) and arrayObj.toString()

Read: http://stackoverflow.com/questions/30010996/difference-between-object-prototype-tostring-callarrayobj-and-arrayobj-tostrin


* Since toString is defined in Object.prototype, whoever inherits Object, will by default get the toString() method.
* But, Array objects, override the default toString method to print the array elements as comma separated string.
* Object.prototype.toString doesn't know what type of Object it actually deals with. So, it is intentionally kept generic and it always prints the actual type of the Object.

```javascript
console.log(Object.prototype.toString.call(arrObj));
//[object Array]

//This is different from toString() method, which is overriden in Array objects
Array.prototype.toString.call(arrObj); // Gives "1,2,3"

```
