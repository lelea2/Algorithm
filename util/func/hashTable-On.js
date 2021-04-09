/*

RandomHashMap

* get(K) -> V
* put(K, V) -> add (K, V) to storage, or update V for K
* delete(K) -> remove (K, V) from storage
* get_random_value() -> returns random value

(1, 4), (0, 5), (2, 5)

get_random_value() -> return 4 with 1/3 and 5 with 2/3
*/

class RandomHashMap {
  constructor() {
    this.hash = {};
    this.length = 0;
  }

  get(key) {
    return this.hash[key]?.value;
  }

  put(key, value) {
    if (!this.hash[key]) {
      this.hash[key] = {
        value: value,
        index: this.keys.length
      };
      this.keys.push(key);
    } else {
      this.hash[key].value = value;
    }
  }

  delete(key) {
     if (this.hash[key]) {
      const indexKey = this.hash[key].index;
      if (indexKey === this.keys.length - 1) {
        this.keys.pop();
      } else {
        const lastKey = this.key[this.keys.length - 1];
        const temp = key;
        this.keys[indexKey] = lastKey;
        this.keys[this.keys.length - 1] = temp;
        this.keys.pop(); // remove the last item (which is the key)
        // update the hashKey
        this.hash[lastKey].index = indexKey;
       }
      delete this.hash[key];
     }
  }
  
  get_random_value() { // O(n)
     const rand = Math.floor(Math.rand() * this.keys.length);
    return this.hash[this.keys[rand]];
  }
}