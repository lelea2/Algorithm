// https://codepen.io/airbnb/pen/ExZLNaJ

const button = document.getElementById('start');
const inners = document.querySelectorAll('.inner');

function createAnimation(i) {
  let j = i;
  let elem = inners[j];
  const initWidth = getValue(elem);
  const speed = 20;
  let id = null;
  function render() {
    // console.log(elem)
    const width = getValue(elem) + speed;
    if (width <= 500) {
      elem.style.width = width + 'px';
      id = window.requestAnimationFrame(render);
    } else {
      j++;
      elem = inners[j];
      id = window.requestAnimationFrame(render);
    }
  }
  
  return {
    pause: () => {
      window.cancelAnimationFrame(id);
    },
    start: () => {
      window.requestAnimationFrame(render);
    },
    reset: () => {
      window.cancelAnimationFrame(id);
      for (let k = 0; k < inners.length; k++) {
        inners[k].style.width = 0;
      }
      j = 0;
      elem = inners[0];
    }
  }
}

function getValue(elem) {
  console.log('elem', elem)
  return Number(window.getComputedStyle(elem, null).getPropertyValue("width").replaceAll('px', ''))
}

const {
  start,
  pause,
  reset,
} = createAnimation(0);

document.getElementById('start').addEventListener('click', () => {
  start();
});

document.getElementById('pause').addEventListener('click', () => {
  pause();
});

document.getElementById('reset').addEventListener('click', () => {
  reset();
});