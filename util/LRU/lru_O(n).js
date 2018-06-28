// constructor
var LRUCache = function(capacity){
  // save all key-value pairs in this hashtable
  this.bucket = {}
  // save all keys in the stack with the order of last used time
  this.keys = []
  this.capacity = capacity
  this.length = 0
}

LRUCache.prototype.updateKey = function(key){
  // update the position of this key in keys 
  var keyIndex = this.keys.indexOf(key)
  this.keys[keyIndex] = undefined
  // update the key to the head of the stack
  this.keys.push(key)
}
LRUCache.prototype.get = function(key){
  if(this.bucket.hasOwnProperty(key)){
    this.updateKey(key)
    return this.bucket[key]
  }else{
    return -1
  }
}

LRUCache.prototype.set = function(key,value){
  if(this.capacity <= 0){console.log("no memory to save 1 item");return}
  // update exist item 
  if(this.bucket.hasOwnProperty(key)){
    this.bucket[key] = value
    this.updateKey(key)
    return
  }
  
  // if the bucket is fullfilled, remove the least recently used item
  if(this.length >= this.capacity){
    var dKey = this.keys.shift()
    while(!dKey){
      // if the dKey is undefined, shift() again
      dKey = this.keys.shift()
    }
    delete this.bucket[dKey]
  }

  // add new item and update the length
  this.bucket[key] = value
  this.keys.push(key)
  this.length ++
}
