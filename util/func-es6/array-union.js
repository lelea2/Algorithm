let concat = require('./array-concat');
let { removeDuplicates } = require('./array-remove-duplicate');

let union = (...arrs) => removeDuplicates(concat(...arrs));

module.exports = union;
