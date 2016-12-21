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
//ES5
```

```javascript
//ES6
```

#### 6. Arrow Functions in ES6

```javascript
//ES5
```

```javascript
//ES6
```

#### 7. Promises in ES6

```javascript
//ES5
```

```javascript
//ES6
```

#### 8. Block-Scoped Constructs Let and Const

```javascript
//ES5
```

```javascript
//ES6
```

#### 9. Classes in ES6

```javascript
//ES5
```

```javascript
//ES6
```

#### 10. Modules in ES6

```javascript
//ES5
```

```javascript
//ES6
```
