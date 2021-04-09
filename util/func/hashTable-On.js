// Hi I am Vijendar
// Hi this is Khanh

// Implement HashTable with get, set, delete and getRandom methods in O(1) time.

// getRandom should return random key
/*

ht = new RandomHashTable()
ht.set("a", 1)
ht.get("a") # 1
ht.getRamdom() # a
ht.set("b", 2)
ht.getRamdom() # either a or b randomly
ht.delete("a")
ht.getRamdom() # b

time: O(1)
*/

class HashTable {
    constructor() {
      this.hash = { };
      // {
      //   value
      //   index
      // }
      this.length = 0;
      //this.keys = {"1": "key", "2": "key2"};
      this.keys = []; // [a, b, c]
      this.index = 0;
    }
    
    set(key, value) {
      if (!this.hash[key]) { // O(1)
        this.hash[key].value = value;
      } else {
        this.hash[key] = {
          value: value,
          index: this.index,
        };
        this.key.push(key);
        this.index +=1;
        this.length += 1;
      }
    }
    
    get(key) {
      return this.hash[key]?.value;
    }
    
    delete(key) {
      if (this.hash[key]) {
        const index = this.hash[key].index;
        
        this.length -= 1; 
        
        // Swap array
        const indexKey = this.hash[key].index;
        const lastKey = this.key[this.key.length - 1];
        const temp = key;
        this.key[indexKey] = lastKey;
        this.key[lastKey] = temp;
        // remove from key array
        this.key.pop();
       
        // remove dict
        delete this.hash[key];
        this.hash[lastKey].index = indexKey;
      }
      return false;
    }
    
    // this.hash -- {a, b c}
    // this.keys -- { 1: 'a', 2: 'b', 3: 'c'}
    // Math.rand()*3 => 2
    // this.keys[3] -> // b
    
    // this.hash -- { a, c}
    // this.keys -- { 1: 'a', 3: 'c' }// 
    // this.keys [a, b, c, d, e, f]
    
    getRandom() {
      //this.keys.filter(a=> a != undefined).length;
      const rand = Math.floor(Math.rand()*length); //O(1) // 2
      return this.keys[rand]; 
    }
  }