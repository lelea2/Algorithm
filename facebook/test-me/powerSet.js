// O(n*2^n) run time, O(n*2^n)space time
function powerset(array) {
  const subsets = [[]];
  for (const elem of array) {
    const length = subsets.length;
    for (let i = 0; i < length; i++){
      const currSet = subsets[i];
      subsets.push(currSet.concat(elem));
    }
  }
  return subsets;
}

// Do not edit the line below.
exports.powerset = powerset;
