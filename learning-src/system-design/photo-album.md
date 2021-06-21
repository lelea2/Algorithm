#### How would you implement a photos album?

Lightweight way to create horizontal masonry effect for a set of arbitrarily-sized photos:
- use `flexbox` and `object-fit`
- constraint: images need to haave the same height (on both landscape and portrait mode)

- Using <picture> to support responsive image https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)">
  <img src="mdn-logo-narrow.png" alt="MDN">
</picture>
```

##### Approach1
* Don't include a src attribute in images you wish to load lazily.
Instead specify their src safely in a data attribute
* Base on `IntersectionObserver` to decide when to load image
* DRAW_BACK: empty elements on our page which might give a bit of a visual jolt when they load in

```html
<img data-src="lighthouse.jpg" alt="A snazzy lighthouse" class="lazy" />
```

```javascript
// Set up an intersection observer with some options
var observer = new IntersectionObserver(lazyLoad, {

  // where in relation to the edge of the viewport, we are observing
  rootMargin: "100px",

  // how much of the element needs to have intersected 
  // in order to fire our loading function
  threshold: 1.0

});

function lazyLoad(elements) {
  elements.forEach(image => {
    if (image.intersectionRatio > 0) {

      // set the src attribute to trigger a load
      image.src = image.dataset.src;

      // stop observing this element. Our work here is done!
      observer.unobserve(item.target);
    };
  });
};

// Tell our observer to observe all img elements with a "lazy" class
var lazyImages = document.querySelectorAll('img.lazy');
lazyImages.forEach(img => {
  observer.observe(img);
});
```

##### Approach2
Image different loading behavior. Browsers without this support would be able to load the image as normal

`<img loading="lazy" />`: Tell the browser to load this image lazily when needed.

`<img loading="eager" />`: Tell the browser to load this image immediately.

`<img loading="auto" />`: Let the browser make its own assessment.

```javascript
// If the browser supports lazy loading, we can safely assign the src
// attributes without instantly triggering an eager image load.
if ("loading" in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll("img.lazy");
  lazyImages.forEach(img => {
    img.src = img.dataset.src;
  });
}
else {
  // Use our own lazyLoading with Intersection Observers and all that jazz
}
```

We might need to get image size before image load

```javascript
var console = document.getElementById('console');

var log = function () {
    console.innerHTML = Array.prototype.join.call(arguments, '');
};


var imageSrc = 'http://environmentalgeography.files.wordpress.com/2010/02/nature_by_abhishekultimatum.jpg?q=' + Math.random();

var img = document.createElement('img');
img.id = "testImage";

var loaded = false, wait;

img.addEventListener('load', function () { loaded = true; }, true);

wait = setInterval(function () {
  loaded ? clearInterval(wait) : log(img.width, 'x', img.height, '<br>', img.naturalWidth, 'x', img.naturalHeight, '<br>');
}, 0);

document.body.appendChild(img);

img.setAttribute('src', imageSrc);

```