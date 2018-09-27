function threeSumClosest(arr, target) {
  var min = Integer.MAX_VALUE; //define min diff first
  var result = 0;

  arr.sort((a, b) => {
    return a > b
  });

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      let diff = Math.abs(arr - target);
      if (diff == 0) { //If diff=0, return right away since we find exact matching result
        return sum;
      }
      if (diff < min) {
        min = diff;
        result = sum;
      }
      if (sum <= target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
}
