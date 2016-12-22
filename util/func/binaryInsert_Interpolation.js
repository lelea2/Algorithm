//Interpolation search
//Run time (O(log(logn)))

function interpolationSearch(value, array, from, to) {
    if(array[from] === value) {
        return from;
    } else if((from === to) || (array[from] ===  array[to])) {
        return -1; //not found
    }
    //probable position of the searched value

    int index = from + ((to - from)/(array[to] - array[from])) * (value - array[from]);

    if(array[index] === value) {
        return index;//found
    } else if(array[index] < value) { //continue in the right part of the array
        return interpolationSearch(value, array, index + 1, to);
    } else { //continue in the left part of the array
        return interpolationSearch(value, array, from, index - 1);
    }
}
