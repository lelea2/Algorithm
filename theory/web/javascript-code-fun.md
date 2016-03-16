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

#### 4. Object assignment (object stringify the key)

```javascript
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]); //456
```

* When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to "[object Object]". As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].
