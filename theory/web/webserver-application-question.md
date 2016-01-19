Referenced from:

* http://www.cloudsopedia.com/interviewquestions/j2ee/j2ee-server.php

### 1. What is the difference between a Web server and an application server ?

* In general, an application server prepares data for a Web server -- for example, gathering data from databases, applying relevant business rules, processing security checks, and/or storing the state of a user’s session. The term application server may be misleading since the functionality isn’t limited to applications. Its role is more as retriever and manager of data and processes used by anything running on a Web server. In the coming age of Web services, application servers will probably have an even more important role in managing service oriented components. One of the reasons for using an application server is to improve performance by off-loading tasks from a Web server. When heavy traffic has more users, more transactions, more data, and more security checks then more likely a Web server becomes a bottleneck.

#### Web Server
* Supports HTTP protocol. When a Web server receives an HTTP request, it responds with an HTTP response, such as sending back an HTML page (static content) or delegates the dynamic response generation to some other    program such as CGI scripts or Servlets or JSPs in an application server.
* Uses various scalability and fault-tolerance techniques.

#### Application Server
* Exposes business logic and dynamic content to a client through various protocols such as HTTP, TCP/IP, IIOP, JRMP etc.
* Uses various scalability and fault-tolerance techniques. In addition provides resource pooling, component life cycle management, transaction management, messaging, security etc.
