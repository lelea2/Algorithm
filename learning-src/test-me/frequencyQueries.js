
// Operation   Array   Output
// (1,1)       [1]
// (2,2)       [1]
// (3,2)                   0
// (1,1)       [1,1]
// (1,1)       [1,1,1]
// (2,1)       [1,1]
// (3,2)                   1


function freqQueries(queries = []) {
	const frequencies = {};
  const result = [];
  const frequenciesTracker = {};

  for (const query of queries) {
    const action = query[0];
    const value = query[1];
    const valueStr = `${value}`;

    switch(action) {
      case 1:
        const prevFreq = frequencies[valueStr] ? frequencies[valueStr] : 0; 
        if (typeof frequencies[valueStr] === 'undefined') {
          frequencies[valueStr] = 1;
        } else {
          frequencies[valueStr] += 1;
        }
        if (frequenciesTracker[`${frequencies[valueStr]}`]) {
          frequenciesTracker[`${frequencies[valueStr]}`] += 1;
        } else {
          frequenciesTracker[`${frequencies[valueStr]}`] = 1;
        }
        if (prevFreq) {
          frequenciesTracker[`${prevFreq}`] -= 1;
        }
        break;
      case 2:
        if (frequencies[valueStr]) {
          frequenciesTracker[`${frequencies[valueStr]}`] -=1;
          frequencies[valueStr] -= 1;
          frequenciesTracker[`${frequencies[valueStr]}`] +=1;
        }
        break;
      case 3:
        result.push(frequenciesTracker[valueStr] ? 1 : 0);
        break;
      default:
        break;
    }
  }
  return result;
}

console.log(
  freqQueries([[1,1],[2,2],[3,2],[1,1],[1,1],[2,1],[3,2]]),
  freqQueries([[3, 4], [2, 1003], [1, 16], [3, 1]]),
  freqQueries([[1, 3], [2, 3], [3, 2], [1, 4], [1, 5], [1, 5], [1, 4], [3, 2], [2, 4], [3, 2]]),
  freqQueries([[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]]),
  freqQueries([[1, 3], [1, 38], [2, 1], [1, 16], [2, 1], [2, 2], [1, 64], [1, 84], [3, 1], [1, 100], [1, 10], [2, 2], [2, 1], [1, 67], [2, 2], [3, 1], [1, 99], [1, 32], [1, 58], [3, 2]])
);