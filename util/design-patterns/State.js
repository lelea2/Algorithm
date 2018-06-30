class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  doSomething() {
    console.log('Do nothing by default');
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping);
  }

  doSomething() {
    console.log('Do something when order status is "waitingForPayment"');
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered);
  }

  doSomething() {
    console.log('Do something else if order status is "shipping"');
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  };

  doSomething() {
    return this.state.doSomething();
  }
}

const order = new Order();
order.doSomething();
// Do something when order status is "waitingForPayment"

order.nextState();
order.doSomething();
// Do something else if order status is "shipping"

order.nextState();
order.doSomething();
// Do nothing by default