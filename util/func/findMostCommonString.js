//Note: don't do double loop
//Loop through array of string character and keep track of max value
//Note: also don't use array.map since it's relatively slow down the performace

function findMostCommon(arr) {
    var table = {},
        max = 0,
        word,
        i;
    for (var j = 0; j < arr.length; j++) {
        i = arr[j];
        if (table[i]) {
            table[i]++;
        } else {
            table[i] = 1;
        }
        if (table[i] > max) {
            word = i; //update repeating word
            max = table[i];
        }
    }

    return { word: word, count: max };
}
