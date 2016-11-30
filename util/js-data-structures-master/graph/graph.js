function Graph(v) {
   this.vertices = v;
   this.vertexList = [];
   this.edges = 0;
   this.adj = [];
   for (var i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
      this.adj[i].push("");
   }
   this.addEdge = addEdge;
   this.showGraph = showGraph;
   this.showGraphDetail = showGraphDetail;
   this.dfs = dfs;
   this.marked = [];
   for (var i = 0; i < this.vertices; ++i) {
      this.marked[i] = false;
   }
   this.bfs = bfs;
   this.edgeTo = [];
   this.hasPathTo = hasPathTo;
   this.pathTo = pathTo;
   this.topSortHelper = topSortHelper;
   this.topSort = topSort;

}

function topSort() {
   var stack = [];
   var visited = [];
   for (var i = 0; i < this.vertices; i++) {
      visited[i] = false;
   }
   for (var i = 0; i < this.vertices; i++) {
      if (visited[i] == false) {
         this.topSortHelper(i, visited, stack);
      }
   }
   for (var i = 0; i < stack.length; i++) {
      var vertexIdx = stack[i];
      if (vertexIdx != undefined && vertexIdx != false) {
         print(vertexIdx+": "+this.vertexList[vertexIdx]);
      }
   }
}

// function printVertextList(list){
//   for (var idx in list) {
//     var val = list[idx];
//
//   }
// }

function topSortHelper(v, visited, stack) {
   visited[v] = true;
   for each (var w in this.adj[v]) {
      if (!visited[w]) {
         this.topSortHelper(visited[w], visited, stack);
      }
   }
   stack.push(v);
}

function addEdge(v,w) {
   this.adj[v].push(w);
   this.adj[w].push(v);
   this.edges++;
}

/*function showGraph() {
   for (var i = 0; i < this.vertices; ++i) {
      putstr(i + " -> ");
      for (var j = 0; j < this.vertices; ++j) {
         if (this.adj[i][j] != undefined)
            putstr(this.adj[i][j] + ' ');
      }
      print();
   }
}*/

// a new function to display symbolic names instead of numbers

function showGraph() {
   var result = ""
   for (var i = 0; i < this.vertices; ++i) {
      result += i + " -> ";
      for (var j = 0; j < this.vertices; ++j) {
         if (this.adj[i][j] != undefined)
            result += this.adj[i][j] + ' ';
      }
      result += "\n";
   }
   print(result);
}

function showGraphDetail() {
   var visited = [];
   for (var i = 0; i < this.vertices; ++i) {
      var result = ""
      result += '['+i+ ']' + this.vertexList[i] + " -> ";
      visited.push(this.vertexList[i]);
      for (var j = 0; j < this.vertices; ++j) {
         if (this.adj[i][j] != undefined) {
            if (visited.indexOf(this.vertexList[j]) < 0) {
               result += '['+j+ ']' + this.vertexList[j] + ' ';
            }
         }
      }
      print(result);
      visited.pop();
   }
}

function dfs(v) {
   this.marked[v] = true;
   if (this.adj[v] != undefined) {
      print("Visited vertex: " + v);
   }
   for each (var w in this.adj[v]) {
      if (!this.marked[w]) {
         this.dfs(w);
      }
   }
}

function bfs(s) {
   var queue = [];
   this.marked[s] = true;
   queue.unshift(s);
   while (queue.length > 0) {
      var v = queue.shift();
      if (typeof(v) != "string") {
         print("Visited vertex: " + v);
      }
      for each (var w in this.adj[v]) {
         if (!this.marked[w]) {
            this.edgeTo[w] = v;
            this.marked[w] = true;
            queue.unshift(w);
         }
      }
   }
}

function hasPathTo(v) {
   return this.marked[v];
}

function pathTo(v) {
   var source = 0;
   if (!this.hasPathTo(v)) {
      return undefined;
   }
   var path = [];
   for (var i = v; i != source; i = this.edgeTo[i]) {
      path.push(i);
   }
   path.push(source);
   return path;
}


// function Graph(v) {
//    this.vertices = v;
//    this.edges = 0;
//    this.adj = [];
//    for (var i = 0; i < this.vertices; ++i) {
//       this.adj[i] = [];
//       this.adj[i].push("");
//    }
//    this.addEdge = addEdge;
//    this.showGraph = showGraph;
//    this.dfs = dfs;
//    this.bfs = bfs;
//    this.marked = [];
//    for (var i = 0; i < this.vertices; ++i) {
//       this.marked[i] = false;
//    }
//    this.edgeTo = [];
//    this.pathTo = pathTo;
//    this.hasPathTo = hasPathTo;
// }
//
// function pathTo(v) {
//   var source = 0;
//   if (!this.hasPathTo(v)) {
//     return undefined;
//   }
//   var path = [];
//   for (var i = v; i != source; i = this.edgeTo[i]) {
//     print("edgeTo:" + this.edgeTo)
//     print("i:"+i +", source:"+source);
//     path.push(i);
//   }
//
//   path.push(s);
//   return path;
// }
//
// function hasPathTo(v) {
//   return this.marked[v];
// }
// function addEdge(v,w) {
//    this.adj[v].push(w);
//    this.adj[w].push(v);
//    this.edges++;
// }
//
// function showGraph() {
//    var result = ""
//    for (var i = 0; i < this.vertices; ++i) {
//       result += i + " -> ";
//       for (var j = 0; j < this.vertices; ++j) {
//          if (this.adj[i][j] != undefined)
//             result += this.adj[i][j] + ' ';
//       }
//       result += "\n";
//    }
//    print(result);
// }
//
// function dfs(v) {
//    this.marked[v] = true;
//    if (this.adj[v] != undefined) {
//       print("Visited vertex: " + v);
//    }
//    for each (var w in this.adj[v]) {
//       if (!this.marked[w]) {
//          this.dfs(w);
//       }
//    }
// }
//
// function bfs(s) {
//   var queue = [];
//   this.marked[s] = true;
//   queue.push(s);
//   while (queue.length > 0) {
//     var v = queue.shift();
//     if (v != undefined) {
//       print("visited vertex: " + v);
//     }
//
//     for (var w in this.adj[v]) {
//       if (!this.marked[w]) {
//         this.edgeTo[w] = v;
//         this.marked[w] = true;
//         queue.push(w);
//       }
//     }
//   }
// }
