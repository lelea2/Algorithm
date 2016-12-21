// The watch() method watches for a property to be assigned a value and runs a function when that occurs.

//Using watch to validate object property

// Generally you should avoid using watch() and unwatch() when possible.
// These two methods are implemented only in Gecko, and they're intended primarily for debugging use.
// In addition, using watchpoints has a serious negative impact on performance,
// which is especially true when used on global objects, such as window.
// You can usually use setters and getters or proxies instead. See Browser compatibility for details.
// Also, do not confuse Object.watch with Object.observe.

Person = function(name, age) {
  this.name = name;
  this.age = age;
  this.watch('age', Person.prototype._isValidAssignment);
  this.watch('name', Person.prototype._isValidAssignment);
}

Person.prototype.toString = function() {
  return this.name + ', ' + this.age;
};

Person.prototype._isValidAssignment = function(id, oldval, newval) {
  if (id === 'name' && (!newval || newval.length > 30)) {
    throw new RangeError('invalid name for ' + this);
  }
  if (id === 'age'  && (newval < 0 || newval > 200)) {
    throw new RangeError('invalid age for ' + this);
  }
  return newval;
}

var will = new Person('Will', 29);
console.log(will);   // Will, 29

try {
  will.name = '';
} catch (e) {
  console.log(e); //RangeError: invalid name for Will, 29
}

try {
  will.age = -4;
} catch (e) {
  console.log(e); //RangeError: invalid age for Will, 29
}
