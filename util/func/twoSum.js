// From: https://wsvincent.com/javascript-two-sum-find-all-pairs-match-target-value/

const twoSum = (arr, target) => {
  let map = {};
  const results = [];
  for (let i=0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      results.push([map[arr[i]], arr[i]])
    } else {
      map[target - arr[i]] = arr[i];
    }
  }
  return results;
}
