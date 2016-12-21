### Utility functions manipulate javascript object

**Important factors to remember**

* Object.keys ==> array (Object.keys(obj).length)
* Object.hasOwnProperty
* Object.defineProperty


##### 1. Object.defineProperty usage

Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

* **configurable**: true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object. Default to false

* **enumerable**: true if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to false.

* **writable**: true if and only if the value associated with the property may be changed with an assignment operator. Defaults to false.

* **value**: The value associated with the property. Can be any valid JavaScript value (number, object, function, etc). Defaults to undefined.

* **get**: getter

* **set**: setter

** In order to ensure these defaults are preserved you might freeze the Object.prototype upfront, specify all options explicitly, or point to null as __proto__ property.**

```javascript
// using __proto__
var obj = {};
Object.defineProperty(obj, 'key', {
  __proto__: null, // no inherited properties
  value: 'static'  // not enumerable
                   // not configurable
                   // not writable
                   // as defaults
});

// being explicit
Object.defineProperty(obj, 'key', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'static'
});

// recycling same object
function withValue(value) {
  var d = withValue.d || (
    withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  );
  d.value = value;
  return d;
}
// ... and ...
Object.defineProperty(obj, 'key', withValue('static'));

// if freeze is available, prevents adding or
// removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);

```

```javascript
var o = {}; // Creates a new object

Object.defineProperty(o, 'a', {
  value: 37,
  writable: false
});

console.log(o.a); // logs 37
o.a = 25; // No error thrown (it would throw in strict mode, even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.
```

```javascript
//Getter & Setter
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]

```
