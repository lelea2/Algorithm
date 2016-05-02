<!-- MarkdownTOC -->

- 1. In JavaScript isNaN\(undefined\) returns true. how could you fix it?
- 2. Check if given number is integer
- 3. Fast Algorithm To Find Unique Items in JavaScript Array
- 4. Object assignment \(object stringify the key\)
- 5. How to upload a file by javascript
- 6. Fade in component in React
- 7. What does the following return?
- 8. Addition in JS and type resulted
- 9. How to access content within the iframe
- 10. What type of pop-up boxes you can create in JS and how you create them?
- 11. Smart poller in jQuery

<!-- /MarkdownTOC -->

#### 1. In JavaScript isNaN(undefined) returns true. how could you fix it?

```javascript
function isReallyNaN (x){
    return x!==x;
}
```

#### 2. Check if given number is integer
```javascript
function isInteger(x) {
    return (x % 1 === 0);
}

```

#### 3. Fast Algorithm To Find Unique Items in JavaScript Array

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


#### 10. What type of pop-up boxes you can create in JS and how you create them?

* Alert, prompt, and confirm boxes are the three main pop-up boxes that can be created in JavaScript.
* Alert boxes are used to alert the user to important info regarding the site and require the user to click ‘OK’ in order to proceed.
* Alert boxes are created using the following syntax:
```javascript
window.alert(“Text”);
```
* Prompt boxes prompt the user to input some form of data before proceeding.
* Prompt boxes are created using the following syntax:
```javascript
window.prompt(“Prompt Text”,”Default value”);
```
* Confirm boxes are used when for verification, such as agreeing to a terms of service, rendering a TRUE value when the user clicks ‘OK’.
* Confirm boxes are created with the following syntax:
```
window.confirm(“Confirm text here.”);
```

#### 11. Smart poller in jQuery

```javascript
(function($) {
    $.smartPoller = function(wait, poller) {
        if ($.isFunction(wait)) {
            poller = wait;
            wait = 1000;
        }

        (function startPoller() {
            setTimeout(function() {
                poller.call(this, startPoller);
            }, wait);
            // for polling that increases after no change, uncomment below
            // wait = wait * 1.5
        })();
    };
})(jQuery);
```
