/**
 * Some prototype for JS animation
 */

//Question: how to do polling in JS
//Answer: focus  on setInterval() and clearInterval() functions

// https://javascript.info/js-animation
// please use animate_requestFrame for better answer

function moveLeft(elem, distance) { //distance is maximum distance to go
  var left = 0;

  function frame() {
    left++; //move 1 pixel each time
    elem.style.left = left + 'px';
    if (left === distance) {
      clearInterval(timeId);
    }
  }

  var timeId = setInterval(frame, 10); // draw every 10ms
}


// Better: using requestAnimationFrame
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
