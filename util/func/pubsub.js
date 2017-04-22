/**
 * Pure function in pubsub event
 */
var events = (function() {
  var topics = {};
  var hOP = topics.hasOwnProperty;

  return {
    subscribe: function(topic, listener) {
      // Create the topic's object if not yet created
      if(!hOP.call(topics, topic)) topics[topic] = [];

      // Add the listener to queue
      var index = topics[topic].push(listener) -1;

      // Provide handle back for removal of topic
      return {
        remove: function() {
          delete topics[topic][index];
        }
      };
    },
    publish: function(topic, info) {
      // If the topic doesn't exist, or there's no listeners in queue, just leave
      if(!hOP.call(topics, topic)) return;
      // Cycle through topics queue, fire!
      topics[topic].forEach(function(item) {
        item(info != undefined ? info : {});
      });
    }
  };
})();

//Publish an event
events.publish('/page/load', {
  url: '/some/url/path' // any argument
});

//Subscribe to an event
var subscription = events.subscribe('/page/load', function(obj) {
  // Do something now that the event has occurred
});

// ...sometime later where I no longer want subscription...
subscription.remove();
