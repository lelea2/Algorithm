function mergeSort(items) {
	if (items.length < 2) {
		return items;
	}

	var middle = Math.floor(items.length / 2);
	var left   = items.slice(0, middle);
	var right  = items.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	var result = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return result.concat(left).concat(right);
}

var nums = [6,10,1,9,4,8,2,7,3,5];
print(nums);
print();
nums = mergeSort(nums);
print();
print(nums);
