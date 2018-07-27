PWAs not built on a single technology

* work offline
* on the web: linkable, responsive, don’t need to install/update
* progressive: different features in old/new browsers as needed


Fetch API
* can be polyfilled, gives first-class treatment of request/response objects
* works with async/await

Service Worker
* run on their own thread like Web/Shared Workers
* can intercept network requests, so can catch request if client is offline and provide fallback or use a resource from cache
* service worker runs in background even when web app is not open
* has a lifecycle so only one running (not two tabs)
* replacing a service worker: ex reload page but nothing changes. New service worker won’t take over until all other instances of app have been closed (like when desktop app auto-updates, don’t get new one until totally quit out)

Cache API
* gives fine-grain, programatic control over caching assets from inside of a service worker
* tl;dr -> can tell cache about what things it should hold on to
* stores pairs of request/response objects
* under-the-hood Cache API is a Map where Request objects are keys and Response objects are values
* can now use not just with service workers but also Save for Offline to manually add items to cache