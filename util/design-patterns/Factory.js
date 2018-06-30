class Car {
  constructor(size, price, maxSpeed) {
    this.size = size;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class CarFactory {

  create(size) {
    if (size === 'small') return new Car(size, 10800, 130);
    if (size === 'medium') return new Car(size, 15200, 150);
    if (size === 'large') return new Car(size, 20300, 170);
  }

}

const carFactory = new CarFactory();

carFactory.create('medium');