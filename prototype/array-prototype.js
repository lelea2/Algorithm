/**
 * Playing with Array.prototype object.
 * We use Array.prototype to define function that partially supported by brower
 */

//1. Array.indexOf() not working on older browser
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(obj, start) {
    for (var i = (start || 0), j = this.length; i < j; i++) {
      if (this[i] === obj) {
        return i;
      }
    }
    return -1;
  };
}

//2. Extend the JavaScript Array object by adding a method that removes duplicates.
Array.prototype.unique = function() {
  var array = [], old_array = this;

  for(var i = 0; i< old_array.length; i++) {
    if(array.indexOf(old_array[i])===-1) {
      array.push(old_array[i]);
    }
  }
  return array;
}

// 3. array concatAll
Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    if (Array.isArray(subArray))
      subArray.forEach((item) => results.push(item))
    else
      throw new Error('Its not two dimensional array;');
  });
  return results;
};