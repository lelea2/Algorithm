#### Implement Undo

https://jsfiddle.net/tmcw/xsp9yj71/


- Data is immutable. It is never mutated in-place.
- Changes to data are encapsulated into operations that take a previous version and return a new one.
- History is represented as a list of states, with past on one end, the present on the other, and an index that can back up into ‘undo states’.
- Modifying data causes any future states to be thrown away.

**Keep track with Immutable.js**

* Immutable’s methods like .set() can be more efficient than cloning because they let the new object reference data in the old object: 
only the changed properties differ. This way you can save memory and performance versus constantly deep-cloning everything.
* It’s nearly impossible to accidentally mutate an Immutable object, and remarkably easy to accidentally forget to clone a normal object. 
Immutable objects give a strong guarantee that nowhere does anyone mutate data in-place.

```javascript
var dots = document.getElementById('dots');
var undo = document.getElementById('undo');
var redo = document.getElementById('redo');

var myHistory = [Immutable.List([])];
var historyIndex = 0;

// wrap an operation: given a function, apply it
// the history list
function operation(fn) {
  // first, make sure that there is no future
  // in the history list. for instance, if the user
  // draws something, clicks undo, and then
  // draws something else, we need to dispose of the
  // future state
  myHistory = myHistory.slice(0, historyIndex + 1);
  
  // create a new version of the data by applying
  // a given function to the current head
  var newVersion = fn(myHistory[historyIndex]);
  
  // add the new version to the history list and increment
  // the index to match
  myHistory.push(newVersion);
  historyIndex++;
  
  // redraw the dots
  draw();
}

// here are our two operations: addDot is what
// you trigger by clicking the blank
function addDot(x, y) {
  operation(function(data) {
    return data.push(Immutable.Map({
      x: x, y: y, id: +new Date()
    }));
  });
}

function removeDot(id) {
  operation(function(data) {
    return data.filter(function(dot) {
      return dot.get('id') !== id;
    });
  });
}

function draw() {
  dots.innerHTML = '';
  myHistory[historyIndex].forEach(function(dot) {
    var elem = dots.appendChild(document.createElement('div'));
    elem.className = 'dot';
    elem.style.left = dot.get('x') + 'px';
    elem.style.top = dot.get('y') + 'px';
    
    // clicking on a dot removes it.
    elem.addEventListener('click', function(e) {
        removeDot(dot.get('id'));
        e.stopPropagation();
    });
  });
  undo.disabled = (historyIndex != 0) ? '' : 'disabled';
  redo.disabled = (historyIndex !== myHistory.length - 1) ? '' : 'disabled';
}

// clicking the background adds a dot
dots.addEventListener('click', function(e) {
  addDot(e.pageX, e.pageY);
});

// clicking undo goes back in time, unless
// there is no history left.
undo.addEventListener('click', function() {
  if (historyIndex > 0) historyIndex--;
  draw();
});

// clicking redo goes forward in time, unless
// there is no future left.
redo.addEventListener('click', function() {
  if (historyIndex < myHistory.length) historyIndex++;
  draw();
});

draw();
```