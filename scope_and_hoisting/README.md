### Scope and Hoisting in JS

#### Example1
```javascript
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
```

**Result:** 1

* function declaration function a(){} is hoisted first and it behaves like var a = function () {};. Hence in local scope variable a is created.
* If you have two variables with same name (one in global another in local), local variable always get precedence over global variable.
* When you set a = 10;, you are setting the local variable a , not the global one. Hence, the value of global variable remain same and you get, 1 in the log.
* If you didnt have a function named as "a", you will see 10 in the log.

#### Example2

```javascript
function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
foo();//?
```

**Result:** 8

* As function declaration is get hoisted. the first bar is at the top and second bar after the return will also be hoisted. Since there is already a bar (first function declaration), the second one will replace the first one. As there could be one function for a single name and the last one stays. Hence, when you executing bar, you are executed the second one (after hoisting) and you get.

#### Example3

```javascript
var foo = "hello";
function fxn() {
    alert(foo); //undefined
    var foo = "bai";
}
fxn();
alert(foo); //foo
```
