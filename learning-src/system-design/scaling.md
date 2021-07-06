### Scaling web application

* http://venkateshcm.com/2014/05/Architecture-Issues-Scaling-Web-Applications/
* http://venkateshcm.com/2014/05/How-To-Determine-Web-Applications-Thread-Poll-Size/ 
* http://venkateshcm.com/2014/05/Caching-To-Scale-Web-Applications/
* http://venkateshcm.com/2014/06/Web-Application-Cache/

**Scalability**
Web application is said to be scalable if by adding more hardware, application can linearly take more requests than before. Two ways of adding more hardware are
- Scaling Up (vertical scaling) :– increasing the number CPUs or adding faster CPUs on a single box.
- Scaling Out (horizontal scaling) :– increasing the number of boxes.


**Capacity planning**
- Figuring out the required hardware to handle expected load. Based on performance of application on few box to project the number
- Verify through load/performance testing


**Splitting database**
Database can be split vertically (Partitioning) or horizontally (Sharding).
- Vertically splitting (Partitioning) :– Database can be split into multiple loosely coupled sub-databases based of domain concepts. 
Eg:– Customer database, Product Database etc. Another way to split database is by moving few columns of an entity to one database and few other columns to another database. 
Eg:– Customer database , Customer contact Info database, Customer Orders database etc.
- Horizontally splitting (Sharding) :– Database can be horizontally split into multiple database based on some discrete attribute. 
Eg:– American Customers database, European Customers database.


**CPU Bound Application**
An application is said to be CPU bound if application throughput is limited by its CPU. By increasing CPU speed application response time can be reduced. For examples:
* Applications which are computing or processing data with out performing IO operations. (Finance or Trading Applications)
* Applications which use cache heavily and don’t perform any IO operations
* Applications which are asynchronous (i.e. Non Blocking), don’t wait on external resources. (Reactive Pattern Applications, NodeJS application)

These issues could be fixed by
* Caching precomputed values
* Performing the computation in separate background job.

**IO bound and determine threadpool size**
- In web applications thread pool size determines the number of concurrent requests that can be handled at any given time. 
If a web application gets more requests than thread pool size, excess requests are either queued or rejected.
- Eg: NodeJS (non-blocking IO), single thread could handle multiple request concurrently
- Eg: Java Spring(blocking IO), single thread could only handle 1 request concurrently. We have to increase number of threads

```js
Threads = Number of Threads
WebRequests per sec = Number of Web Requests that can be processed in one second
ResponseTime = Time taken to process one web request

Threads = (WebRequests/sec) X ResponseTime
```

- In CPU bound applications thread Pool size should be equal number of cpus on the box. 
Adding more threads would interrupt request processing due to thread context switching and also increases response time.
- Non-blocking IO applications will be CPU bound as there are no thread wait time while requests get processed.


**Caching**
1) Browser cache
- static files or local storage/cookies for dynamic data
- Controlled by TTL on request header
- Cache refresh can be forced by changing cache invalidation parameter in the URL of the resource: eg: through query parameter or new versioning/hash number

2) CDN
- static files
- distirbuted resources over few domain name => handle request parallely provide better performance or response time to user
- Cache refresg similar by query parameter or versioning

3) Reverse proxy cache layer
- act as intermediary between browser client and web server
- Caching static files and dynamic page responses
- Proxy servers caching works using HTTP header parameters like cache control, expires headers of resource to be cached with time to leave (TTL).

4) Application Cache
* http://venkateshcm.com/2014/06/Web-Application-Cache/
- Session cache: Cached value is stored per key per user and cached values are used for a single user
- Application cache: Cached value is stored per key and cached values are used for multiple users

Out-of-process caching gets around the above issues by storing cached values in distributed caching systems like memcache. Due to central cache handling in out-of-process caching
* If one of the web application node caches a value, it is available to all other nodes reducing cache misses.
* Cache can be refreshed or invalided easily by updating central cache system.
Persistent caches is used when it is important to recover from crash with cached values intact. It is achieved by re-loading cached data from disk.

5) DB cache