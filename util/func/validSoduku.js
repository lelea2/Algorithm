for(var i = 0 ; i < 9 ; i++) {
  var cRow = [];
  if(!validRepeat(board[i])) {
    return false;
  }

  for(var j = 0 ; j < 9 ; j++) {
    cRow.push(board[j][i]);
    var boxId = 3*parseInt(i/3) +parseInt(j/3);
    boxs[boxId].push(board[i][j]);
  }

  if(!validRepeat(cRow)) {
    return false;
  }
}

for(var k = 0 ; k < 9 ; k++) {
  if(!validRepeat(boxs[k])) {
    return false;
  }
}
return true;

// Helper function to check for valid board
function validRepeat(array) {
  var map = [];
  for(var i = 0; i < 9 ; i++) {
    if(array[i] == ".") {
      continue;
    }
    if(map.indexOf(array[i]) == -1) {
      map.push(array[i]);
    } else {
      return false;
    }
  }
  return true;
}
