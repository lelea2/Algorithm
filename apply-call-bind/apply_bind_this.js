// Q1. What is "this"?
console.log(this);
var foo = {
  prop: 'hello',
  method: function () {
    // Q2. What is "this"?
    console.log(this);
    setTimeout(function () {
      // Q3. What is "this"?
      console.log(this);
    });
  }
};
foo.method();

var foo = {
  prop: 'hello',
  method: function () {
    var _this = this;
    setTimeout(function () {
      // Q1: Does this work?
      // Q2: Why doesn't this work?
      // Q3: How do we make this work
      console.log(_this.prop);
    });
  }
};
foo.method();


// Part 1:
// Given this code, implement the "bind" function
function bind(fn, ctx) {
  // Implement this
  return fn.bind(ctx);
}
 
var Robot = function (robotName) {
  this.robotName = robotName;
};
Robot.prototype.sayHello = function () {
  console.log('Hello Human, my name is', this.robotName);
};
Robot.prototype.sayHelloDelayed = function (numSeconds) {
  setTimeout(bind(this.sayHello, this), numSeconds * 1000);
};
var robby = new Robot('Robby');

robby.sayHello(); // "Hello Human, my name is Robby"
robby.sayHelloDelayed(1); // "Hello Human, my name is Robby" after 1 second

// Part 2:
// "Hello Human" isn't very friendly - let's customize it to take in a human's name
function bind() {
  // Implement this
  var args = Array.prototype.slice.call(arguments);
  /* console.log(args) */;
  var fn = args[0];
  /* return fn.bind(args[1], args[2]) */;
  if (arguments.length < 1) {
     return this;
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments);
  return function() {
    return fn.apply(args[1], args.splice(2, args.length));
  }
  /* return fn.apply(args.splice(1, args,length)) */;
}
 
var Robot = function (robotName) {
  this.robotName = robotName;
};
Robot.prototype.sayHello = function (humanName) {
  console.log('Hello', humanName + ',', 'my name is', this.robotName);
};
Robot.prototype.sayHelloDelayed = function (humanName, numSeconds) {
  setTimeout(bind(this.sayHello, this, humanName), numSeconds * 1000);
};
var robby = new Robot('Robby');
robby.sayHello('Hector'); // "Hello Hector, my name is Robby"
robby.sayHelloDelayed('Hector', 1); // "Hello Hector, my name is Robby" after 1 second