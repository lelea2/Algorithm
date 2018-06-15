/**
 * How would you create all permutation of a string?
 */

// HEAP solution -- O(nlg(n))
//Idea:
// We will convert the string to an array.
// from the array we will pick one character and then permute rest of it. After getting the permutation of the rest of the characters, we will concatenate each of them with the character we have picked.
//Test your capability on recursive logic

// Permutation repeat
function permutations(str) {
  var arr = str.split(''), // Split into array 
      len = arr.length,
      perms = []; //final permutation array
  if (len <= 1) { //If array length === 0 or 1, permutation is just the array
    return arr;
  }
  for (var i=0; i<len; i++) {
    let rest = Object.create(arr);
    let picked = rest.splice(i, 1); // pick 1 item in array
    let restPerms = permutations(rest.join('')); //Recursive to create permutations
    for (var j=0; j < restPerms.length; j++) {
      let next = picked.concat(restPerms[j]); //concat for the permutation array
      perms.push(next.join('')); //push to final permutation array
    }
  }
  return perms;
}
//Test case:
//permutations("abdc")
//Result:
// ["abdc", "abcd", "adbc", "adcb", "acbd", "acdb", "badc", "bacd", "bdac", "bdca", "bcad", "bcda", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba"]

/***********************************************************************************************/
/**
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters.
 * For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.
 */
/***********************************************************************************************/
function permAlone(str) {

  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/g;

  // Split the string into an array of characters.
  var arr = str.split('');
  var permutations = [];
  var tmp;

  // FUnction to swap variables' content.
  function swap(index1, index2) {
    tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  }

  //Generate arrays of permutations using the algorithm.
  function generate(int) {
    if (int === 1) {
      // Make sure to join the characters as we create  the permutation arrays
      permutations.push(arr.join(''));
    } else {
      for (var i = 0; i != int; ++i) {
        generate(int - 1);
        swap(int % 2 ? 0 : i, int - 1);
      }
    }
  }

  generate(arr.length);

  // Filter the array of repeated permutations.
  var filtered = permutations.filter((string) => {
    return !string.match(regex);
  });

  //Return how many have no repetitions.
  return filtered.length;
}