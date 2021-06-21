#### Design poll widget

**Things to consider**

1. data structure
2. expiration
3. data refresh policy
4. cache / bottleneck
5. something fun like animations .etc
6. a11y

**Modular**
1. Item bar. Any action?
2. Poll list

DDAU model

// polling: to avoid ajax response jumble up

```javascript
(function poll(){
  setTimeout(function(){
    $.ajax({ url: "server", success: function(data){
      // update poll here

      //Setup the next poll recursively
      poll();
    }, dataType: "json"});
  }, 30000);
})();

```

// Long polling: more efficient, because it avoids having to open multiple connections to the server.  The caveat is that you need some sort of WebSocket functionality

```javascript
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect("http://localhost");
  socket.on('poll', function (data) {
    // update poll
    socket.emit('poll', { my: 'data' });
  });
</script>
```

* Avoid memory leak by full page refresh, close error socket, clear up old data if there is any