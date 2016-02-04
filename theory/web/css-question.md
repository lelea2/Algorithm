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
* "relative to itself". If you set position: relative; on an element but no other positioning attributes (top, left, bottom or right), it will no effect on it's positioning at all, it will be exactly as it would be if you left it as position: static; But if you DO give it some other positioning attribute, say, top: 10px;, it will shift it's position 10 pixels DOWN from where it would NORMALLY be.

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
