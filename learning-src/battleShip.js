// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function getPosition(num, str) {
  const result = [];
  num.map((a) => {
    str.map((b) => {
      result.push(`${a}${b}`);
    });
  });
  return result.join(' ');
}

function fillShip(ship) {
  const shipArr = ship.split(' ');
  const numArr = [];
  const strArr = [];
  shipArr.map((item) => {
    const numStr = item.replace(/[^0-9]/g, "");
    const strStr = item.replace(/[^A-Z]/g, "");
    const num = parseInt(numStr, 10);
    if (numArr.indexOf(num) < 0) {
      numArr.push(num);
    }
    if (strArr.indexOf(strStr) < 0) {
      strArr.push(strStr);
    }
  });
  return getPosition(numArr, strArr);
}

function solution(N, S, T) {
  const arrayT = T.split(' ');
  let sunk = 0;
  let hit = 0;
  const _S = S.split(',');
  const arrayS = _S.map((item) => {
    return fillShip(item);
  });
  let fillS = arrayS.join(',');
  arrayT.map((item) => {
    const regex = new RegExp(item, "g");
    fillS = fillS.replace(regex, -1);
  });
  fillS.split(',').map((item) => {
    const isHit = item.indexOf(-1) > -1;
    if (isHit) {
      const leftPos = item.replace(/-1/g, '').trim();
      if (!!leftPos) { // not sunk
        hit += 1;
      } else { // nothing left
        sunk += 1;
      }
    }
  });
  return `${sunk},${hit}`;
}
