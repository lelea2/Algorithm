// Given a list of activities, find the minimum # of activities to fully occupy the target time. 
// You can repeat the same activity more than once.

// activities = {
//   hiking: 1,
//   vrgame: 2,
//   movies: 3
// };

// Map:
// Target Hour | Minimum # of activities
// 0           | 0
// 1           | 1
// 2           | 1
// 3           | 1
// 4           | 2
// 5           | 2
// 6           | 2
// 7           | 3

function findMinimumActivities(activities = [], target) {
	// Used to record minimum # of activities to fully spend every hours
  // up to the given target.
  // - key: hour
  // - value: minimum # of activities to fully spend "key" hour.
  //
  // E.g., {5, 3} means the minimum # of activities to fully spend 5
  // hours is 3.
  //
  // Note: It does not contain any hours that is not possible to fully
  // spend with the given list of activities.
  const minActivitiesCountMap = new Map();

  // Initial state: you need 0 activity to spend 0 hour.
  minActivitiesCountMap.set(0, 0);

  // Use dynamic programming to calculate the minimum # of activities
  // required to fully spend the target hours.
  for (let hour = 1; hour <= target; hour++) {
    // A variable to keep track of the minimum # of activities
    // to fully spend the current "hour."
    let minActivities = Infinity;

    // Iterate through the list of given activities and find the
    // minimum # of activities count.
    for (let i = 0; i < activities.length; i++) {
      const activity = activities[i];
      const remainingHours = hour - activity.hour;
      if (minActivitiesCountMap.has(remainingHours)) {
        let count = minActivitiesCountMap.get(remainingHours) + 1;
        minActivities = Math.min(count, minActivities);
      }
    }

    // If we weren't able to find a combination of activities to
    // fully spend the "current" hour, do not put record in the map.
    if (minActivities != Infinity) {
      minActivitiesCountMap.set(hour, minActivities);
    }
  }

  return minActivitiesCountMap.get(target) || -1;
}

console.log(
  findMinimumActivities([
    { activity: 'Hiking', hour: 1 },
    { activity: 'VR Game', hour: 2 },
    { activity: 'Hiking', hour: 3 },
  ], 2)
);