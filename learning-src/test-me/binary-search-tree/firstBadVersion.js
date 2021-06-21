// given 500 revisions of programs, write a program that will find and return the FIRST bad revision given a isBad(revision i) function.

// Problem: this is purely binary search with O(logn) run time
function isBad( version ) { 
	return version === 0 
}

function firstBadVersion( versions ) {
  if( typeof versions === 'undefined' || versions.length === 0 ) {
    return -1;
  }
  
  let left = 0;
  let right = versions.length-1;
  while (left < right ) {
    let mid = left + Math.floor((right-left)/2)
    if(isBad(versions[mid])) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return versions[left]===0 ? left : -1;
}

// Testing		  0 1 2 3 4 5 6  should return index: 4
let versions = [1,1,1,1,0,0,0]
console.log(firstBadVersion(versions))  // 4

versions = [1,1,1,1,1,0]
console.log(firstBadVersion(versions))  // 5

versions = [0, 0, 0]
console.log(firstBadVersion(versions))  // 0

versions = [0]
console.log(firstBadVersion(versions))  // 0

versions = [1]
console.log(firstBadVersion(versions))  // -1

versions = [1, 1, 1]
console.log(firstBadVersion(versions))  // -1

versions = []
console.log(firstBadVersion(versions))  // -1

console.log(firstBadVersion())  		// -1