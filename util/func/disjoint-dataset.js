/* 
Your previous Plain Text content is preserved below:

In a room are N persons,
and we will define two persons are friends if they are directly or indirectly friends.
If A is a friend with B, and B is a friend with C, then A is a friend of C too.
A group of friends is a group of persons where any two persons in the group are friends.
Given the list of persons that are directly friends,
Find the smallest group of friends.

Example:
input:

1 6 
2 7
3 8
4 9
2 6
3 5

groups:
1-6-2-7
3-8-5
4-9

The number of people in smaller group is 2 i.e. 4-9.
 */
const data = {
  "1": [ "5", "6"],
  "2": ["3", "6"],
  "5": ["1"],
  "6": ["1", "2"],
  "4": ["7"],
  "7": ["4"]
};

const network = [];
const networkFunc = (friendArr, existingArr) => {
  for (let j = 0; j < friendArr.length; j++) {
    if (existingArr.indexOf(friendArr[j]) < 0) {
      existingArr.push(friendArr[j]); // add friend node
      if (data[friendArr[j]] && data[friendArr[j]].length > 0) {
        networkFunc(data[friendArr[j]], existingArr); 
      }
    }
  }
  return existingArr;
};

const getFriends = (id) => {
  const myArr = [];
  if (data[id]) {
     networkFunc(data[id], myArr);
  } 
  return myArr;
};

getFriends("1");

const group = {};
let min = 0;
for (const key in data) {
  const lengthGroup =  getFriends(key).length; //cache
  if (min === 0) {
    min = lengthGroup;
  } else if (min > lengthGroup) {
    min = lengthGroup;
  }
}
console.log(min);
