function invert(tree) {
  if (!tree instanceof Array || tree.length === 1) {
    return tree;
  }
  var ret = [];
  var inverted = tree.reverse();

  for(var cur in inverted) {
    if (!inverted.hasOwnProperty(cur)) {
      continue;
    }
    ret.push(inverted[cur] instanceof Array ? invert(inverted[cur]) : inverted[cur]);
  }
  
  return ret;
}

var tree = [[['a'], 'b', ['c', 'd', null]], 'f', [['g'], 'h', ['i']]];

console.log(invert(tree));