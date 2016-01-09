### 1. Traditionally, why has it been better to serve site assets from multiple domains?
* Always better to load static files (Images, JS, CSS) through CDN (Content Delivery Network)
* Provide **Domain Sharding** benefits
* Web are restricted to download several items at once, so the more you use resource hosted on external domains, the faster the page will load
* Help request for static resource parallize and balanced across the host name


### 2. What will happen when you type in an URL in browser?
(Credited to http://stackoverflow.com/questions/2092527/what-happens-when-you-type-in-a-url-in-browser)

* 1. browser checks cache; if requested object is in cache and is fresh, skip to #9
* 2. browser asks OS for server's IP address
* 3. OS makes a DNS lookup and replies the IP address to the browser
* 4. browser opens a TCP connection to server (this step is much more complex with HTTPS)
* 5. browser sends the HTTP request through TCP connection
* 6. browser receives HTTP response and may close the TCP connection, or reuse it for another request
* 7. browser checks if the response is a redirect or a conditional response (3xx result status codes), authorization
* 8. request (401), error (4xx and 5xx), etc.; these are handled differently from normal responses (2xx)
* 9. if cacheable, response is stored in cache
* 10. browser decodes response (e.g. if it's gzipped)
* 11. browser determines what to do with response (e.g. is it a HTML page, is it an image, is it a sound clip?)
* 12. browser renders response, or offers a **download dialog** for unrecognized types


### 3. What are the differences between Long-Polling, Websockets and Server-Sent Events

**Long-Polling (Ajax Polling)**

* Client send HTTP request to server
* The requested webpage executes JS which requests a file from the server.
* The server waits until there's new information available, and response
* The client receives the new information and immediately sends another request to the server, re-starting the process.

**Websockets**

* Client requests a webpage from a server using regular HTTP.
* The requested webpage executes JS which opens a connection with the server.
* Server and client sends each other messages when data available.
* Real-time traffic from the server to the client, and from the client to the server
* Need server that has an event loop
* possible to **connect with a server from another domain**.

**Server-Sent Events (HTML5 EventSource)**

* Client requests a webpage from a server using regular HTTP .
* Requested webpage executes javascript which opens a connection to the server.
* The server sends an event to the client when there's new information available.
* Real time traffic server, server will need an event loop

### 4. Explain the following request and response headers:

**Diff. between Expires, Date, Age and If-Modified-...**

**Do Not Track**

**Cache-Control**

**Transfer-Encoding**

**ETag**

**X-Frame-Options**

### 5. What are HTTP actions? List all HTTP actions that you know, and explain them.

**GET**

**PUT**

**UPDATE**

**DELETE**

**POST**

**HEAD**

**OPTIONS**
