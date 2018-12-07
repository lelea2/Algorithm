// You have been tasked with writing a pathfinder algorithm for the enemy AI of a game.

// It is your task to write a function that is capable of finding a path from the start point provided and make it to the stop point.

// The path is across a two-dimensional square grid with standard coordinate pairs: (x,y) with 0,0 being in the top left corner and 3,3 being the bottom right corner.

// You are allowed to move from any open space into an adjacent open space.
// You are not allowed to move into an adjacent closed space.
// You are not allowed to move off of the grid.

// First, create a list of coordinates, which we will use as a queue. The queue will be initialized with one coordinate, the end coordinate. Each coordinate will also have a counter variable attached (the purpose of this will soon become evident). Thus, the queue starts off as [[1,0,0]].
// Then, go through every element in the queue, including elements added to the end over the course of the algorithm, and to each element, do the following:
// Create a list of the four adjacent cells, with a counter variable of the current element's counter variable + 1
// Check all cells in each list for the following two conditions:
// If the cell is a wall, remove it from the list
// If there is an element in the main list with the same coordinate and an equal or higher counter, remove it from the list
// Add all remaining cells in the list to the end of the main list
// Go to the next item in the list
// Once the algorithm has found the start, walk through the queue finding adjacent cells with a lower distance number.
// Add these coordinates to the list.


// The function takes the grid (described later), starting coordinates, and ending coordinates.

var queue;

//find the shortest path, working backwards from the end
function findShortestPath(grid, sx, sy, ex, ey) {
  var limit = 10, //execution limiter
      iteration = 0, //our limiter to make sure we don't go over
      path = [], //the winning path to go back
      cx, cy; //our coordinates when traversing back

  //initialize our queue with the endoing point
  queue = [ [ex, ey, 0] ];

  //while we haven't scanned the start
  while ( !getQueue(sx, sy) && iteration < limit ) {
    //for every coordidate in the queue
    for ( var i = 0, l = queue.length; i < l; i++ ) {
      var q = queue[i],
          x = q[0],
          y = q[1],
          d = q[2];

      //check around us, and add valid spaces to the queue
      if ( isValid(x - 1, y) ) {
        queue.push( [x - 1, y, d + 1] );
      }
      if ( isValid(x + 1, y) ) {
        queue.push( [x + 1, y, d + 1] );
      }
      if ( isValid(x, y - 1) ) {
        queue.push( [x, y - 1, d + 1] );
      }
      if ( isValid(x, y + 1) ) {
        queue.push( [x, y + 1, d + 1] );
      }
    }
    iteration++;
  }

  //no path available or too far away
  if ( iteration >= limit ) {
    return false;
  }

  iteration = 0;
  //we have scanned the area and at this point have found the start
  cx = sx;
  cy = sy;
  cd = getQueue(cx, cy)[2];

  //push the start onto our solution
  path.push( [sx, sy] );
  do {
    //find the next lowest distance neighbor to go to
    var next = findLowestNeighbor(cx, cy, cd);
    cx = next[0];
    cy = next[1];
    cd = next[2];

    //add this neighbor to the path back
    path.push( [cx, cy] );

    iteration++;
  } while ( (cx != ex || cy != ey) && iteration < limit );
  return path;
}

/**
 * get a specific coordinate in the queue
 *
 */
function getQueue(x, y) {
  for ( var i = 0, l = queue.length; i < l; i++ ) {
    var q = queue[i];
    if ( q[0] === x && q[1] === y ) {
      return q;
    }
  }
  return false;
}

/**
 * the position is valid if it is on the grid and is in the queue somewhere
 *
 */
function isValid(x, y) {
  if ( grid[x] && grid[x][y] ) {
    return !getQueue(x, y);
  }
  return false;
}

/**
 * see if a pair of coordinates are adjacent
 *
 */
function isAdjacent(x0, y0, x1, y1) {
  if ( Math.abs(x1 - x0) == 1 && Math.abs(y1 - y0) == 0 ) {
    //either left or right
    return true;
  } else if ( Math.abs(x1 - x0) == 0 && Math.abs(y1 - y0) == 1 ) {
    //either up or down
    return true;
  } else {
    return false;
  }
}

/**
 * find the next distance down neighbor that we can traverse to
 *
 */
function findLowestNeighbor(cx, cy, cd) {
  for ( var i = 0, l = queue.length; i < l; i++ ) {
    var q = queue[i],
        x = q[0],
        y = q[1],
        d = q[2];

    //is it exactly one less that our distance and also adjacent
    if ( d < cd && isAdjacent(cx, cy, x, y) ) {
      return [x, y, d];
    }
  }
}
