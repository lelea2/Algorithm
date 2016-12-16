/**
 * Some prototype for JS animation
 */

//Question: how to do polling in JS
//Answer: focus  on setInterval() and clearInterval() functions

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
