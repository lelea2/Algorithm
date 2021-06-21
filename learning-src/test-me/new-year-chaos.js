/**
 * There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. Initial positions increment by 1 from 1 at the front of the line to at n the back.
 * Any person in the queue can bribe the person directly in front of them to swap positions. If two people swap positions, they still wear the same sticker denoting their original places in line. 
 * One person can bribe at most two others. For example, if n = 8 and person 5 bribes person 4, the queue will look like this: 1, 2, 3, 5, 4, 6, 7, 8.
 * Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!
 */

//  we have an array of integers. Before there are any swaps, the positions are ordered: 1, 2, 3, 4, 5.
//  By comparing the difference between each item in the newly positioned array and the original list, and checking if the value is greater than 2, you know there exist a person who bribed over 3 times:
// (arr[i] - (i + 1)) > 1 ==> too chaotic

// Input
// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4

// Output
// 3
// Too chaotic

function minimumBribes(queue) {
  let chaotic = false;
  let bribes = 0;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] - (i + 1) > 2) {
      chaotic = true;
      break;
    }
    for (let j = queue[i] - 2; j < i; j++) {
      if (queue[j] > queue[i]) {
        bribes++;
      }
    }
  }
  if (chaotic === true) {
    console.log('Too chaotic');
  } else {
    console.log(bribes);
  }
}


minimumBribes([1, 2, 3, 4, 5, 6, 7, 8]);