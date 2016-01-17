/*
 *Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.
 * The arguments to the function should be:
 * a DOM element
 * a callback function (that takes a DOM element as its argument)
 */

//Idea: testing JS recursive call
//Traverse tree DFS (Depth first search)
function Traverse(element, callback) {
   callback(element);
   var list = element.children;
   //If element has children, continuously traverse each children node
   for (var i = 0; i < list.length; i++) {
       Traverse(list[i], callback);  // recursive call
   }
}
