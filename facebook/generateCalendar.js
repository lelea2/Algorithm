/**
 * Given a Date, return an array of arrays representing a calendar view for that month.
 *
 * March 2019:
 * [
 *   [ 24, 25, 26, 27, 28,  1,  2 ],
 *   [  3,  4,  5,  6,  7,  8,  9 ],
 *   [ 10, 11, 12, 13, 14, 15, 16 ],
 *   [ 17, 18, 19, 20, 21, 22, 23 ],
 *   [ 24, 25, 26, 27, 28, 29, 30 ],
 *   [ 31,  1,  2,  3,  4,  5,  6 ]
 * ]
 */
 function generateCalendar(date) {
	const arr = [];
	const COLUMN_COUNT = 7; // days
	const firstDayIndex = date.getDay(); // index of 1st on arr[0] === 5
	const fullYear = date.getFullYear();
	const month = date.getMonth();
	const daysInMonth = new Date(fullYear, month + 1, 0).getDate(); // 31
	
	const optimizedArrLength = Math.ceil(daysInMonth / COLUMN_COUNT) + 1; 
	
	// try to figure out the first day in arr[0][0]
	let calendarDay = 1;
	let daysInPrevMonth = 0;
	let isCurrentMonth = true;
	let maxRow = optimizedArrLength;
	if (firstDayIndex > 0) { // this means need to fill in previous month date
	  daysInPrevMonth = new Date(fullYear, month, 0).getDate(); // 28
	  calendarDay = daysInPrevMonth  - firstDayIndex + 1;
	  isCurrentMonth = false;
	}
	for (let i = 0; i < optimizedArrLength; i++) {
	   if (i >= maxRow) {
	      break;
	   }
	   arr[i] = new Array(COLUMN_COUNT);
	   for(let j = 0; j <  COLUMN_COUNT; j++) {
	      arr[i][j] = calendarDay;
	      if (calendarDay === daysInMonth && isCurrentMonth) {
		calendarDay = 1; // reset back to 1 for next month
		maxRow = i; // 
	      } else {
		if (calendarDay < daysInPrevMonth ||  isCurrentMonth) {
		  calendarDay++;
		} else {
		  calendarDay = 1;
		  isCurrentMonth  = true;
		}
	      }
	   }
	}
	return arr;
}
      
// console.log(generateCalendar(new Date(2019, 2)));
// console.log(generateCalendar(new Date(2020, 0)));


/* Test Suite */

var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha({ui: 'bdd'});

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("Test suite", function() {
  it("generates the expected month view for March 2019", function() {
    assert.deepEqual(generateCalendar(new Date(2019, 2)), [
      [ 24, 25, 26, 27, 28,  1,  2 ],
      [  3,  4,  5,  6,  7,  8,  9 ],
      [ 10, 11, 12, 13, 14, 15, 16 ],
      [ 17, 18, 19, 20, 21, 22, 23 ],
      [ 24, 25, 26, 27, 28, 29, 30 ],
      [ 31,  1,  2,  3,  4,  5,  6 ]
    ]);
  });

  it("generates the expected month view for January 2020", function() {
    assert.deepEqual(generateCalendar(new Date(2020, 0)), [
      [ 29, 30, 31,  1,  2,  3,  4 ],
      [ 5,   6,  7,  8,  9, 10, 11 ],
      [ 12, 13, 14, 15, 16, 17, 18 ],
      [ 19, 20, 21, 22, 23, 24, 25 ],
      [ 26, 27, 28, 29, 30, 31,  1 ]
    ]);
  });
});

mocha.run(function() {});