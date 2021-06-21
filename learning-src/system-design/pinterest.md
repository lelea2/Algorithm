#### Design and code a Pinterest style UI, where cards stack top/down and scroll infinitely

Naive approach is listen to scroll event with debounce.

```javscript
window.addEventListener('scroll', function(e) {
  // debounce scroll check
  // do something
})
```
Doing this however can be both noisy and lead to non-performant Javascript code due to the nature of the event listeners. When trying to optimize the front-end code, our objective should be to reduce the number of listeners whenever possible.

Use **Intersection Observer**
- asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
- The biggest improvement of this API over the use of an event listener is that the computation of both the target elements and the actual observing behavior of the intersecting elements are not run on the main JS thread, thus freeing us from potential noise and blocking nature of the language.

Example: based on `entry.boundingClientRect` and `entry.rootBound` from the callback to know if the target is above or below the viewport

```javascript
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.boundingClientRect.top < 0) {
      if (entry.isIntersecting) {
        // entered viewport at the top edge, hence scroll direction is up
      } else {
        // left viewport at the top edge, hence scroll direction is down
      }
    }
  },
  {
    root: rootElement,
  },
);

```

**Things to consider**
- keep the count of the visible DOM elementsto the minimum (but needs to be larger than viewport). So need to play with your card height in order to adjust, you might need to calculate window.outerHeight to handle dynamic count of initial items to render.
- Root element: element used to observe sentinels. (top vs. bottom sentinels). We use top and bottom anchors to detect changes, whether intersect with root element.
  For top sentinel, can simply return data in cache and display, for bottom, depending on sliding window, either need to make extra network call or just return data
- Recycle DOM node: DO NOT repaint entire browser to display new item. Extending the paddings of container to emulate the list being extended without user actually extending the dom, element will be lazy loaded on scroll
- Sliding windows: # of items between top and down sentinels. so by having this, we could display only a fixed number of data while keep the rest away from actual page render.

```javascript
const initIntersectionObserver = () => {
  const options = {
  	/* root: document.querySelector(".cat-list") */
  }

  const callback = entries => {
    entries.forEach(entry => {
      if (entry.target.id === 'cat-tile-0') {
        topSentCallback(entry);
      } else if (entry.target.id === `cat-tile-${listSize - 1}`) {
        botSentCallback(entry);
      }
    });
  }

  var observer = new IntersectionObserver(callback, options);
  observer.observe(document.querySelector("#cat-tile-0"));
  observer.observe(document.querySelector(`#cat-tile-${listSize - 1}`));
}

// dom recycle (only changing attribute of your html)
const recycleDOM = firstIndex => {
	for (let i = 0; i < listSize; i++) {
		const tile = document.querySelector("#cat-tile-" + i);
		tile.firstElementChild.innerText = DB[i + firstIndex].title;
		tile.lastChild.setAttribute("src", DB[i + firstIndex].imgSrc);
  }
}

// adjust padding:  
// Since we recycle our DOM nodes, the actual content is always stuck at a fixed number of elements. 
// By extending the paddings on either direction, we can emulate the list extending larger or becoming smaller as we scroll up and down, by the same amount of the items’ heights being removed
```

Basic steps to making this image component lazy loaded:

1) Initially render no image source.

```javascript
render() {
  return <img />;
}
```

2) Set up detection for when image intersects with viewport.

```javascript
componentDidMount() {
  this.observer = new IntersectionObserver(() => {
    // Step 3
  },
  {
    root: document.querySelector(".container")
  });
  this.observer.observe(this.element);
}
....
render() {
  return <img ref={el => this.element = el} />;
}
```

3) Render image source when we detect that image will be in view.

```javascript
this.observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        this.element.src = this.props.src;
        this.observer = this.observer.disconnect();
      }
    });
  },
  {
    root: document.querySelector(".container")
  }
);
```

**Considered issues**
1) user is unable to scroll down and see the image until it has downloaded? 
- Grow or shrink detection boundaries of the root element with `rootMargin`.
2) Jumpy when image load
- Image without src but had a fixed height