Referenced from:

* http://www.thatjsdude.com/interview/dom.html

### 1. window vs. document
* **window** is JS global object that holds global variables, global functions, location, history everything is under it. Besides, setTimeout, ajax call (XMLHttpRequest), console or localStorage are part of window.

* **document** is also under window. document is a property of the window object. document represents the DOM and DOM is the object oriented representation of the html markup you have written. All the nodes are part of document. Hence you can use getElementById or addEventListener on document. These methods are not present in the window object.

```javascript
window.document === document; //true
window.getElementById; //undefined
document.getElementById; //function getElementById() { [native code] }
```

### 2. window.onload vs document.onload
* **window.onload** is fired when DOM is ready and all the contents including images, css, scripts, sub-frames, etc. finished loaded. This means everything is loaded.

* **document.onload** is fired when DOM (DOM tree built from markup code within the document)is ready which can be prior to images and other external content is loaded.

* **document.readyState** Returns "loading" while the Document is loading, "interactive" once it is finished parsing but still loading sub-resources, and "complete" once it has loaded. The readystatechange event fires on the Document object when this value changes.

### 3. attribute vs property

* **attributes** are just like attribute in your html tag (XML style attribute) inside the starting tag. html attributes are exposed to the DOM via property.

* **property** is created when DOM is parsed for each attribute in the html tag. If you change an attribute only the value of the property will change.

```javascript
var myInput = document.getElementById('my-input');
myInput.getAttribute('value'); //"Name:"
myInput.value; //'my dude'
//myInput.setAttribute('value', 'that dude')
//myInput.removeAttribute()
```

### 4. What are the different ways to get an element from DOM?

* **getElementById** to get a element that has the provided Id.
* **getElementsByClassName** to get a nodelist (nodelist is not an array, rather it is array-like object) by providing a class name.
* **getElementsByTagName** to get a nodelist by the provided tag name.
* **querySelector** you will pass css style selector (jquery style) and this will retrurn **first matched** element in the DOM.
* **querySelectorAll** will return a non-live nodelist by using depth-first pre order traversal of **all the matched** elements. Non-live means, any changes after selecting the elements will not be reflected.

The following is not used often as above but exist

* **getElementsByName** returns the list of elements by the provided name of the html tag
* **getElementsByTagNameNS** returns elements with particular tag name within the provided namespace

### 5. Fastest way to Query DOM

The following list is sorted from top to bottom for time it takes to select the elements

* ID (#myID)
* Class (.myClass)
* Tag (div, p)
* Sibling (div+p, div~p)
* child (div>p)
* Descendant (div p)
* Universal (*)
* Attribute (input[type="checkbox"])
* Pseudo (p:first-child)

**Question:**

Why querySelectorAll('.my-class') is slower than getElementsByClassName('my-class')?

**Answer:**
querySlectorAll is a generic purpose method. It is optimized for different kinds of selectors. Hence it has to check whether you put a "#" or "." in front of the parameter you are passing. If you are just passing a class name with ".", under the hood it uses getElementsByClassName (could vary based on browser implements). Whereas if you directly uses getElementsByClassName it directly uses this method and doesn't have to go through all the initial processing of querySelectorAll. Hence to search elements with a particular class name, getElementsByClassName is faster than querySelectorAll.

### 6. How come, I can't use forEach or similar array methods on a NodeList?

Not the same object,
```javascript

myArray --> Array.prototype --> Object.prototype --> null

myNodeList --> NodeList.prototype --> Object.prototype --> null
```

Loop through nodelist as following

```javascript
var myNodeList = document.querySelectorAll('.my-class');
var nodesArray = Array.prototype.slice.call(myNodeList);

//use array method on nodeList
nodesArray.forEach(function(el, idx){
  console.log(idx, el);
});
```

### 7. If you need to implement getElementByAttribute, how would you implement it?

```javascript
//Idea: get all the element in DOM, and find element that has attribute required
function getElementsByAttribute(attribute) {
    var allElements = document.getElementsByTagName('*'),
        elm,
        found=[];
    for (var i = 0; i < allElements.length; i++) {
        elm = allElements[i];
        if (elm.getAttribute(attribute)) {
            found.push(elm);
        }
    }
    return found;
}
```

You CANNOT extend getElementsByAttribute to DOM, the explanation could be found in:
http://perfectionkills.com/whats-wrong-with-extending-the-dom/

### 8. Add class with no jQuery

```javascript
function addClass(selector, className) {
   var elm = document.querySelector(selector);
   if (elm) {
      elm.classList.add(className);
   }
}

//In IE9+
el.classList.remove('my-class'); //removing a class
el.classList.toggle('my-class');  // toggling a class
el.classList.contains('my-class'); // checking whether class exists
```

### 9. How could I verify whether one element is child of another?

Idea: First check whether the passed parent is the direct parent of the child. If not, keep moving upward to the root of the tree.

```javascript
function isDescendant(parent, child) {
    while(child.parentNode) {
        if(child.parentNode == parent) {
            return true;
        } else {
            child = child.parentNode; //walk upward
        }
    }
    return false;
}
```

### 10. innerHTML vs appendChild

**innerHTML**

* Browser removes all the current children of the elements. Parse the string and assign the parsed string to the element as children.
* innerHTML could be slow while parsing a string. Browser has to deal with the string (invalid html)

```javascript
var ul = document.getElementById('myList');

el.innerHTML = '<li>Only one item</li>';
```

**appendChild**

* create a new Element. Since you are creating it, browser doesnt have to parse string and there is no invalid html. And you can pass the child to the parent and child will be appended to the parent.

* pass by reference: The reference you are passing will be removed from the current parent and will be added to the new parent you are appending to.

```javascript

var li = document.createElement("li");
var text = document.createTextNode('Only one Item');

li.appendChild(text);
ul.appendChild(li);
```

### 11. What is createDocumentFragment and why you might use it?

* **documentFragment** a very lightweight or minimal part of a DOM or a subtree of a DOM tree. It is very helpful when you are manipulating a part of DOM for multiple times. It becomes expensive to hit a certain portion of DOM for hundreds time. You might cause reflow for hundred times.

```javascript
//good practice. you causing reflow one time
var fragment = document.createDocumentFragment(), //document fragment to access the DOM
    list = ['foo', 'bar', 'baz', ...],
    el, text;
for (var i = 0; i < list.length; i++) {
    el = document.createElement('li');
    text = document.createTextNode(list[i]);
    el.appendChild(text);
    fragment.appendChild(el);
}
document.body.appendChild(fragment);
```

### 12. Reflow and why is it bad?

* When you change size or position of an element in the page, all the elements after it has to change their position according to the changes you made. For example, if you change height on an element, all the elements under it has to move down in the page to accomodate a change in height. Hence, flow of the elements in the page is changed and this is called reflow.

* Reflows could be very expensive and it might have a performance hit specially in the smaller devices like phone. As it might causes changes in the portion (or whole) layout of the page.

**How to avoid**

* avoid setting multiple inline style
* apply animation to the elements that are positioned fixed or absolute
* avoid tables for layout

### 13. How could you make sure to run some javaScript when DOM is ready like $(document).ready?

**(1)** Put your script in the last tag of html body element. DOM would be ready by the time browser hits the script tag.

**(2)** Place your code inside a DOMContentLoaded handler. This event will be fired when DOM is completely loaded.
```javascript
document.addEventListener('DOMContentLoaded', function(){
   //put your script here
});
```
**(3)** Watch changes in the readyState of the document. And the last state is "complete" state, you can put your code there.
```javascript
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        //put your script here
    }
}
```

### 14. Event bubble vs. Event capture

**Event bubble** (inner -> outer element)

After an event triggers on the deepest possible element, it then triggers on parents in nesting order.

**Event capture** (outer -> inner element)

2 stages of event processing

The event first goes down - that’s called capturing, and then bubbles up. This behavior is standartized in W3C specification.


### 15.1 Event delegation vs. direct binding

* Talk about adding complexity of elements on the page
* CPU time effect

```javascript
//Direct binding
$(<selector>).on(<event>, <event-handler>)
//Delegate binding
$(<root-element>).on(<event>, <selector>)
$(<root-element>).delegate(<selector>, <event>, <event-handler>)

```

* **Delegate** saves CPU when binding event handlers. Since it binds to "root" element, instead of potentially many more single descendant elements. Delegate will incur more CPU overhead when actual events occurs, since they have to bubble up to the DOM of the root element
* **Bind** saves CPU when events trigger

### 15.2 How to destroy multiple items with one click ==> apply event delegate
* To **destroy** an element, in JS, we could use removeChild
```javascript
document.getElementById('listToDestroy').addEventListener('click', function (e) {
    var elm = e.target.parentNode;
    elm.parentNode.removeChild(elm);
    e.preventDefault();
});
```

### 16. Defer vs Async in JS tag

* HTML parser will ignore defer and async keyword for inline script (script that does not have a src attribute).

* **normal:** When you have a plain script tag (no defer or async keyword), parser will pause parsing, script would be downloaded and exectuted. After that parsing resume.

* **defer:** defer keyword in the script tag will defer the execution of the script. Hence script will be executed when DOM is available. Important point is, defer is not supported by all major major browsers.

* **async:** If possible, set the execution of the script, asynchronously. async keyword has no effect on inline script
Readmore on: https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/

### 17. currentTarget vs. target in JS?

Eg: http://jsfiddle.net/misteroneill/kmn4A/3/ (Outer div always currentTarget since it listen to the event, while either innerdiv or outerdiv is target depends on where user click on)

**target** -- element that triggered event

**currentTarget** -- element that listens to event.

```javascript
//Define current target and handle for IE8 cases
target = (event.currentTarget) ? event.currentTarget : event.srcElement;
```

### 18. Why is document.write considered a “bad practice”?

**Pro:**

* Easiest way to embed inline content from an external (to your host/domain) script.
* You can overwrite the entire content in a frame/iframe. (when needed)

**Con:**

* does not work in XHTML
* It serializes the rendering engine to pause until said external script is loaded, which could take much longer than an internal script. ==> eventually blocking your whole page
* Script is placed within the content, which is considered bad-form.

### 19. Detect Javascript On/Off, With Notification?

```html
<!-- Have script enabled -->
<script type="text/javascript">
   document.write("Welcome, you have Javascript on.")
</script>
<!-- Have script disabled -->
<noscript>JavaScript is off. Please enable to view full site.</noscript>
```

### 20. How to capture all click on the page?
Leverage event bubble to capture all click, all click event could be bubbled up to ```<body>```

```javaScript
document.querySelector('body').addEventListener('click', function(e){
  console.log('body clicked', e.target);
});

//or
window.onclick =function(e){
  console.log('someone clicked', e.target)
}

```

### 21. How to create customed event in javascript? -- use Javascript CustomEvent() object

Reference: https://davidwalsh.name/customevent

```javascript
//Create customed events
var myEvent = new CustomEvent("userLogin", {
  detail: {
    username: "davidwalsh"
  },
  bubbles: true,
  cancelable: false
});

// Trigger it!
myElement.dispatchEvent(myEvent);

//Listen to customed events
myElement.addEventListener("userLogin", function(e) {
  console.info("Event is: ", e);
  console.info("Custom data is: ", e.detail);
});
```
### 22. Miscellaneous

##### 1. How could you prevent a click on an anchor from going to the link?
* preventDefault() inside event handler. However, this doesnt stop further propagation.


##### 2. How could you stop further propagation of an event?
* event.stopPropagation();

##### 3. Can you remove an event handler from an element?
* target.removeEventListener('click', handler)

##### 4. How could you run event handler in the capturing phase not in bubble phase?
* There is a third (optional) parameter in addEventListener and removeEventLister. You can pass true or false to useCapture phase.

##### 5. How could you prevent multiple event handler to be fired for an event?
* If event listeners are attached for the same type event (click, keydown, etc.) of an element for the same event type, you can call event.stopImmediatePropagation() in the first event handler. No other event handler will be executed.

##### 6. Is there anything you have to be careful when using node.cloneNode()?
* While cloning, make sure you didn't duplicate ID.

##### 7. What is cancelable event?
* The cancelable event property returns a Boolean value indicating whether or not an event is a cancelable event.
* The event is cancelable if it is possible to prevent the events default action.
* To cancel an event, use the preventDefault() method.

### 23. What is shadow DOM?

Read: http://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/

### 24. React and Flux intro

Read: https://www.quora.com/What-are-the-pros-and-cons-of-React-js-and-Flux-Are-they-the-future-of-front-end-development

### 25. What is DOCTYPE?
* The <!DOCTYPE> declaration must be the very first thing in your HTML document, before the <html> tag.
* The <!DOCTYPE> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.
* In HTML 4.01, the <!DOCTYPE> declaration refers to a DTD, because HTML 4.01 was based on SGML. The DTD specifies the rules for the markup language, so that the browsers render the content correctly.
* HTML5 is not based on SGML, and therefore does not require a reference to a DTD.
**Tip: Always add the <!DOCTYPE> declaration to your HTML documents, so that the browser knows what type of document to expect.**

### 25.  How many times would `addEventListener('scroll   ', handleScroll);` run as the user looks at their News Feed? And what would be user experience if the `handleScroll` function takes 100ms to execute?

* Answer: Hundreds of times since the `handleScroll` method will be called over and over again. The user will experience very choppy scrolling through their News Feed.

* We could handle it a little better with setTimeout(), aka Javacript debouncing
```javascript
(function waitHandleScroll(){
  handleScroll();
  setTimeout(waitHandleScroll, 200);
})();
```

#### Javacript debouncing
Read: https://davidwalsh.name/javascript-debounce-function
```javascript
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
```

### 26. What is DTD?
Read: http://searchsoa.techtarget.com/definition/Document-Type-Definition
* A Document Type Definition (DTD) is a specific document defining and constraining definition or set of statements that follow the rules of the Standard Generalized Markup Language (SGML) or of the Extensible Markup Language (XML), a subset of SGML. A DTD is a specification that accompanies a document and identifies what the funny little codes (or markup) are that, in the case of a text document, separate paragraphs, identify topic headings, and so forth and how each is to be processed. By mailing a DTD with a document, any location that has a DTD "reader" (or "SGML compiler") will be able to process the document and display or print it as intended. This means that a single standard SGML compiler can serve many different kinds of documents that use a range of different markup codes and related meanings. The compiler looks at the DTD and then prints or displays the document accordingly.

### 27. How to find all images in DOM, include background images

To find just ```<image>``` tag on dom, we could use **document.images**, however to include also background image, we ndd to traverse through the DOM tree and look for css attribute "background-image"

### 28. How will you make my site accessible to all users?
Read: http://biz.webstandards.org/interview-guide/accessibility
* Tools: Voice Over, JAWS(window)
* We strive to ensure your website will be available to all users, regardless of how they are accessing your website or what disabilities they may have. Content is the essential aspect of your site that needs to be accessible and by using web standards we can ensure the widest possible audience can access your site. There may be some complex content, like video, that will need additional work to ensure it is made accessible (for example, using captioning).

### 29. What does window.getComputedStyle() do?
Read: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
* The Window.getComputedStyle() method gives the values of all the CSS properties of an element after applying the active stylesheets and resolving any basic computation those values may contain.
```
<style>
 #elem-container{
   position: absolute;
   left:     100px;
   top:      200px;
   height:   100px;
 }
</style>

<div id="elem-container">dummy</div>
<div id="output"></div>

<script>
  function getTheStyle(){
    var elem = document.getElementById("elem-container");
    var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue("height");
    document.getElementById("output").innerHTML = theCSSprop;
   }
  getTheStyle();
</script>
```
