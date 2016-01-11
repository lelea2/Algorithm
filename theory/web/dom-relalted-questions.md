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

7. If you need to implement getElementByAttribute, how would you implement it?

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

You CANNOT extend getElementsByAttribute to DOM, the explanation could be found in:
http://perfectionkills.com/whats-wrong-with-extending-the-dom/

8. Add class with no jQuery

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

9. How could I verify whether one element is child of another?

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

10. innerHTML vs appendChild



