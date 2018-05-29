function mergeRanges(meetings) {
  // sort by start times, slice will return a shallow copy of the array, not affecting original array
  const sortedMeetings = meetings.slice().sort((a, b) => {
    return a.startTime > b.startTime ? 1 : -1; // sort meeting based on start time
  });
  // initialize mergedMeetings with the earliest meeting
  let mergedMeetings = [sortedMeetings[0]];
  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting    = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    // if the current and last meetings overlap, use the latest end time
    // objects, and arrays (which are objects) all are passed by reference. thus change will be recorded.
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
      // add the current meeting since it doesn't overlap
    } else {
      mergedMeetings.push(currentMeeting);
      }
  }
  return mergedMeetings;
}

let meetings =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
];

//var res = meetings.slice();
var res = mergeRanges(meetings);
console.log(meetings);
console.log("break");
console.log(res);

// Output
// [ { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 12 } ]
// break
// [ { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 } ]