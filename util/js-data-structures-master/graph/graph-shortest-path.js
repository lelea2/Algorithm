load("graph.js");
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);

g.showGraph();
var vertex = 4;

g.bfs(0);


var paths = g.pathTo(vertex);

var result = ""
//
// if (!paths) {
//   print("no ")
// }
while (paths.length > 0) {
   if (paths.length > 1) {
      result += paths.pop() + '-';
   }
   else {
      result += paths.pop();
   }
}
print(result);
