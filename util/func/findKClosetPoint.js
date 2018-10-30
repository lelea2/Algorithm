// List<Point> points = []
// const points = [[0,1],[1,-3],[2,4],[1,1],[13,-2]]
// const origin = [1, 1]
// const k = 2

// Algorithm between 2 points
// Math.sqrt((b2 - b1)^2 + (a2 - a1)^2)

const calculateDistance = (origin, point) => {
  return Math.sqrt(
    Math.pow(point[0] - origin[0], 2) +
    Math.pow(point[1] - origin[1], 2)
  )
};

// Naive solution:
// Iterate through the array of points
// Then sort by point distance and do array slice
function findKClosestPoints(points, origin, k) {
  if (!origin) {
    throw new Error("Need origin")
  }
  
  if (!points) {
    throw new Error("Need points array")
  }
  
  if (points.length <= k) {
    return points
  }
  
  // time: O(n)
  // space: O(n)
  const pointsWithDistances = points.map((point) => {
    const distanceToOrigin = calculateDistance(origin, point)
    return {
      point,
      distanceToOrigin
    }
  })

  // time: O(nlogn)
  // space: O(n)
  const sortedPoints = pointsWithDistances.sort((a, b) => {
    return a.distanceToOrigin - b.distanceToOrigin
  })
  
  return sortedPoints.slice(0, k).map(({point}) => point)
}

/************************************************************************/
/*** Optimized solution */
/************************************************************************/
