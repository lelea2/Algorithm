// Flatten array and remove duplicate

function optimized() {
	const hash = {};
	function flatten(arr, result) { 
	  for (let i = 0; i < arr.length; i++) {
	    if (Array.isArray(arr[i])) {
	       flatten(arr[i], result);
	    } else {
	       if (!hash[arr[i]]) {
		 hash[arr[i]] = true;
		 result.push(arr[i]);
	       }
	    }
	  }
	  return result;
	}
	return flatten(arguments, []);
}