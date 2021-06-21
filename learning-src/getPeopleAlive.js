/* 
 * Given a list of people with their birth and death years. Optimize for time complexity.
 *  A) implements a function to compute the year most people are alive.
 */

/**
 * List of people sorted by birth year
 * 
 * Alex   (1920) ---------> (1990)
 * Edward   (1930) -------> (1990)
 * Ilenne     (1940) ---------> (1992)
 * Oliver       (1950) -------> (1992)
 * James          (1960) ---------> (1995)
 * Jessica          (1970) -------> (1995)
 * Mark               (1980) --------------> (2050)
 * Chris                (1990) ------------------> (2070)
 * John                   (1992) -------------> (2065)
 * Alexa                    (1995) ------> (2040)
 * Jane                       (2000) ---------------> (2090)
 */

function getYearMostPeopleAreAlive(people) {  
	let countPeople = people.reduce((a, item) => {
	   a[item.birth] = (a[item.birth] | 0) + 1;
	   a[item.death] = (a[item.death] | 0) - 1;
	  return a;
	}, {});
 
	let maxYear = 0;
	let maxCount = 0;
	let count = 0;
	Object.keys(countPeople).forEach((key) => {
    console.log('>>> year', key);
    count += countPeople[key];
    if (maxCount < count) {
      maxCount = count;
      maxYear = key;
    }
	  console.log('count', count);
	});   
	console.log('maxYear',  maxYear, 'maxCount', maxCount);
}
     
const peopleList = [
	{ name: 'Alex',    birth: 1920, death: 1990 },
	{ name: 'Edward',  birth: 1930, death: 1990 },
	{ name: 'Ilenne',  birth: 1940, death: 1992 },
	{ name: 'Oliver',  birth: 1950, death: 1992 },
	{ name: 'James',   birth: 1960, death: 1995 },
	{ name: 'Jessica', birth: 1970, death: 1995 },
	{ name: 'Mark',    birth: 1980, death: 2050 },
	{ name: 'Chris',   birth: 1990, death: 2070 },
	{ name: 'John',    birth: 1992, death: 2065 },
	{ name: 'Alexa',   birth: 1995, death: 2040 },
	{ name: 'Jane',    birth: 2000, death: 2090 },
];

getYearMostPeopleAreAlive(peopleList) // => 1980, 7
      