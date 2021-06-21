# Design a messanger web app

**Instant message protocol**
https://en.wikipedia.org/wiki/Comparison_of_instant_messaging_protocols

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
