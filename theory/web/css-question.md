### 1. CSS Box Model
* Content
* Padding
* Border
* Margin

### 2. Explain what elements will match each of the following CSS selectors:
```
**div, p** - Selects all <div> elements and all <p> elements

**div p** - Selects all <p> elements that are anywhere inside a <div> element

**div > p** - Selects all <p> elements where the immediate parent is a <div> element

**div + p** - Selects all <p> elements that are placed immediately after a <div> element

**div ~ p** - Selects all <p> elements that are anywhere preceded by a <div> element
```

### 3. CSS selectors (Begin with, end with, contains)

```css
a[href^="https"] /** <a> tag with href begins with https **/

a[href$=".pdf"] /** <a> tag with href end with .pdf **/

a[href*="css"] /** <a> tag contains substring css **/

```

### 4. CSS automatic numbering
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
