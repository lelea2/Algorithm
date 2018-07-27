#### Question: Design a URL shortening service like TinyURL that will provide short aliases redirecting to long URLs.

The system will be read-heavy with more redirection requests than new URLs. Let’s assume 100:1 ratio between read and write.

* assume 500M new URLs per month
* thus 100 * 500M => 50B redirections per month
* 500M / (30 days * 24 hours * 3600 seconds) ~= 200 new URLs/second
* 50B / (30 days * 24 hours * 3600 seconds) ~= 19K URL redirections/second
* Storage estimate: 500M new URLs/month, if keep for 5 years total number is 500M * 5 years * 12 months = 30B. Assume store 500 bytes (ballpark) need 30B * 500 bytes = 15TB.

- Bandwidth estimate: For write requests expect 200 new URLs so 200 * 500bytes = 100KB/second. 
- For read requests expect ~19K URL redirections, total outgoing data 19K * 500 bytes ~= 9 MB/second.

Memory estimate: If cache hot URLs, assume 80/20 rule so 20% of URLs generate 80% of traffic. Since 19K requests per second get 19K * 3600 seconds * 24 hours ~= 1.7B. So to cache 20% need 0.2 * 1.7B * 500 bytes ~= 170GB. Use memcache or redis.

Database schema: If SQL need two tables, one for storing info about the URL mappings and the other for users’ data. Could use NoSQL since don’t need a relationship between objects, the key-value store might work better.

Basic System Design:

* encode actual URLs with a unique hash (MD5, SHA256), could be base36 [a-z, 0-9] or base62 [A-Z, a-z, 0-9] and if add - or . can use base64 encoding. With base64, a 6 letter long key have 64^6 ~= 68.7B possible strings.
* if use 8 letter long key have 64^8 ~= 281T possible strings, so assume 6 letter enough
* what if multiple users enter the same URL? Could add increasing sequence number to each input URL to make it unique, then generate a hash but would impact performance. Or could append user id (unique) but what if user not logged in?
* could generate keys offline then store in a database so use already generated keys. This approach simple, fast, and resolves issues around uniques.
* might be concurrency issue since as soon as key is used it should not be used again. If have * multiple servers and two or more try to use the same key, then problems. To solve can use two servers, one for keys used and one not yet used. Server can always keep some keys in memory for fast access.
* size of key-DB with base64 is 6 (chars per key) * 68.7B (unique keys) => 412 GB.
* also note single point of failure so need standby replica of key-DB
* should entries stay forever or purge? Allow user-specificed expiration time?
