Reference:
* https://blog.risingstack.com/node-js-interview-questions/
* https://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes
* https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions/

#### 1. What is an error-first callback?
* first argument is always an error object that the programmer has to check if something went wrong

```javascript
fs.readFile(filePath, function(err, data) {
    if (err) {
        //handle the error
    }
    // use the data object
});
```

#### 2. How can you avoid callback hells?

* modularization: break callbacks into independent functions
* use Promises
* use yield with Generators and/or Promises

#### 3. How can you listen on port 80 with Node?
* Set what port you have to listen to on app start
```javascript
app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});

```

#### 4. What's the event loop?
* Node.js runs using a single thread. Under the hood Node.js uses many threads through **libuv**

* Every I/O requires a callback - once they are done they are pushed onto the event loop for execution.

#### 5. What tools can be used to assure consistent style?

* JSLint
* JSHint
* ESLint
* JSCS ...

#### 6. What's the difference between operational and programmer errors?
* Operation errors are not bugs, but problems with the system, like request timeout or hardware failure.
* Programmer errors are actual bugs.

#### 7. Why npm shrinkwrap is useful?

* Locks down the versions of a package's dependencies so that you can control exactly which versions of each dependency will be used when your package is installed.

#### 8. What's a stub? Name a use case?
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

#### 9. Checking package dependencies for your app?
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

#### 10. Explain how NodeJS work?
* It uses Google V8 Javascript engine to execute code. It contains built-in asynchronous I/O library for file, socket and HTTP communication.  Node encapsulates libuv to handle asynchronous events.

#### 11. Explain how session in NodeJS works?
* https://stormpath.com/blog/everything-you-ever-wanted-to-know-about-node-dot-js-sessions/


#### 12. NodeJS Http service (ES6)

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
