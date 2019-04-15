#### 1. Is the Service Worker installed everytime I refresh the page?

No, whilst the browser does of course (naturally) execute the register()  code everytime you refresh the page, it won't install the service worker if the service worker file hasn't changed. If it only changed by 1 byte though, it'll install it as a new service worker (but wait with the activation as explained).

#### 2.Can I unregister a Service Worker?

Yes, this is possible, the following code does the trick:

```javascript
navigator.serviceWorker.getRegistrations().then(function(registrations) {
 for(let registration of registrations) {
  registration.unregister()
  }
});
```

#### 3. My app behaves strangely/ A new Service Worker isn't getting installed.
It probably gets installed but you still have some tab/ window with your app open (in one and the same browser). New service workers don't activate before all tabs/ windows with your app running in it are closed. Make sure to do that and then try again.

#### 4. Can I have multiple 'fetch' listeners in a service worker?
Yes, this is possible.

#### 5. Can I have multiple service workers on a page?
Yes, but only with different scopes. You can use a service worker for the /help "subdirectory" and one for the rest of your app. The more specific service worker (=> /help) overwrites the other one for its scope.

#### 6. Can Service Workers communicate with my Page/ the "normal" JavaScript code there?
Yes, that's possible using messages. Have a look at the following thread for more infos: http://craig-russell.co.uk/2016/01/29/service-worker-messaging.html#.WagROdMjF7M

This is actually not Service Worker specific, it applies to all Web Workers.

#### 7. What's the difference between Web Workers and Service Workers?
Service Workers are a special type of Web Workers. Web Workers also run on a background thread, decoupled from the DOM. They don't keep on living after the page is closed though. The Service Worker on the other hand, keeps on running (depending on the operating system) and also is decoupled from an individual page.
