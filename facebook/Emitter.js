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
