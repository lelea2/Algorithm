Read:
* https://ponyfoo.com/articles/es6
* https://github.com/pedronauck/algorithms-with-es6
* https://webapplog.com/es6/
* https://github.com/lukehoban/es6features

#### 1. Default Parameters in ES6

```javascript
//ES5
var link = function (height, color, url) {
  var height = height || 50;
  var color = color || 'red';
  var url = url || 'http://azat.co';
};
```

```javascript
//ES6
var link = function(height = 501, color = 'red', url = 'http://azat.co') {
  ...
}
```

#### 2. Template Literals in ES6

```javascript
//ES5
var name = 'Your name is ' + first + ' ' + last + '.';
var url = 'http://localhost:3000/api/messages/' + id;
```

```javascript
//ES6
var name = `Your name is ${first} ${last}.`;
var url = `http://localhost:3000/api/messages/${id}`;
```

#### 3. Multi-line Strings in ES6

```javascript
//ES5
var roadPoem = 'Then took the other, as just as fair,\n\t'
    + 'And having perhaps the better claim\n\t'
    + 'Because it was grassy and wanted wear,\n\t'
    + 'Though as for that the passing there\n\t'
    + 'Had worn them really about the same,\n\t'
```

```javascript
//ES6
var roadPoem = `Then took the other, as just as fair,
    And having perhaps the better claim
    Because it was grassy and wanted wear,
    Though as for that the passing there
    Had worn them really about the same,`

```

#### 4. Destructuring Assignment in ES6

```javascript
//ES5
var data = $('body').data(), // data has properties house and mouse
  house = data.house,
  mouse = data.mouse;

var jsonMiddleware = require('body-parser').json;

var body = req.body, // body has username and password
    username = body.username,
    password = body.password;
```

```javascript
//ES6
var { house, mouse} = $('body').data() // we'll get house and mouse variables

var {jsonMiddleware} = require('body-parser')

var {username, password} = req.body

//This also works on ES6
var [col1, col2]  = $('.column'),
  [line1, line2, line3, , line5] = file.split('\n');

```

#### 5. Enhanced Object Literals in ES6

```javascript
//ES5 setting object literal
var serviceBase = {port: 3000, url: 'azat.co'},
    getAccounts = function(){return [1,2,3]}

var accountServiceES5 = {
  port: serviceBase.port,
  url: serviceBase.url,
  getAccounts: getAccounts,
  toString: function() {
    return JSON.stringify(this.valueOf())
  },
  getUrl: function() {return "http://" + this.url + ':' + this.port},
  valueOf_1_2_3: getAccounts()
};
```

```javascript
//ES6
var serviceBase = {port: 3000, url: 'azat.co'},
    getAccounts = function(){return [1,2,3]}
var accountService = {
  __proto__: serviceBase,
  getAccounts, //shorthands for assignment getAccounts
  toString() {
    return JSON.stringify((super.valueOf()))
  },
  getUrl() {return "http://" + this.url + ':' + this.port},
  [ 'valueOf_' + getAccounts().join('_') ]: getAccounts() //invoke super and have dynamic key created (valueOf_1_2_3)
};
console.log(accountService);
```

#### 6. Arrow Functions in ES6

```javascript
//ES5
/******* Case1 *********/
var _this = this;
$('.btn').click(function(event) {
  _this.sendData();
});

/******* Case2 *********/
var logUpperCase = function() {
  var _this = this
  this.string = this.string.toUpperCase();
  return function () {
    return console.log(_this.string)
  }
}

logUpperCase.call({ string: 'es6 rocks' })();

/******* Case3 *********/
var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map(function (value) {
  return "ID is " + value // explicit return
})

```

```javascript
//ES6
//One of the advantage is you don't need _this to define
/******* Case1 *********/
$('.btn').click((event) => {
  this.sendData()
});

/******* Case2 *********/
var logUpperCase = function() {
  this.string = this.string.toUpperCase();
  return () => console.log(this.string);
}

logUpperCase.call({ string: 'es6 rocks' })();

/******* Case3 *********/
var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9'];
var messages = ids.map(value => `ID is ${value}`); // implicit return

```

#### 7. Promises in ES6

```javascript
//ES5
setTimeout(function() {
  console.log('Yay!')
}, 1000);
```

```javascript
//ES6
var wait1000 =  new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000);
}).then(function() {
  console.log('Yay!');
});

/***** or ****/
var wait1000 = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
});

```

#### 8. Block-Scoped Constructs Let and Const

In ES6, we use **let** to restrict the scope of the blocks


```javascript
//ES5 -- bad Bug occurs
function calculateTotalAmount (vip) {
  var amount = 0
  if (vip) {
    var amount = 1
  }
  { // more crazy blocks!
    var amount = 100
    {
      var amount = 1000
      }
  }
  return amount; //Result is 1000 (unexpectedly)
}

console.log(calculateTotalAmount(true))
```

```javascript
//ES6
function calculateTotalAmount (vip) {
  var amount = 0 // probably should also be let, but you can mix var and let
  if (vip) {
    let amount = 1 // first amount is still 0
  }
  { // more crazy blocks!
    let amount = 100 // first amount is still 0
    {
      let amount = 1000 // first amount is still 0
    }
  }
  return amount; //0, let is in scope, won't affect var
}

console.log(calculateTotalAmount(true))
```

#### 9. Classes in ES6

```javascript
//ES5 - Not existing
```

```javascript
//ES6
class baseModel {
  constructor(options = {}, data = []) { // class constructor
    this.name = 'Base';
    this.url = 'http://azat.co/api';
    this.data = data;
    this.options = options;
  }
  getName() { // class method
    console.log(`Class name: ${this.name}`);
  }
}

class AccountModel extends baseModel {
  constructor(options, data) {
    super({private: true}, ['32113123123', '524214691']); //call the parent method with super
    this.name = 'Account Model';
    this.url +='/accounts/';
  }
  get accountsData() { //calculated attribute getter
    // ... make XHR
    return this.data;
  }
}

let accounts = new AccountModel(5)
accounts.getName(); //Class name: Account Model
console.log('Data is %s', accounts.accountsData); //Data is %s 32113123123,524214691

```

#### 10. Modules in ES6

```javascript
//ES5
module.exports = {
  port: 3000,
  getAccounts: function() {
    ...
  }
}

//Require module in ES5
var service = require('module.js');
console.log(service.port); // 3000
```

```javascript
//ES6
export var port = 3000
export function getAccounts(url) {
  ...
}

//Require module in ES6
import {port, getAccounts} from 'module'
console.log(port) // 3000

//or
import * as service from 'module'
console.log(service.port) // 3000
```
