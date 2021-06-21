# Design a messanger web app

**Instant message protocol**
https://en.wikipedia.org/wiki/Comparison_of_instant_messaging_protocols

https://medium.com/@thinkwik/web-sockets-vs-xmpp-which-is-better-for-chat-application-113e3520b327

#### Pros of using XMPP
- XMPP utilizes a decentralized architecture (open to all users)
- It has a very effective support
- It has top-notch security
- Provides extra flexibility

#### Pros of using WebSockets
- Support by big companies such as Google and browsers like Google Chrome
- High-speed data exchange capacity
- Persistent channels of communication
- No restrictions on the number of sessions one can run at any time
- Users are allowed to create cross-domain servers

```
While the XMPP vs. WebSockets performance review places WebSockets right ahead in many parameters, 
its low security has made many developers rethink its use. 
If the amount of data transmitted is the core factor in the app development, 
then, it is advisable to go for WebSockets because data redundancy is very low. 
Besides, less work required in WebSockets because only a few servers service the clients.
```

**Product Goal**
- Real time messaging
- Group
- Online status
- media upload
- read receipts
- notification

**Technical Goal**
- low latency
- High volumn
- reliable
- Secure

UserA <-> LoadBalancer <-> UserB
		^
		|
	     API Server (multiple)

           Message Queue (Pub/Sub) - each api server publish message and subscribe for listening
		|
	Notitication Service

- polling is not a right solution, a lot of unnecessary request, latency issue

- Long polling - a little better to solve latency issue, need to maintain ws open, 

- Websocket: 65000 connection limit browser could open at a time, need load balancer to route traffic

CDN for cache object for media
