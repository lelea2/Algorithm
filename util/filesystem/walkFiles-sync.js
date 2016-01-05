/**
 * Function walking file directory synchronously
 */

var fs = require('fs');

/**
 * Walk file function
 * @param  {String}   directory path name
 * @param  {Function} cb callback function to be executed on given files
 * @return null
 */
function walkFiles(dir, cb) {
    var files = fs.readdirSync(dir),
        name = '';
    for (var i in files) {
        name = dir + '/' + files[i];
        //If file is directory, recursively walk
        if (fs.statSync(name).isDirectory()) {
            walkFiles(name, callback);
        } else { //Excute callback function for current file
            callback(name, files[i]);
        }
    }
}

module.exports = walkFile;
