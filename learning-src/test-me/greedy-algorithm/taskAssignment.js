// You're given an integer k representing a number of workers and an array of positive integers representing durations of tasks
// that must be completed by workers. Specifically, each worker must complete 2 unique tasks and can only work on one task at a time

// k = 3
// tasks = [1, 3, 4, 3, 1, 4]
// 
// [
//   [4, 2],
//   [0, 5],
//   [3, 1],
// ];
// Note: there might be muliple correct answer for the project
// [[0, 2], [4, 5], [1, 3]
function taskAssignment(k, tasks) {
  const pairedTasks = [];
  const taskDurationToIndices = getTaskDurationToIndices(tasks);

  // Sort tasks in ascending order
  const sortedTasks = tasks.sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    const task1Duration = sortedTasks[i];
    const indicesWithTask1Duration = taskDurationToIndices[task1Duration];
    const task1Index = indicesWithTask1Duration.pop();

    const task2SortedIndex = sortedTasks.length - 1 - i;
    const task2Duration = sortedTasks[task2SortedIndex];
    const indicesWithTask2Duration = taskDurationToIndices[task2Duration];
    const task2Index = indicesWithTask2Duration.pop();

    pairedTasks.push([task1Index, task2Index]);
  }
  return pairedTasks;
}

function getTaskDurationToIndices(tasks) {
  const taskDurationToIndices = {};
  for (let i = 0; i < tasks.length; i++) {
    const taskDuration = tasks[i];
    if (taskDuration in taskDurationToIndices) {
      taskDurationToIndices[taskDuration].push(i);
    } else {
      taskDurationToIndices[taskDuration] = [i];
    }
  }
  return taskDurationToIndices;
}