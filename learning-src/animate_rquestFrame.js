// https://javascript.info/js-animation

function animate(element, duration, distance) {
  let left = 0;
  let start = performance.now();
  let originalPosition;

  function draw(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) {
      timeFraction = 1;
    }
    left = timeFraction * distance;
    element.style.left = left + 'px';
    if (left === distance) {
       cancelAnimationFrame(id);
    } else {
       id = requestAnimationFrame(draw)
    }
  }
  if (!id) {
    originalPosition = element.style.left;
  }
  id = requestAnimationFrame(draw);
  return function() {
     if (id) {
       cancelAnimationFrame(id);
       element.style.left = originalPosition;
     }
  };
}
