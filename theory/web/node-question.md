Reference:

* https://blog.risingstack.com/node-js-interview-questions/
* https://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes
* https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions/
* http://a4academics.com/interview-questions/79-web/802-nodejs-interview?showall=&start=3
* http://www.lazyquestion.com/interview-questions-and-answer/nodejs

##### 1. What is an error-first callback?
* first argument is always an error object that the programmer has to check if something went wrong

```javascript
fs.readFile(filePath, function(err, data) {
    if (err) {
        //handle the error
    }
    // use the data object
});
```

##### 2. How can you avoid callback hells?

* modularization: break callbacks into independent functions
* use Promises
* use yield with Generators and/or Promises

##### 3. How can you listen on port 80 with Node?
* Set what port you have to listen to on app start

```javascript
app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});

```

##### 4. What's the event loop?
* Node.js runs using a single thread. Under the hood Node.js uses many threads through **libuv**

* Every I/O requires a callback - once they are done they are pushed onto the event loop for execution.

##### 5. What tools can be used to assure consistent style?

* JSLint
* JSHint
* ESLint
* JSCS ...

##### 6. What's the difference between operational and programmer errors?
* Operation errors are not bugs, but problems with the system, like request timeout or hardware failure.
* Programmer errors are actual bugs.

##### 7. Why npm shrinkwrap is useful?

* Locks down the versions of a package's dependencies so that you can control exactly which versions of each dependency will be used when your package is installed.

##### 8. What's a stub? Name a use case?
* functions/programs that simulate the behaviours of components/modules.
* Stubs provide canned answers to function calls made during test cases.

```javavscript
var fs = require('fs');

var readFileStub = sinon.stub(fs, 'readFile', function (path, cb) {
  return cb(null, 'filecontent');
});

expect(readFileStub).to.be.called;
readFileStub.restore();

```

##### 9. Checking package dependencies for your app?
* Under your app directory, execute

```
npm ls
```

* To check if specific package is install globally

```
npm list -g [package-name]

//or checking exsiting status to see if package is installed or not
npm list --depth 1 --global packagename > /dev/null 2>&1

```

##### 10. Explain how NodeJS work?
* It uses Google V8 Javascript engine to execute code. It contains built-in asynchronous I/O library for file, socket and HTTP communication.  Node encapsulates libuv to handle asynchronous events.

##### 11. Explain how session in NodeJS works?
* https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions/


##### 12. NodeJS Http service (ES6)

```javascript
'use strict';
let https = require('https');

/**
 * Pass the data to send as `event.data`, and the request options as
 * `event.options`. For more information see the HTTPS module documentation
 * at https://nodejs.org/api/https.html.
 *
 * Will succeed with the response body.
 */
exports.handler = (event, context, callback) => {
  const req = https.request(event.options, (res) => {
    let body = '';
    console.log('Status:', res.statusCode);
    console.log('Headers:', JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      console.log('Successfully processed HTTPS response');
      // If we know it's JSON, parse it
      if (res.headers['content-type'] === 'application/json') {
        body = JSON.parse(body);
      }
      callback(null, body);
    });
  });
  req.on('error', callback);
  req.write(JSON.stringify(event.data));
  req.end();
};
```

##### 13.  How Node.js can be made more scalable?

* Node.js works good for I/O bound and not CPU bound work.
* If there is a function to read a file, file reading will be started during that instruction and then it moves onto next instruction and once the I/O is done or completed it will call the callback function. So there will not be any blocking.

##### 14.Explain Child process module?

Child process module has following three major ways to create child processes –

* spawn  - child_process.spawn launches a new process with a given command.
* exec  - child_process.exec method runs a command in a shell/console and buffers the output.
* fork - The child_process.fork method is a special case of the spawn() to create child processes.

##### 15. Events

* Events enable an object to notify other objects when something of interest occurs. (EventEmitter)

```javascript
var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter;
var connection = function(id){
  // do something
  console.log('client id: ' + id);
};
myEmitter.on('connection', connection);
myEmitter.on('message', function(msg) { //listing to event forever until application closed
  // do something
  console.log('message: ' + msg);
});

//If you plan to listen for the event once, you can use the once() method.

//Testing
myEmitter.emit('connection', 6); //client id: 6
myEmitter.emit('connection', 8); //client id 8
myEmitter.emit('message', 'this is the first message'); //message: this is the first message
myEmitter.emit('message', 'this is the second message'); //message: this is the second message
myEmitter.emit('message', 'welcome to nodejs'); //message: welcome to nodejs

//Remove event
// send message
myEmitter.emit('connection', 6); //client id: 6
// remove event
myEmitter.removeListener('connection',connection);
// test to send message
myEmitter.emit('connection', 10); //none, event is removed already
myEmitter.emit('message', 'welcome to nodejs');

```

##### 16. Start web application

```javascript
var http = require('http');
var server = http.createServer(function (req, res) {
  console.log(req.url);
  if(req.url=='/'){
    res.write('Welcome to http nodejs');
    res.end();
  } else if(req.url=='/customer') {
    res.write('Welcome to Customer page');
    res.end();
  } else {
    res.write('Page not found');
    res.end();
  }
});

server.listen(8084);
console.log('Server is running on port 8084');

```

**Working with HTTPS example**

```javascript
var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('e:/ssl/myserver.key'),
  cert: fs.readFileSync('e:/ssl/myserver.crt'),
  passphrase: '1234'
};
var server = https.createServer(options,function (req, res) {
  res.write('Welcome to http nodejs');
  res.end();
});
server.listen(8084);
console.log('Server is running on port 8084');

```

##### 17. Simple application to get list of IP addesses from local machine (os and networkInterfaces())

```javascript
var os = require('os');
var interfaces = os.networkInterfaces();
for (item in interfaces) {
  console.log('Network interface name: ' + item);
  for (att in interfaces[item]) {
    var address = interfaces[item][att];
    console.log('Family: ' + address.family);
    console.log('IP Address: ' + address.address);
    console.log('Is Internal: ' + address.internal);
    console.log('');
  }
  console.log('==================================');
}

```

##### 18. Creating Client/Server Socket

**Server Socket**

```javascript
//Server socket
var serverPort = 9099;
var net = require('net');
var server = net.createServer(function(client) {
  console.log('client connected');
  console.log('client IP Address: ' + client.remoteAddress);
  console.log('is IPv6: ' + net.isIPv6(client.remoteAddress));
  console.log('total server connections: ' + server.connections);
  // Waiting for data from the client.
  client.on('data', function(data) {
      console.log('received data: ' + data.toString());
      // Write data to the client socket.
      client.write('hello from server');
  });
  // Closed socket event from the client.
  client.on('end', function() {
      console.log('client disconnected');
  });
});

server.on('error',function(err) {
  console.log(err);
  server.close();
});

server.listen(serverPort, function() {
  console.log('server started on port ' + serverPort);
});

```

**Client Socket**

A client socket is a client application that connects to the server and then sends and receives
data from the server. We should know the IP address and port from the target server. We can
call connect() to connect to the server. Use write() for sending data. To wait for incoming
data from the server, we can use the data event.


```javascript
var serverPort = 9099;
var server = 'localhost';
var net = require('net');
console.log('connecting to server...');

var client = net.connect({server:server,port:serverPort}, function() {
  console.log('client connected');
  // send data
  console.log('send data to server');
  client.write('greeting from client socket');
});

client.on('data', function(data) {
  console.log('received data: ' + data.toString());
  client.end();
});

client.on('error',function(err){
  console.log(err);
});

client.on('end', function() {
  console.log('client disconnected');
});

```

##### 19. Storing data with Node.js writable streams

Refereced: http://codewinds.com/blog/2013-08-19-nodejs-writable-streams.html

**Writing text file**

```javascript
var fs = require('fs');
var wstream = fs.createWriteStream('myOutput.txt');
wstream.write('Hello world!\n');
wstream.write('Another line\n');
wstream.end();

/********** Encoding text **********/
var options = { encoding: 'utf16le' };
var wstream = fs.createWriteStream('foo', options);
// OR add the encoding to each write
wstream.write(str, 'utf16le');


```

**Writing binary**

```javascript
var crypto = require('crypto');
var fs = require('fs');
var wstream = fs.createWriteStream('myBinaryFile');
// creates random Buffer of 100 bytes
var buffer = crypto.randomBytes(100);
wstream.write(buffer);
// create another Buffer of 100 bytes and write
wstream.write(crypto.randomBytes(100));
wstream.end();


```

**Knowing when file has been written**

```javascript
var fs = require('fs');
var wstream = fs.createWriteStream('myOutput.txt');

// Node.js 0.10+ emits finish when complete
// The finish event (added in Node.js v0.10) indicates that all data has been flushed to the underlying system.
wstream.on('finish', function () {
  console.log('file has been written');
});
wstream.write('Hello world!\n');
wstream.write('Another line');

//get an indication of when stream had been flushed
wstream.end(function () { console.log('done'); });

```

##### 20. Server healthcheck -- Express implementation

```javascript
module.exports = function (options) {
  options = options || {};
  options.test = options.test || function () {};
  if (typeof options.test !== 'function') {
    throw new Error('express-healthcheck `test` method must be a function');
  }
  options.healthy = options.healthy || function () {
    return { uptime: process.uptime() };
  };
  if (typeof options.healthy !== 'function') {
    throw new Error('express-healthcheck `healthy` method must be a function');
  }
  if (options.test.length === 0) {
    var test = options.test;
    options.test = function (callback) {
      callback(test());
    };
  }
  return function (req, res, next) {
    try {
      options.test(function (err) {
        var status = 200,
          response = options.healthy();
        if (err) {
          status = 500;
          response = err;
        }
        res.status(status).json(response);
      });
    } catch (e) {
      res.status(500).json(e);
    }
  };
};
```
