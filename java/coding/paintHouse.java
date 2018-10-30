// Write a function

// int paintHouses(int[][] costs)
// , where costs[i][j] is the cost to paint house i the jth color. j will be in the range [0,2]

// Here is an example input that will break the greedy algorithm (the cheapest cost is GRBGR = 7, whereas greedy would give GBRBG = 8):

// R	2	2	6	4	2
// G	0	5	7	1	1
// B	1	1	2	0	4
// Additionally, examples with all costs the same (a tie) for a particular house will also break the Greedy Algorithm.


int paintHouses(int[][] costs) {
  int[][] best = new int[costs.length + 1][costs[0].length];
  for (int house = 1; house <= costs.length; ++house) {
    for (int color = 0; color < costs[house - 1].length; ++color) {
      // Initialize all but the first column cost to MAX, first is already zero
      best[house][color] = Integer.MAX_VALUE;
    }
    for (int prevHouseColor = 0; prevHouseColor < costs[house - 1].length; ++prevHouseColor) {
      for (int currHouseColor = 0; currHouseColor < costs[house - 1].length; ++currHouseColor) {
        // Relax the cost only if the colors don't match and the cost is less
        if (currHouseColor != prevHouseColor && best[house][currHouseColor] > best[house - 1][prevHouseColor] + costs[house - 1][currHouseColor]) {
          best[house][currHouseColor] = best[house - 1][prevHouseColor] + costs[house - 1][currHouseColor];
        }
      }
    }
  }

  // Return the lowest of the final values
  int ret = Integer.MAX_VALUE;
  for (int i = 0; i < best[best.length - 1].length; ++i) {
    ret = Math.min(ret, best[best.length - 1][i]);
  }
  return ret;
}
