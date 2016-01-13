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


### 12. null vs. undefined

### 13. What is the difference between “==” and “===”?

**==** checks equality only,

**===** checks for equality as well as the type.

### 14. currentTarget vs. target in JS?

Eg: http://jsfiddle.net/misteroneill/kmn4A/3/ (Outer div always currentTarget since it listen to the event, while either innerdiv or outerdiv is target depends on where user click on)

**target** -- element that triggered event

**currentTarget** -- element that listens to event.


```javascript
//Define current target and handle for IE8 cases
target = (event.currentTarget) ? event.currentTarget : event.srcElement;
```

### 15. Why is document.write considered a “bad practice”?

***Pro:**

* Easiest way to embed inline content from an external (to your host/domain) script.
* You can overwrite the entire content in a frame/iframe. I used to use this technique a lot for menu/navigation pieces before more modern Ajax techniques were widely available (1998-2002).

**Con:**

* does not work in XHTML
* It serializes the rendering engine to pause until said external script is loaded, which could take much longer than an internal script. ==> eventually blocking your whole page
* Script is placed within the content, which is considered bad-form.

