// http://perfectionkills.com/javascript-quiz-es6/

(function(x, f = () => x) {
  var x;
  var y = x;
  x = 2;
  return [x, y, f()];
})(1)
// [2, 1 , 1]

(function() {
  return [
    (() => this.x).bind({ x: 'inner' })(),
    (() => this.x)()
  ]
}).call({ x: 'outer' });

// ['outer', 'outer']

(function() {
  let f = this ? class g { } : class h { };
  return [
    typeof f,
    typeof h
  ];
})();

// ['function', 'undefined']

typeof (new (class F extends (String, Array) { })).substring
// undefined

[...[...'...']].length
// 3

typeof `${{Object}}`.prototype
// undefined

(function() {
  if (false) {
    let f = { g() => 1 };
  }
  return typeof f;
})()



