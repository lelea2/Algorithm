class Sheep {

  constructor(name, weight) {
    Object.assign(this, { name, weight });
  }

  clone() {
    return new Sheep(this.name, this.weight);
  }

}

const bob = new Sheep('Bob', 80);
const copyOfBob = bob.clone();