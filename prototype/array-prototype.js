/**
 * Playing with Array.prototype object.
 * We use Array.prototype to define function that partially supported by brower
 */

//1. Array.indexOf() not working on older browser
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    };
}
