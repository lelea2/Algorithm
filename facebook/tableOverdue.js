// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const BG = 'background-color: red';

function daysDiff(d1, d2) {
  const t2 = d2.getTime();
  const t1 = d1.getTime();
  return parseInt((t2 - t1) / (24 * 3600 * 1000));
}

function solution(D, T) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counter = 0;
  const rows = jQuery('tr');
  const columns = jQuery('td');
  for (let i = 0; i < rows.length; i++) {
    const loanDate = (jQuery(columns[3 * i + 1]).text() || D);
    const returnDate = (jQuery(columns[3 * i + 2]).text() || D);
    const diff = daysDiff(new Date(loanDate), new Date(returnDate));
    const bg = jQuery(rows[i]).attr("style");
    if (diff > T && bg !== BG) { // overdue, but not set as overdue in markup
      counter++;
    } else if (diff <= T && bg === BG) { // not overdue, but set as overdue in markup
      counter++;
    }
  }
  return counter;
}
