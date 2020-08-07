function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
        args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var myEfficientFn = debounce(function() {
  // All the taxing stuff you do
}, 250);

window.addEventListener('resize', myEfficientFn);

// ES6
const debounce = (fn, time) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
}
