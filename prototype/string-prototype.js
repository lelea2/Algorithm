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


String.prototype.repeatify = String.prototype.repeatify || function(times) {
   var str = '';

   for (var i = 0; i < times; i++) {
      str += this;
   }

   return str;
};

//Referenced from: http://blog.sourcing.io/interview-questions
//hello world ==> 'h e l l o  w o r l d'
String.prototype.spacify = function(){
    return this.split('').join(' ');
};
