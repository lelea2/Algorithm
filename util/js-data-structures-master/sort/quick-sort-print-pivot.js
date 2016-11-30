function qSort(arr)
{
    if (arr.length == 0) {
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
	print("pivot: " + pivot + " current element: " + arr[i]);       
        if (arr[i] < pivot) {
	   print("moving: " + arr[i] + " to the left");       
           left.push(arr[i]);
        } else {
	   print("moving: " + arr[i] + " to the right");       
           right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}
var a = [];
for (var i = 0; i < 10; ++i) {
   a[i] = Math.floor((Math.random()*100)+1); 
}
print(a);
print();
print(qSort(a));
