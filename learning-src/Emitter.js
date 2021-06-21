/* emitter = new Emitter();
// 1. Support subscribing to events. sub = emitter.subscribe("event_name", callback); sub2 = emitter.subscribe("event_name", callback2);
// 2. Support emitting events. // This particular example should lead to the "callback" above being invoked with "foo" and "bar" as parameters. emitter.emit("event_name", foo, bar);
// 3. Support unsubscribing existing subscriptions by releasing them. sub.emit(); // "sub" is the reference returned by "subscribe" above
*/

class Emitter {
  constructor() {
    this.subscribedEvents = new Map();
  }

  subscribe(eventName, callback) {
    this.subscribedEvents.set(eventName, callback);
  }

  unsubscribe(eventName) {
    this.subscribedEvents.delete(eventName);
  }

  emit(eventName) {
    const callback = this.subscribedEvents.get(eventName);
    if(callback){
      const args = Array.from(arguments);
      args.splice(0, 1);
      callback.apply(this, args);
    }
  }
}

const emmiter = new Emitter();
emmiter.subscribe("event1", (name, surname) => {
  alert[name + " " + surname);
});
emmiter.emit("event1", "Hello", "World");
emmiter.unsubscribe("event1");
emmiter.emit("event1", "Hello", "World");
