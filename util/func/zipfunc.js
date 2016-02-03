/**
 * Javascript equivalent to python zip function
 * Eg:
 * Input:
 *  var array1 = [1, 2, 3];
    var array2 = ['a','b','c'];
    var array3 = [4, 5, 6];
 * Output:
 * [[1,'a',4], [2,'b',5], [3,'c',6]]
 */

//Referenced from: http://stackoverflow.com/questions/4856717/javascript-equivalent-of-pythons-zip-function
function zip() {
    var args = [].slice.call(arguments);
    //Find the longer array to map
    var longest = args.reduce(function(a,b) {
        return (a.length > b.length) ? a : b;
    }, []);

    return longest.map(function(_, i) {
        return args.map(function(array){
            return array[i]
        });
    });
}

// > zip([1,2],[11,22],[111,222,333])
// [[1,11,111],[2,22,222],[null,null,333]]

// > zip()
// []
