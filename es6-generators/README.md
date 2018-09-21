```
const lifts = ['squat', 'bench', 'deadlift', 'press'];
const numWeeks = 3;
const daysPerWeek = 6;

const totalNumSessions = numWeeks * daysPerWeek;

let currentLiftIndex = 0;

// This creates an empty array of totalNumSessions length
// for me to map over
const cycle = [...Array(totalNumSessions)].map(() => ({
    lift: lifts[currentLiftIndex++ % lifts.length]
}));
```

// Change infinite loop above to generator

```
function* repeatedArray(arr) {
  let index = 0;
  while (true) {
    yield arr[index++ % arr.length];
  }
}

const lifts = ['squat', 'bench', 'deadlift', 'press'];
const nextLiftGenerator = repeatedArray(lifts);

const numWeeks = 3;
const daysPerWeek = 6;

const totalNumSessions = numWeeks * daysPerWeek;

// This creates an empty array of totalNumSessions length
// for me to map over
const cycle = [...Array(totalNumSessions)].map(() => ({
  lift: nextLiftGenerator.next().value,
}));

```