// Since node is object we can store value directly on the node itself.
// But it become complex and may mess with original object. Luckily we have Symbol come to rescue:

// implement using ES6 Map
class Store {
  constructor() {
    this._map = new WeakMap();
  }
  set(node, value) {
    this._map.set(node,value);
  }
  get(node) {
    return this._map.get(node);
  }
  has(node) {
    return this._map.has(node);
  }
}

// Hacky
class DOMStore {
  constructor () {
    this.DOMStoreSymbol = Symbol('DOMStore');
  }
  has(node) {
    return node[this.DOMStoreSymbol] !== undefined;
  }

  set(node, value) {
    node[this.DOMStoreSymbol] = value;
  }

  get(node, defaultValue) {
    return node[this.DOMStoreSymbol] || defaultValue;
  }
}
