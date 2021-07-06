console.clear();


// create a Model class that has methods
// instantiation
// set
// get
// has
// unset

class Model {
  state = {};
  listeners = {};
  
  constructor (data) {
    if (data) {
      this.state = data;
    }
  }
  
  get (key) {
    return this.state[key];
  }
  
  set (key, val) {
    const oldVal = this.state[key];
    this.state[key] = val;
    this.eventTrigger(key, oldVal, val);
  }
  
  has (key) {
    return this.state.hasOwnProperty(key) || false;
  }
  
  unset (key) {
    delete this.state[key];
  }
  
  eventTrigger (key, oldVal, val) {
    
    const listenerKey = `change:${key}`
    
    if (this.state[key] && this.listeners.change) {
      this.listeners.change.forEach(callback => {
        callback(key, oldVal, val);
      });
    }
    if (this.state[key] && this.listeners[listenerKey]) {
      this.listeners[listenerKey].forEach(callback => {
        callback(oldVal, val);
      });
    }
  }
  
  on (key, callback) {
    this.listeners[key] = this.listeners[key] || [];
    this.listeners[key].push(callback);
  }
  
  off (key, callback) {
    if (this.listeners[key]) {
      
      this.listeners[key] = this.listeners[key].filter(func => {
        return func !== callback;
      }); 
    }
  }
}

function example() {
  const person = new Model({ name: 'Jess', age: 22 });
  console.log(person.get('name')); // -> 'Jess'
  console.log(person.get('age')); // -> 22

  // note that Model accepts arbitrary properties, not just "name" and "age".
  var company = new Model();
  company.set('employees', 2500);
  company.set('revenue', 5);
  
  console.log('employees', company.get('employees')); // -> 2500
  console.log('revenue', company.get('revenue')); // -> 5
  console.log('not present', company.get('not present')); // -> undefined
  
  // here are all the methods for the model
  person.set('name', 'Bob');
  console.log(person.get('name'));   // -> 'Bob'
  console.log(person.has('name'));   // -> true
  person.unset('name');
  console.log(person.has('name'));   // -> false
}

function example2() {
  const person = new Model({ name: 'Jess', age: 22 });
  // the on method allows us add callbacks for events.
  // Model emits two events for each change:
  // 'change':              emitted on any change
  // 'change:${attribute}': emitted only when "attribute"
  //                        changes.
  // here’s a concrete example:
  
  const onChangeHandler = function(key, oldVal, newVal) {
    // called when any attribute changes
    console.log('attr', key, 'changed from ***', oldVal, 'to', newVal);
  };
  
  const onChangeNameHandler = function(oldVal, newVal) {
    // called only when the "name" attribute changes.
    // note that the signature of this callback is
    // different from the general ’change’ event 
    // callback
    console.log('specifically name changed from', oldVal, 'to', newVal);
  };

  person.on('change', onChangeHandler);
  person.set('name', 'Krutiii');
  

  person.on('change:name', onChangeNameHandler);
  
  person.on('name', function() {
    console.log('this should not fire');
  });
  
  person.set('name', 'Kruti');
  person.set('height', 60);

  person.off('change', onChangeHandler);
  person.off('change:name', onChangeNameHandler);
  
  person.set('name', 'Gary');
  person.set('height', 72);
}

example();

example2();
