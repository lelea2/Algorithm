function sortObject(object) {
  let sortedObj = {};
  const keys = Object.keys(object);
  // Sort keys
  keys.sort((key1, key2) => {
    key1 = key1.toLowerCase();
    key2 = key2.toLowerCase();
    if (key1 < key2) {
      return -1;
    } else if(key1 > key2) {
      return 1;
    }
    return 0;
  });

  for(let index in keys) {
    let key = keys[index];
    // Solving for nested object
    if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
      sortedObj[key] = sortObject(object[key]);
    } else {
      sortedObj[key] = object[key];
    }
  }

  return sortedObj;
}