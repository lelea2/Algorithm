const packages = {
  "A": ["B", "C", "D"],
  "B": ["E", "F"],
  "C": ["E", "D"],
  "E": ["K"]
};

function getDependencies(_package, currDep=[], parentDep=[]) {
  let dependencies = packages[_package] || []; // package does not have dependencies
  let circular = false;
//   console.log(currDep, parentDep);
  for (let i = 0; i < dependencies.length; i++) {
    const item = dependencies[i];
    if (parentDep.indexOf(item) > -1) {
      console.log('>>>>> Detect circular');
      circular = true;
      return;
    } else {
      if (item && currDep.indexOf(item) < 0) { // not exists yet
        currDep.push(item);
      }
      if (parentDep.indexOf(_package) < 0) {
        parentDep.push(_package);
      }
      getDependencies(item, currDep, parentDep);
    }
  }
  return (circular) ? false : currDep;

}

console.log(getDependencies("A"));

// [ 'B', 'E', 'K', 'F', 'C', 'D' ]
