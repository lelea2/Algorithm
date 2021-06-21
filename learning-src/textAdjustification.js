
// Array of space count
function generateFinalSpace(space, gap, spaceRemain) {
  // console.log('>>>spaceRemain', spaceRemain);
  const arr = [];
  for (let i = 0; i < gap; i++) {
    if (spaceRemain > 0) {
      arr[i] = space + 1;
      spaceRemain -= 1;
    } else {
      arr[i] = space;
    }
  }
  return arr;
}

function generateSpace(count) {
  let space = '';
  for (let i = 0; i < count; i++) {
    space += ' ';
  }
  return space;
}

function adjustText(arr, L) {
  let count = 0;
  arr.map((item) => {
    count += item.length;
  });
  const spaceLeft = L - count;
  const gap = (arr.length - 1);
  // console.log('>>>spaceLeft', spaceLeft);
  const space = Math.floor(spaceLeft / gap);
  const spaceRemain = spaceLeft - space * gap;
  // console.log('>>> spaceRemain', spaceRemain);
  const spaceCount = generateFinalSpace(space, gap, spaceRemain); // array space count

  const result = [];
  arr.map((item, i) => {
    result.push(item);
    if (spaceCount[i]) {
      result.push(spaceCount[i]);
    }
  });
  let str = '';
  // console.log(result);
  result.map((item, i) => {
    if (i % 2 !== 0) {
      str += generateSpace(item);
    } else {
      str += item;
    }
  });
  return str;
}

function textJustify(input, L) {
  // Enter your code here.
  const arr = input.split(' ');
  const line = {};
  let currCount = L;
  let currLine = 1;
  line[`${currLine}`] = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    //   console.log(currCount);
    if (str.length <= currCount) {
      line[`${currLine}`].push(str);
      currCount = currCount - (str.length + 1);
    } else {
      currLine = currLine + 1;
      line[`${currLine}`] = [str];
      currCount = L - (str.length + 1);
    }
  }
  Object.keys(line).map((key) => {
    //   console.log(currLine);
    //   console.log(key);
    if (key === `${currLine}`) { // lastline
      console.log(line[key].join(' '));
    } else {
      console.log(adjustText(line[key], L));
    }
  });
}

const input = "Coursera provides universal access to the world's best education, partnering with top universities and organizations to offer courses online.";
// L = 30;
// L = 27;
const L = 20;
console.log(textJustify(input, L));

// Coursera    provides
// universal  access to
// the   world's   best
// education,
// partnering  with top
// universities     and
// organizations     to
// offer        courses
// online.
