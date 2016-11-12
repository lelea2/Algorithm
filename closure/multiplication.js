/**
 * Write a mul function which will produce the following outputs when invoked: 
 * javascript console.log(mul(2)(3)(4)); output : 24 console.log(mul(4)(3)(4)); // output : 48 Question 5:
 */

//Using method toString in JS to do this.
//Closure concept
function mul(a) {
  var result = a;
  function f(b) {
    result *= b;
    return f;
  }
  f.toString = function() {
    return result;
  };
  return f;
}
