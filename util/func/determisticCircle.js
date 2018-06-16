// Function to convert circular object to 'Circular'

function deterministicDecirc (val, k, stack, parent) {
  if (typeof val === 'object' && val !== null) {
    for (let i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        parent[k] = '[Circular]';
        arr.push([parent, k, val]);
        return;
      }
    }
    if (typeof val.toJSON === 'function') {
      return;
    }
    stack.push(val);
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (let i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, stack, val);
      }
    } else {
      // Create a temporary object in the required way
      let tmp = {};
      const keys = Object.keys(val).sort((a, b) => {
        return a > b;
      });
      for (i = 0; i < keys.length; i++) {
        const key = keys[i];
        deterministicDecirc(val[key], key, stack, val);
        tmp[key] = val[key];
      }
      if (parent !== undefined) {
        arr.push([parent, k, val]);
        parent[k] = tmp;
      } else {
        return tmp;
      }
    }
    stack.pop();
  }
}
