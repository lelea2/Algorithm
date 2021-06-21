// Given a text Hello World!!
// H e l l o   W o r l d   ! !
// 0 1 2 3 4 5 6 7 8 9 10 11 12
// Want to translate to html text as the below
// He<span>l<i>lo</i></span> <b><i>Wor</i>ld!</b>!
// The input as follow
// span 2-4
// i 3-8
// b 6-12

// so we have to translate as stack as the following
// 1 <i>
// 2 </i><span>
// 3 </span><i><span>
// 4 </span>
// 6 </i><b><i>
// 8 </i>
// 12 </b>

// The result will be
// H<i>e<span>l</i></span><i><span>ll</span> </i><b><i>Wor</i>ld!!</b>
// Note that
// open <tag> => insert before
// close </tag> => insert after

// Assumption: the input provide is not duplicated
const str = 'Hello World!!';
const input = {
  "i": [1, 2],
  "span": [2, 4],
  "i": [3, 8],
  "b": [6, 12]
};

function insertHTMLTag(str, input) {
  const stackInput = createStackInput(input);
  let finalStr = '';
  for (let i = 0; i < str.length; i++) {
    if (stackInput[`${i}`]) {
      finalStr = finalStr + stackInput[`${i}`] + str[i];
    } else {
      finalStr = finalStr + str[i];
    }
  }
  return finalStr;
}

function createStackInput(input) {
  const hash = {};
  Object.keys(input).map((item) => {
    const tagIndex = item[input]; // [openIndex, closeIndex];
    generateHashInput(hash, tagIndex[0], `<${item}>`); // open
    generateHashInput(hash, tagIndex[1], `</${item}>`); // close
  });
  // Result hash
  // {
  //   "1": "<i>",
  //   "2": "</i><span>",
  //   "4": "</span>",
  //   "3": "<i>",
  //   "8": "</i>",
  //   "6": "<b>",
  //   "12": "</b>"
  // }
  // Now we need to resort hash by index value and regenerate correct mark up
  const arr = [];
  Object.keys(hash).map((item) => {
    arr.push(item);
  });
  arr.sort((a, b) => {
    return parseInt(a, 10) > parseInt(b, 10);
  });
  // Now regenreate hash
  const hashFinal = {};
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i];
    if (i > 0) {
      const prevItem = arr[i -1];
      const prevTag = hashFinal[prevItem];
      // If prev is open tag and close tag
      const prevCloseTag = prevTag[prevTag.length - 1];
      if (!isLastIndexOpenTag(prevTag) && !isMatchingTag(hash[prevItem][0], prevCloseTag)) {
        hashFinal[index] = `${prevCloseTag.replace('<', '</')}${hash[index]}`;
      } else {
        hashFinal[index] = hash[index];
      }
    } else {
      hashFinal[index] = hash[index];
    }
  }
}

function isMatchingTag(open , close) {
}

function isLastIndexOpenTag(item) {
  const lastIndex = item[item.length - i];
  return lastIndex.indexOf('</') === 0;
}

function generateHashInput(hash, key, val) {
  if (hash[key]) {
    hash[key] = hash[key].push(`${val}`);
  } else {
    hash[key] = [`${val}`];
  }
}
