/**
 * How would you create all permutation of a string?
 */

//Idea:
// We will convert the string to an array.
// from the array we will pick one character and then permute rest of it. After getting the permutation of the rest of the characters, we will concatenate each of them with the character we have picked.
//Test your capability on recursive logic
//
function permutations(str) {
    var arr = str.split(''),
        len = arr.length,
        perms = [], //final permutation array
        rest,
        picked,
        restPerms,
        next;
    if (len <= 1) { //If array length === 0 or 1, permutation is just the array
        return arr;
    }
    for (var i=0; i<len; i++) {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join('')); //Recursive to create permutations
        for (var j=0; j< restPerms.length; j++) {
            next = picked.concat(restPerms[j]); //concat for the permutation array
            perms.push(next.join('')); //push to final permutation array
        }
    }
    return perms;
}
//Test case:
//permutations("abdc")
//Result:
// ["abdc", "abcd", "adbc", "adcb", "acbd", "acdb", "badc", "bacd", "bdac", "bdca", "bcad", "bcda", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba"]

