// Would be similar to nearest common ancestor

// regions = [["Earth","North America","South America"],
// ["North America","United States","Canada"],
// ["United States","New York","Boston"],
// ["Canada","Ontario","Quebec"],
// ["South America","Brazil"]],
// region1 = "Quebec",
// region2 = "New York"
// >>>> Output: "North America"

const findSmallestRegion = function(regions, region1, region2) {
	let parent = new Map();
	for (let region of regions) {
    for (let i = 1; i < region.length; i++) {
		  parent.set(region[i], region[0]);
	 }
	}
	let n1 = region1;
  let n2 = region2;

	while (n1 != n2) {
	  n1 = parent.has(n1) ? parent.get(n1) : region2;
    n2 = parent.has(n2) ? parent.get(n2) : region1;
	}
	return n1;
};

console.log(findSmallestRegion(
  [
    ["Earth","North America","South America"],
    ["North America","United States","Canada"],
    ["United States","New York","Boston"],
    ["Canada","Ontario","Quebec"],
    ["South America","Brazil"]
  ],
  "Quebec",
  "New York"
));

