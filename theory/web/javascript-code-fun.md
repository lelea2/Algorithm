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


#### 5. How to upload a file by javascript
Leverage input type="file"

```html
<div class="cv"> Would you like to attach you CV? <a href="" id="resume_link">Click here</a></div>
<input type="file" id="resume" style="visibility: hidden">
<script>
var myfile="";
$('#resume_link').click(function( e ) {
    e.preventDefault();
    $('#resume').trigger('click');
});
$('#resume').on( 'change', function() {
   myfile= $( this ).val();
   var ext = myfile.split('.').pop();
   //Here, you could check for allowed extended files
   if(ext=="pdf" || ext=="docx" || ext=="doc"){
       alert(ext);
   } else{
       alert(ext);
   }
});
</script>
```

#### 6. Fade in component in React

```javascript
componentDidMount: function() {
    // Get the components DOM node
    var elem = this.getDOMNode();
    // Set the opacity of the element to 0
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
        // Now set a transition on the opacity
        elem.style.transition = "opacity 250ms";
        // and set the opacity to 1
        elem.style.opacity = 1;
    });
}
```

#### 7. What does the following return?

* "complete" return first the "here" returned after 1000ms

```javascript
function b(callback) {
  setTimeout(function() {
    callback();
  },
  1000);
}
function a(callback) {
  b(function() {
    console.log('here');
  });
  callback();
}
a(function() {
  console.log('complete');
});
```

#### 8. Addition in JS and type resulted

```
Number + Number -> Addition
Boolean + Number -> Addition
Boolean + Number -> Addition
Number + String -> Concatenation
String + Boolean -> Concatenation
String + String -> Concatenation
```

#### 9. How to access content within the iframe
```javascript
var iframe = document.getElementById('iframeId');
var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
```

