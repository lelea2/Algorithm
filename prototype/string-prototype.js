/**
 * Playing with String.prototype object.
 * We use String.prototype to define function that partially supported by brower
 */

//1. string.trim() not working on older browser
if (!String.prototype.trim) {
    (function() {
        // Make sure we trim BOM and NBSP
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
            return this.replace(rtrim, '');
        };
    })();
}