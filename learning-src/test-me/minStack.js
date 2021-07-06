class MinStack {
  constructor() {
    this.minStack = [];
    this.container = [];
  }

  push(val) {
    this.container.push(val);
    // only push min value
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    }
  }

  pop() {
    const val = this.container.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.container[this.container.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}