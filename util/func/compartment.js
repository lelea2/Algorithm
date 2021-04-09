function buildCache(str) {
  const cache = {};
  const opps = {};
  let [prevItems, curItems] = [0, 0];
  let isOpen = false;

  // Calculate max opportunity that can be gained at [i]
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '|') {
      isOpen = true; // Incase it starts with "****|***|"
      opps[i] = curItems; // Mark the index of opportunity
      prevItems = prevItems + curItems;
      curItems = 0;
    } else {
      if (isOpen === true) curItems++;
    }
    cache[i] = { maxOpp: prevItems, loss: 0 };
  }

  // Calculate the potential loss at [i]
  let j = Math.max(...Object.keys(opps));
  let oppCost = opps[j];

  while (j > 0) {
    if (opps[j] !== undefined) oppCost = opps[j];
    else cache[j].loss = oppCost;
    j--;
  }
  return cache;
}

function getNumItems(str, starts, ends) {
  const cache = buildCache(str);

  const results = [];
  for (let i = 0; i < starts.length; i++) {
    const [from, to] = [starts[i], ends[i]];
    results.push([cache[to].maxOpp - cache[from].maxOpp - cache[from].loss]); // ugly, I know. ,
  }
  return results;
}