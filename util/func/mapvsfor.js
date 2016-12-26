/**
 * Helper test to measure for vs. forEach vs. map performance
 */

// Expected results:
// for: 306.312ms ==> best
// forEach: 316.153ms
// map: 426.245ms ==> worst

var vv = 0
var arr = [];
for (var i = 0; i < 10000; i++) arr[i] = i;

var numberOfRuns = 100;

function runTest(name, f) {
    var totalTime = 0;
    console.time(name);

    for (var r = 0; r < numberOfRuns; r++) {
        f();
    }

    return console.timeEnd(name);
}

function testFunction(v) {
    vv = v + (+new Date)
}

var forTime = runTest('for', function() {
    for (var j = 0; j < arr.length; j++) {
        testFunction(arr[j]);
    }
});

var forEachTime = runTest('forEach', function() {
    arr.forEach(testFunction);
});

var map = runTest('map', function() {
    arr.map(function(value) {
       testFunction(value);
    });
});

