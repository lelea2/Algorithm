### JS closure

Playing with closure in JS

* Definition:
- a closure is a function, along with all variables or functions that were in-scope
- a closure is implemented as an “inner function”;
  Eg:, a function defined within the body of another function.
- An important feature of closures is that an inner function still has access to the outer function’s variables.

- One of the main question can be asked for a closure, is how an inside loop will be implemented
=> inside-loop closure with the use of IIFE (Intermediate invoke function expression)

Eg: function below will print out i=# of button available
```javascript
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
        console.log('You clicked element #' + i);
    });
}
````

To make sure that we print expected i, there are 2 solutions
* Solution #1
```javascript
//Use IIFE
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', (function(i) {
        return function() {
            console.log('You clicked element #' + i);
        }
    })(i));
}
```

* Solution #2
```javascript
function print(n) {
    console.log('You clicked element #' + n);
}
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', print(i));
}
```
