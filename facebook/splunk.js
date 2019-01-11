// var temp = [12, 45, 23, 67, -14, 78];

// for (let i = 0; i < temp.length; i++) {
//   setTimeout((i) => {
//     // console.log(i);
//     console.log(temp[i]);
//   }, i * 3000, i);
// }

const items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
  {color: 'black', type: 'tv', age: 25},
  {color: 'blue', type: 'laptop', age: 28},
];

const excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'},
  {k: 'color', v: 'black'},
  {k: 'age', v: 32},
];

function excludeItems(items, excludes) {
  // [{k: 'color', v: ['silver', 'black']},
  // {k: 'type', v: ['tv']},
  // {k: 'age', v: 32}
  // O(n) // loop through exclude
  // O(n) // loop through items
  // O(m) // key of items
  // O(n^2);
  // hashtable =>
  // Solution 2.1 (step 1)
   // exclude: {'color_silver': '', 'color_black': '', 'type_tv': ''} // O(1).
  // excludes = {color: {silver: true, black: true}, type: {tv}}
  // for (let i =0; i < items.length; i++) {
  // .   Objects.keys(items) => // n => indexOf (O(n) => O(n^2)
  // }
  // Sot
  // items::
  // { color: {key: 'red', item: items[0]}, // O(n) => O(1)
  const newExcludes = {};
  for (let i = 0; i < excludes.length; i++) {
      const key = excludes[i].k;
      const value = excludes[i].v;
      if (!newExcludes[key]) {
        newExcludes[key] = {};
      }
      newExcludes[key][value]= true;
  }
  console.log(newExcludes);
  let excluded = false;
  const newItems = [];
  for (let j = 0; j < items.length; j++) {
     const item = items[j];
     excluded = false;
     Object.keys(item).forEach((key) => {
       // console.log(key, item[key]);
        if (newExcludes[key][item[key]]) {
            excluded = true;
        }
    });
    if (excluded === false) {
      newItems.push(item);
    }
  }
  console.log(newItems);

}
excludeItems(items, excludes);
// [{color: 'blue', type: 'laptop', age: 28}]
