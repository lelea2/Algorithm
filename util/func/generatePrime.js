//Generate prime number up to n

//Prime number is number divisible by 1 and by itself
function printPrime(n) {
    var arr = [2, 3],
        counter = 0; //counter is number of digit that given number can be devided to
    for (var i = 5; i <=n; i++) {
        counter = 0;
        for (var j = i; j >=1; j++) {
            if (i % j) {
                counter++;
            }
        }
        if (counter === 2) {
            arr.push(i);
        }
    }
    return arr;
}

//Apply array.every method
function printPrime2(n) {
    var array = [2, 3];
    for (var i = 5; i <= n; i += 2) {
        if (array.every(function(p) { return i % p; })) {
            array.push(i);
        }
    }
    return array;
}
