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

Helpful document: http://www.symkat.com/understanding-http-caching

**Origin Server**
* The HTTP server that the entity is originally served from and hosted on.

**Caching Server**
* An HTTP server that exists between the client and the origin server.
* This could be a CDN caching server or caching proxy used on the client's network.
* If it is used, then the origin server is not directly contacted by the Client, instead, the Client contacts the caching server, which in turn contacts the Origin.

**Client**
* The HTTP client that makes requests against a caching server or an origin server.

**Entity/Entity Body** (Eg: An image, JavaScript, css, an HTML document)
* The document being accessed.
* An **entity** includes the headers, where the **entity-body** is only the asset being returned by the HTTP request. A

**Diff. between Expires, Date, Age and If-Modified-...**

**Do Not Track**
* HTTP header, enables users to opt out of tracking by websites they do not visit, including analytics services, advertising networks, and social platforms

**Cache-Control**

Provides a mechanism for a server to give caching information about an asset to a client or to a caching server. Include:
* max-age
* s-age
* must-revalidate

**Transfer-Encoding -- Transfer-Encoding: chunked**
* data transfer mechanism, data is sent in series of "chunk"
* isn't needed for progressive rendering. However, it is needed when the total content length is unknown before the first bytes are sent.
* Because the Content-Length header is not used, the sender does not need to know the length of the content before it starts transmitting a response to the receiver. Senders can begin transmitting dynamically-generated content before knowing the total size of that content.
* The size of each chunk is sent right before the chunk itself so that the receiver can tell when it has finished receiving data for that chunk. The data transfer is terminated by a final chunk of length zero.

**ETag**
* response-header field provides the current value of the entity tag for the requested variant
* If-not-match check

**X-Frame-Options**
* indicate whether or not a browser should be allowed to render a page in a <frame>, <iframe> or <object> . Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites

**Possible value**

* DENY: The page cannot be displayed in a frame, regardless of the site attempting to do so.
* SAMEORIGIN - The page can only be displayed in a frame on the same origin as the page itself.
* ALLOW-FROM uri -- The page can only be displayed in a frame on the specified origin.

### 5. What are HTTP actions? List all HTTP actions that you know, and explain them.

**GET**

**PUT**

**UPDATE**

**DELETE**

**POST**

**HEAD**

**OPTIONS**
