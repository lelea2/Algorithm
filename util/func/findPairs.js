let nums = [1,5,1,3,4,5]
let k = 2

var findPairs = function(nums, k) {
  let counter = 0;
  let hash = {};

  nums.forEach(n => {
    hash[n] ? hash[n] += 1 : hash[n] = 1
  });


  let numsUnique = new Set(nums)

  numsUnique.forEach(n => {
    let key = n + k;
    if(k === 0 && hash[key] > 1) {
      counter++;
    } else if(k > 0 && hash[key] > 0)
      counter++;
  })

  return counter;

}

findPairs(nums, k);
