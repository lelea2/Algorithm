### 1. In JavaScript isNaN(undefined) returns true. how could you fix it?

```javascript
function isReallyNaN (x){
    return x!==x;
}
```

### 2. Check if given number is integer
```javascript
function isInteger(x) {
    return (x % 1 === 0);
}

```

### 3. Fast Algorithm To Find Unique Items in JavaScript Array

Classical method is running loop O(n^2) to find unique items, which is not a good thing for a large array

```javascript
//Not a good thing for large array
Array.prototype.unique = function() {
    var a = [];
    for(var i=0; i < this.length; i++) {
        for(var j=i+1; j < this.length; j++) {
            if (this[i] === this[j]) j = ++i;
        }
        a.push(this[i]);
    }
    return a;
};

```

A better way to generate unique items in array, is keep key in "hash table". Worst case running scenarios is O(2n)
```javascript
Array.prototype.unique = function() {
    var o = {}, //hash key table
        r = []; //
    for(var i=0; i< this.length; i+=1) {
        o[this[i]] = this[i];
    }
    for(i in o) r.push(o[i]); //walk hashtable to generate array contains unique key
    return r;
};
```
