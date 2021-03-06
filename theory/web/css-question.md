#### 1. CSS Box Model
* Content
* Padding
* Border
* Margin

#### 2. Explain what elements will match each of the following CSS selectors:
```
**div, p** - Selects all <div> elements and all <p> elements

**div p** - Selects all <p> elements that are anywhere inside a <div> element

**div > p** - Selects all <p> elements where the immediate parent is a <div> element

**div + p** - Selects all <p> elements that are placed immediately after a <div> element

**div ~ p** - Selects all <p> elements that are anywhere preceded by a <div> element
```

#### 3. CSS selectors (Begin with, end with, contains)

```css
a[href^="https"] /** <a> tag with href begins with https **/

a[href$=".pdf"] /** <a> tag with href end with .pdf **/

a[href*="css"] /** <a> tag contains substring css **/

```

#### 4. CSS automatic numbering
* Technique: using **counter-** property
Eg:
Markup
```html
<div id="page">
  <h1>Heading Title</h1>
  <h2>Subheading Title</h2>
  <h2>Subheading Title</h2>
  <h1>Heading Title</h1>
  <h2>Subheading Title</h2>
  <h1>Heading Title</h1>
</div>
```
CSS
```css
#page {
  counter-reset: heading;
}

h1:before {
  content: counter(heading)") ";
  counter-increment: heading;
}

h1 {
  counter-reset: subheading;
}

h2:before {
  content: counter(heading)"." counter(subheading)") ";
  counter-increment: subheading;
}
```

#### 5. What is the difference between static, fixed, relative and absolute?

Read: https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/

**static**
* default for every single page element

**Relative**
* "relative to itself". If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right), it will not effect on it's positioning at all, it will be exactly as it would be if you left it as position: static; But if you DO give it some other positioning attribute, say, top: 10px;, it will shift it's position 10 pixels DOWN from where it would NORMALLY be.

**Absolute**
* relative to the next parent element with relative (or absolute) positioning. If there is no such parent, it will default all the way back up to the <html> element itself meaning it will be placed relatively to the page itself.

**Fixed**
* positioned relative to the viewport, or the browser window itself. The viewport doesn't change when the window is scrolled, so a fixed positioned element will stay right where it is when the page is scrolled

#### 6. Display box inline, using "display: table" or "display: flex"

```
<div class="container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>

```

```css
//CSS for display: table
.container {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.box {
  vertical-align: middle;
  display: table-cell;
  height: 100%;
}
```

```js
//CSS for display: flex
.container {
  display: flex;
}

.box {
  flex: 1;
}

```

#### 7. Quirks mode and strict mode

* Quirks mode and strict mode are the two ’modes’ modern browsers can use to interpret your CSS

Read: http://www.quirksmode.org/css/quirksmode.html


#### 8. How to center an element in CSS

* Read: https://www.w3.org/Style/Examples/007/center.en.html

```html
<div class="container">
  <p>This paragraph…</p>
</div>
```

```css
/** Using position and css transform */
div.container {
  height: 10em;
  position: relative; /* 1 */
}
div.container p {
  margin: 0;
  position: absolute;               /* 2 */
  top: 50%;                         /* 3 */
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) }
}
```

```css
div.container {
  height: 10em;
  display: flex;
  align-items: center; //align vertically
  justify-content: center; //align horizonally
}
div.container p {
  margin: 0 auto;
}
```

#### 9. How to deal with Retina image
https://css-tricks.com/snippets/css/retina-display-media-query/

```css
@media
(-webkit-min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {
    /* Retina-specific stuff here */
}
```

#### 10. HTML5 input to manage number step

```html
<div class="container">
  <label for="without-step">Without Step Attribute</label>
  <input type="number" pattern="[0-9]+([\,|\.][0-9]+)?" name="my-num"
  title="The number input must start with a number and use either comma or a dot as a decimal character."
  id="without-step"/>
  <div id="test1"></div>
  <label for="with-step">With a step attribute set to 0.01</label>
  <input type="number" pattern="[0-9]+([\,|\.][0-9]+)?" name="my-num"
    step="0.01"
    title="The number input must start with a number and use either comma or a dot as a decimal character." id="with-step"/>
  <div id="test2"></div>
</div>
```

#### 11.Box stacking question (Walmart)

```
<div class="container">
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
</div>

.container {
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
.box1 {
    top: 0;
    left: 0;
    position: fixed;
    backgroud-color: absolute;
    z-index:2;
    width: 50px;
    height: 50px;
    float: left;
}

.box2 {
    background-color: red;
    width: 100px;
    height: 100px;
    float: left;
}

.box3 {
    background-color: blue;
    width: 200px;
    height: 200px;
    float: left;
}
```
