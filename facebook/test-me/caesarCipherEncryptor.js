// O(n) time, O(n) space
function caesarCipherEncryptor(string, key) {
  const newLetters = [];
  const newKey = key % 26;
  const alphabet = 'abcdefghijklmnopurstuvwxyz'.split('');
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, newKey, alphabet));
  }
  return newLetters.join('');
}

function getNewLetter(letter, key, alphabet) {
  const newCode = alphabet.indexOf(letter) + key;
  return newCode <= 25 ? alphabet[newCode] : alphabet[-1 + (newCode % 25)];
}
// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;


// string: "xyz"
// key: 2
// output: "zab"
