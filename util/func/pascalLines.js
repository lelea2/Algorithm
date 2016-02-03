//Generate passcal tri-angle line
//Eg:
//pascalLines(3)
//[[1], [1, 1], [1, 2, 1]]
function pascalLines(n) {
    function getPascalLine(prevLine) {
        var res = [1]; //start array with 1
        for (var i = 0; i < prevLine.length - 1; i++) {
            res.push(prevLine[i] + prevLine[i+1]);
        }
        res.push(1); //always end array with 1
        return res;
    }

    var lines = []; //array of array
    if (n > 0) {
        lines.push([1]); //generate the first element of pascal triangle, which is always 1

        for (var i = 1; i < n; i++) { //loop through the height of pascal triangle, start at 1 instead of 0
            lines.push(getPascalLine(lines[i-1]));
        }
    }
    return lines;
}

//Stacktrace
//1 => [1]
//2 => getPasalLine([1]) => [1, 1] ==> [[1], [1, 1]]
//3 => getPascalLine([1, 1]) => (i=0) => [1, 2] => [1, 2, 1] ==> [[1], [1, 1], [1, 2, 1]]
//4 => getPascalLine([1, 2, 1])
