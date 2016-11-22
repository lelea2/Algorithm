### JS closure

##### Definition:
* A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.


- a closure is a function, along with all variables or functions that were in-scope
- a closure is implemented as an “inner function”;
  Eg: a function defined within the body of another function.
- An important feature of closures is that an inner function still has access to the outer function’s variables.

- 3 scopes in a closure

(1) variable in its own scope

(2) variables in the enclosing function’s scope

(3) global variables.

##### Highlight
One of the main question can be asked for a closure, is how an inside loop will be implemented
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

##### Class definition (walmart question)
```
var Vehicle = (function() {
    var id = 1;
    return function Vechile() {
        this.id = id++;
        this.getId = function() {
           return this.id;
        }
    }
}());
//Expected value returned:
var car = new Vehicle();
car.getId(); // 1

var truck = new Vehicle();
truck.getId(); // 2
car.getId(); // 1
```

```
//Closure function and result
function foo() {
    console.log("Outer function");

    return (function() {
        console.log("Inner function");
    }());

}
```
