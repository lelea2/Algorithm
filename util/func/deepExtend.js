/**
 * Function handle for deep merge object
 */

//NOTE: isArray() support IE >= 9 version only
//Solution will be in recursive mode

function deepmerge(target, src) {
  var array = Array.isArray(src); //checking if sort is array
  var dst = array ? [] : {}; //assign destination variable
  if (array) { // if target is array
    target = target || [];
    dst = dst.concat(target);
    src.forEach((e, i) => {
      if (typeof dst[i] === 'undefined') {
        dst[i] = e;
      } else if (typeof e === 'object') {
        dst[i] = deepmerge(target[i], e);
      } else {
        if (target.indexOf(e) === -1) {
          dst.push(e);
        }
      }
    });
  } else { // not array
    if (target && typeof target === 'object') {
      Object.keys(target).forEach((key) => {
        dst[key] = target[key];
      });
    }
    Object.keys(src).forEach((key) => {
      if (typeof src[key] !== 'object' || !src[key]) { // object and not null
        dst[key] = src[key];
      } else {
        if (!target[key]) { //not define sort key yet
          dst[key] = src[key];
        } else {
          dst[key] = deepmerge(target[key], src[key]);
        }
      }
    });
  }
  return dst;
}
