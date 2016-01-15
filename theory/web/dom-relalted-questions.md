Referenced from: http://thatjsdude.com/interview/dom.html

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
* nnerHTML could be slow while parsing a string. Browser has to deal with the string (invalid html)

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


### 15. Event delegation vs. direct binding

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

***Pro:**

* Easiest way to embed inline content from an external (to your host/domain) script.
* You can overwrite the entire content in a frame/iframe. I used to use this technique a lot for menu/navigation pieces before more modern Ajax techniques were widely available (1998-2002).

**Con:**

* does not work in XHTML
* It serializes the rendering engine to pause until said external script is loaded, which could take much longer than an internal script. ==> eventually blocking your whole page
* Script is placed within the content, which is considered bad-form.
