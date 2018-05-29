// Traditionally, the way to have private properties in Javascript is to either prefix your variables or to encapsulate in a closure.
// Both of these methods do work, however they are either not restrictive enough (prefixes) or too restrictive (closures).
// A WeakMap is similar to a HashMap but it allows objects as keys as well as not having a strong reference to its values

const Wizard = (function() {
  const _private = new WeakMap();

  const internal = (key) => {
    // Initialize if not created
    if (!_private.has(key)) {
        _private.set(key, {});
    }
    // Return private properties object
    return _private.get(key);
  };

  class Wizard {
    constructor(name, house) {
      internal(this).name = name;
      internal(this).house = house;
    }

    getName() {
      return internal(this).name;
    }

    setName(name) {
      internal(this).name = name;
    }

    getHouse() {
      return internal(this).house;
    }

    setHouse(house) {
      internal(this).house = house;
    }
  }

  return Wizard;
}());

const harrypotter = new Wizard('Harry Potter', 'Gryffindor');
console.log(harrypotter); // Wizard {}
console.log(harrypotter.getName()); // "Harry Potter"

harrypotter.setName('Arry Pottr');
console.log(harrypotter.getName()); // "Arry Pottr"
