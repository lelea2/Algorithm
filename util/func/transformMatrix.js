//Questions from: http://stackoverflow.com/questions/31074746/javascript-parseint-the-computed-transform-matrix-values-returns-nan

function matrix3d(s) {
    //var s = window.getComputedStyle(element);
    var mattrixArray = s.replace(/3d|matrix|\(|\)|\s|/g,'').split(','),
        l = mattrixArray.length;
    for (var i=0; i<l; i++) {
        mattrixArray[i] = parseFloat(mattrixArray[i],10);
    }
    console.log(mattrixArray);
}


matrix3d(1.5, -7, 2, 0, 7, 1.5, 0, 0, -3, 1, 1, 0, 100, 0, 0, 1)
