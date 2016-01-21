
//Pow function in javascript
//
function pow(a, b) {
    if (b === 0) {
        return 0;
    }
    if (b === 1) {
        return 1;
    }
    var c = pow(a/2);
    if (b % 2 === 0) {
        return c * c;
    } else {
        return c * c * a;
    }
}
