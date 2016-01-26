//Given an input array and another array that describes a new   index for each element,
//mutate the input array so that each element ends up in their new index
//Discuss the runtime of the algorithm and how you can be sure there won't be ///any infinite loops.

//Runtime O(n)

function mutate(input, specArr) {
    var visited = [];
    specArr.forEach(function(newIdx, i) {
        var tmp;
        visited.push(newIdx);
        if (visited.indexOf(i) > 0) {
            tmp = input[i];
            input[i] = input[newIdx];
            input[newIdx] = tmp;
        }
    });
}

var arr = ["a", "b", "c", "d", "e", "f"];
var indices = [2, 3, 4, 0, 5, 1];
arr = indices.map(function(item, index) {
    return arr[indices.indexOf(index)];
});
