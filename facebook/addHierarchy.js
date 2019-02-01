/*

hdoan@chanzuckerberg.com

"[H] Interview with Khanh",
"--[H] write interview feedback",
"--[M] reflect on my interviews",
"[M] xxx",
"[L] xxx",
"[M] xxx",
"[M] xxx",
"--[H] xxx",
"--[L] xxx",
"--[M] xxx",
"----[H] xxx",
"----[L] xxx",
"[H] xxxx",



[H] xxxx
[H] Interview with Khanh
--[H] write interview feedback
--[M] reflect on my interviews
[M] xxx
[M] xxx
[M] xxx
--[H] xxx
--[M] xxx
----[H] xxx
----[L] xxx
--[L] xxx
[L] xxx

*/

class Task {
  constructor(name, priority, children) {
      this.name = name;
      this.priority = priority;
      this.children = children || [];
  }

  addChildren(task) {
      this.children.push(task);
  }

  getPriority() {
      return this.priority;
  }

  getChildren() {
      return this.children;
  }

  setChildren(arr) {
      this.children = arr;
  }
}

const Task1 = new Task("Intervie with Khanh", 1, [
 new Task("write interview feedback", 1, []),
 new Task("reflect on my interviews", 2, []),
]);
const Task2 = new Task("xxx", 2, []);
const Task3 = new Task("xxx", 3, []);
const Task4 = new Task("xxx", 1, []);



const arr = [Task1, Task2, Task3, Task4];

function generateTask(arr, parentLevel, taskArr = []) {
  let currTask = null;
  const arrTask = [];
  let currLevel = 0;
  let parentLevel = 0;
  for (let i = 0; arr.length; i++) {
      if (parentLevel < currLevel) {
          parentLevel = currLevel;
      }
      currLevel = checkLevelOfCurrentTask(arr[i]);
      const myTask = beautifyTheTask(arr[i], currLevel);
      if (currLevel - parentLevel === 0) { // parent
          taskArr.push(new Task(myTask.name, myTask.levelNum, []));
      } else { // children
          taskArr.addChildren(new Task(myTask.name, myTask.levelNum, []));
      }
  }
  return taskArr;
}


function sortTask(taskArr) {
  for (let i = 0; i < taskArr.length; i++) {
      if (taskArr[i].getChildren().length > 0) {
          taskArr[i].setChildren(sortTask(taskArr[i].getChildren()));
      }
  }
  return taskArr.sort((a, b) => {
      return a.getPriority() > b.getPriority();
  });
}

const task = sortTask(arr);

for (let i = 0; i < task; i++) {
  if (task)
}

// Beautify the task
// --[H] write interview feedback
// name: write interview feedback, level: 1
function beautifyTheTask(currentTask, indexStart) {
  const str = currentTask.substr(indexStart);
  const level = str.substr(0, 2);
  const levelNum = 3;
  switch (level) {
      case '[H]':
          levelNum = 1;
      case '[M]':
          levelNum = 2;
      case '[L]':
          levelNum = 3;
  }
  return {
      levelNum,
      name: level.substr(3)
  };
}

// Current level of task
function checkLevelOfCurrentTask(currentTask) {
  let level = 0;
  for (let i = 0; i < currentTask.length; i++) {
      if (currentTask.indexOf(i) === '-') {
          level += 1;
      } else {
          break;
      }
  }
  return Math.floor(level / 2);
}
