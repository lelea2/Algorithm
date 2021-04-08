// Given non-empty array of positive integers represent the amount of time that specific queries take to execute
// only 1 query can be executed at a time.

// Run time O(nlogn)
// Space time O(1)
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b); // sorting is O(nlogn)

  let totalWaitingTime = 0;
  for (let i = 0; i < queries.length; i++) { // O(n) run time for the array
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1);
    totalWaitingTime += duration + queriesLeft;
  }
  return totalWaitingTime;
}

// const queries = [3, 2, 1, 2, 6];
// const expected = 17;