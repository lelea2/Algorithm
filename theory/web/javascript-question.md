Reference from: https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#.gh7cuu59z

### 1. Name two programming paradigms important for JavaScript app developers?

* OOP programming -- Prototypal inheritance (also: prototypes, OLOO).
* Functional programming (also: closures, first class functions, lambdas).

Type that used in JS

* String
* Number
* Boolean
* Function
* Object
* Null
* Undefined

### 2. Functional Progamming in JavaScript

* Pure functions / function purity.
* Avoid side-effects.
* Simple function composition.
* Feature support Functional programming: first-class functions, higher order functions, functions as arguments/values.

### 3. What is the difference between classical inheritance and prototypal inheritance?

First of, interesting comparison

| Java           | JavaScript    |
| -------------- |:-------------:|
| Strongly-typed | Loosely-typed |
| Static         | Dynamic       |
| Classical      | Prototypal    |
| Classes        | Functions     |
| Constructors   | Functions     |
| Methods        | Functions     |

**Classical Inheritance**

* instances inherit from classes
* it has tight coupling, hierarchy / or taxonomy
* Can be referenced from: http://www.crockford.com/javascript/inheritance.html

```javascript
//Initial Parenizor class
function Parenizor(value) {
    this.setValue(value);
}
Parenizor.method('setValue', function (value) {
    this.value = value;
    return this;
});
Parenizor.method('getValue', function () {
    return this.value;
});
Parenizor.method('toString', function () {
    return '(' + this.getValue() + ')';
});

//Now create ZParenizor class, which inherits from Parenizor
function ZParenizor(value) {
    this.setValue(value);
}

ZParenizor.inherits(Parenizor);

//Overwrite toString() method of a parent class
ZParenizor.method('toString', function () {
    if (this.getValue()) {
        return this.uber('toString');
    }
    return "-0-";
});

```

**Prototypal Inheritance**

* instances inherit directly from other objects.
* instantiated via factory functions or **Object.create()**, make used of **Object.getPrototypeOf**
* instance can be composed from many different objects, allowing for easy selective inheritance.

```javascript
function A(a){
  this.varA = a;
}

A.prototype = {
  varA : ...
  doSomething : function(){
    ...
  }
};
//Create B, which inherit from base class A
function B(a, b) {
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB : ...
  doSomething : {
    value: function() { // override
      ...
    },
    ...
  }
});
B.prototype.constructor = B;

var b = new B();
b.doSomething();
```

### 4. When is classical inheritance an appropriate choice?

Boo, the answer is rarely, almost never. “Favor object composition over class inheritance.”

### 5. When is prototypal inheritance an appropriate choice? (whenever you need inheritance)
Useful for:
* Delegation (i.e., the prototype chain).
* Concatenative (i.e. mixins, `Object.assign()`).
* Functional (Not to be confused with functional programming. A function used to create a closure for private state/encapsulation).

### 6. What are the pros and cons of functional programming vs object-oriented programming?

#### OOP

**Pros**
* Basic concept of objects, easy to interpret the meaning of method calls
* Imperative style rather than a declarative style, which reads like a straight-forward set of instructions for the computer to follow.

**Cons**
* OOP Typically depends on shared state.
* Objects and behaviors are typically tacked together on the same entity, which may be accessed at random by any number of functions with non-deterministic order, which may lead to undesirable behavior such as race conditions.

#### Functional Programming

**Pros**
* avoid any shared state or side-effects, which eliminates bugs caused by multiple functions competing for the same resources.
* easy to scale across multiple processors, or across distributed computing clusters

**Cons**
* Steeper learning curve

### 7. What does “favor object composition over class inheritance” mean?

use **can-do**, **has-a**, or **uses-a** relationships INSTEAD OF **is-a** relationships.

* Avoid class hierarchies.
* Avoid brittle base class problem.
* Avoid tight coupling.
* Avoid rigid taxonomy (forced is-a relationships that are eventually wrong for new use cases).
* Make code more flexible.

### 8. What are two-way data binding and one-way data flow, and how are they different?

*One way data flows are deterministic, whereas two-way binding can cause side-effects which are harder to follow and understand.*

**Two-way data binding**

* UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa.
* *Eg*: AngularJS

**One-way data flow**

* Model is the single source of truth. Changes in the UI trigger messages that signal user intent to the model
* Only the model has the access to change the app’s state.
* The effect is that data always flows in a single direction, which makes it easier to understand.
* *Eg*: ReactJs

### 9. What are the pros and cons of monolithic vs microservice architectures?

####Monolithic

App is written as one cohesive unit of code whose components are designed to work together, sharing the same memory space and resources.

**Pros**
* Cross-cutting concerns: logging, rate limiting, and security features such audit trails and DOS protection.
* Easy to hook up on the same app level
* Can be performance advantages, since shared-memory access is faster than inter-process communication (IPC).

**Cons**
* Tightly couple
* Dedependecies, side-effects

####Micro Service

App is made up of lots of smaller, independent applications capable of running in their own memory space and scaling independently from each other across potentially many separate machines.

**Pros**
* Better organized, decoupled services, easy to re-compose or re-configured
* Better performance, able to isolate hot services, scale them independently

**Cons**
* Incur the overhead of separate module
* Higher cost for operation

### 10. What is asynchronous programming, and why is it important in JavaScript?

**Synchrounous**
* Barring conditionals and function calls, code is executed sequentially from top-to-bottom, blocking on long-running tasks such as network requests and disk I/O.

**Asynchrounous**
* Engine runs in an event loop.
* When a blocking operation is needed, the request is started, and the code keeps running without blocking for the result.
* When the response is ready, an interrupt is fired, which causes an event handler to be run, where the control flow continues.
* A single program thread can handle many concurrent operations.


### 11. Concurrency model and Event Loop in Javascript
Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

* JavaScript has a concurrency model based on an "event loop"

**Runtime conception:**

* stack: Function calls form a stack of frames.
* heap: Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory.
* queue: A JavaScript runtime contains a message queue, which is a list of messages to be processed. When the stack is empty, a message is taken out of the queue and processed. The processing consists of calling the associated function (and thus creating an initial stack frame). The message processing ends when the stack becomes empty again

#### Eventloop
* Each message is processed completely before any other message is processed
* messages are added any time an event occurs and there is an event listener attached to it. If there is no listener, the event is lost
* execution depends on the number of awaiting tasks in the queue
* A web worker or a cross-origin iframe has its own stack, heap, and message queue. Two distinct runtimes can only communicate through sending messages via the postMessage method

```
while(queue.waitForMessage()){
  queue.processNextMessage();
}
```

#### Non-blocking I/O
* Handling I/O is typically performed via events and callbacks, so when the application is waiting for an IndexedDB query to return or an XHR request to return, it can still process other things like user input.

### 12.1 null vs. undefined

**undefined** -- value of the variable is not defined, undefined is a type. Assigning a new value to it does not change the value of the type undefined.

**null** -- means empty or non-existent value ("no-value"), primitive value & can assign null to any variable. null is NOT object, but primitive value, typeof null is object though

### 12.2 Difference between undefined and not defined in JavaScript

* In JavaScript if you try to use a variable that doesn't exist and has not been declared, then JavaScript will throw an error var name is not defined and the script will stop execute thereafter. But If you use typeof undeclared_variable then it will return undefined.
```javascript
var x; // declaring x
console.log(x); //output: undefined

var x; // Declaration
if(typeof x === 'undefined') // Will return true

console.log(y);  // Output: ReferenceError: y is not defined

```

### 13.Difference between Function, Method and Constructor calls in JavaScript?


### 14. What is the difference between “==” and “===”?

**==** checks equality only,

**===** checks for equality as well as the type.

### 15. What is the drawback of creating true private in JavaScript

* Memory inefficient because a new copy of the method would be created for each instance.
* Should NOT use private method unless it's really necessary
* Example of private vs. public method

```javascript
var Employee = function (name, company, salary) {
  this.name = name || "";       //Public attribute default value is null
  this.company = company || ""; //Public attribute default value is null
  this.salary = salary || 5000; //Public attribute default value is null

  // Private method
  var increaseSlary = function () {
    this.salary = this.salary + 1000;
  };

  // Public method
  this.dispalyIncreasedSalary = function() {
    increaseSlary();
    console.log(this.salary);
  };
};

// Create Employee class object
var emp1 = new Employee("John","Pluto",3000);
// Create Employee class object
var emp2 = new Employee("Merry","Pluto",2000);
// Create Employee class object
var emp3 = new Employee("Ren","Pluto",2500);
```

### 17. Explain **delete** operator and what it do

* delete operator is used to delete a property from an object.
*


### 18. What is JavaScript Self-Invoking anonymous function or Self-Executing anonymous function.


### 19. What is the difference between array vs. object?


### 20. What are the way by which we can create object in JavaScript ?


### 21. What is "this" in JS?

At the time of execution of function, JavaScript engine sets a property to the function called "this" which refer to the current execution context. this is **always** refer to an object and depends on how function is called.

* In the global context or inside a function this refers to the window object.
* Inside IIFE (immediate invoking function) if you use "use strict", value of this is undefined. To pass access window inside IIFE with "use strict", you have to pass this.
* While executing a function in the context of an object, the object becomes the value of this
* Inside a setTimeout function, the value of this is the window object.
* If you use a constructor (by using new keyword) to create an object, the value of this will refer to the newly created object.
* You can set the value of this to any arbitrary object by passing the object as the first parameter of bind, call or apply
* For dom event handler, value of this would be the element that fired the event

### 22. What are differences between host object and native object?

#### Native object

* core predefined objects always available in JavaScript. Defined in the ECMAScript spec.
* Eg: Object (constructor), Date, Math, parseInt, eval, string methods like indexOf and replace, array methods, ...

#### Host object

* provided by the browser environment.
* Eg: window, document, location, history, XMLHttpRequest, setTimeout, getElementsByTagName, querySelectorAll

#### User object

* objects defined in JavaScript code

### 23. Why extending build in JavaScript object is a bad idea?
Read: http://programmers.stackexchange.com/questions/104320/why-is-extending-the-dom-built-in-object-prototypes-a-bad-idea
* Lack of specification
* Host objects have no rules
* Chance of collisions
* Performance overhead (manual extension in older browser, slow, inconvenient & don't scale)
* IE is really bad!

### 24. Why does nearly every object have a toString method?

Most inherited from Object.prototype or define it on its own (or inherit it from their custom prototype). ==> inherit toString() method from the interface/parent

### 25. How would you apply asynchronous call without any help of library?
Read: http://krasimirtsonev.com/blog/article/7-lines-JavaScript-library-for-calling-asynchronous-functions

```javascript
var queue = function(funcs, scope) {
    (function next() {
          if(funcs.length > 0) {
              funcs.shift().apply(scope || {}, [next].concat(Array.prototype.slice.call(arguments, 0)));
          }
    })();
};
var obj = {
    value: null
};
queue([
    function(callback) {
        var self = this;
        setTimeout(function() {
            self.value = 10;
            callback(20);
        }, 200);
    },
    function(callback, add) {
        console.log(this.value + add);
        callback();
    },
    function() {
        console.log(obj.value);
    }
], obj);
```

### 26. What is the difference between slice, substr, substring?

* String.slice( begin [, end ] ) ==> result of substring will NOT contain character at final index
* String.substring( from [, to ] ) ==> result of substring will NOT contain character at final index
* String.substr( start [, length ] )
