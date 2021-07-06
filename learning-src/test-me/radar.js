// String charge = "[\"CHARGE:card_country=US&currency=USD&amount=2500&ip_country=CA\",\"ALLOW:amount>500ANDip_country==CA\",\"BLOCK:card_country==CAORcard_country==MA\",  ]\n";
// String charge1 = "[\"CHARGE:card_country=US&currency=USD&amount=2500&ip_country=CA\",\"ALLOW:amount>500ANDip_country==CA\",\"BLOCK:card_country==USANDamount<200\",  ]\n";
// String charge2 = "[\"CHARGE:card_country=US&currency=USD&amount=2500&ip_country=CA\",\"ALLOW:currency==EUR\",  ]\n";
// String charge3 = "[\"CHARGE:card_country=US&currency=USD&amount=2500&ip_country=CA\",\"BLOCK:amount>500\",  ]\n";

// the algorithm has to return 1 of the transaction is allowed and 0 if not.
// We have 2 different family rules : ALLOW and BLOCK, and both of them can accept up to 2 rules separated by an OR or an AND.
// We have 6 different operations ( >, <, >=, <=, ==, !=)

function isAllow(charge = '') {
  // ["[", "CHARGE:card_country=US&currency=USD&amount=2500&ip_country=CA", ",", "ALLOW:amount>500ANDip_country==CA", ",", "BLOCK:card_country==CAORcard_country==MA", ",  ]\n"]
  const arr = charge.split("\"");
  let allowMap = new Map();
  let blockMap = new Map();
  let chargeMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const currVal = arr[i];
    if (currVal.contains('CHARGE')) { // generate charge map
      chargeMap = generateChargeMap(currVal);
    } else if (currVal.contains('ALLOW')) {

    } else if (currVal.contains('BLOCK')) {

    }
  }
}

function generateChargeMap(str) {
  const rule = str.split(':')[1] || ''; //card_country=US&currency=USD&amount=2500&ip_country=CA
  const ruleArr = rule.split('&');
  const chargeMap = new Map();
  for (let i = 0; i < ruleArr.length; i++) {
    const val = ruleArr[i].split('=');
    chargeMap.set(val[0], val[1]);
  }
  return chargeMap;
}

function generateRules(str) {
  const rule = str.split(':')[1] || ''; // ALLOW:amount>500ANDip_country==CA
  if (rule.contains('AND')) {
    const arr = rule.split('AND');
    return {
      
    }
  } else if (rule.contains('OR')) {
    const arr = rule.split('OR');
  }
}

function generateRulesMap(arr) {
  let map = new Map();
  let mapOperator = new Map();
  const operatorMap = new Map();
  operatorMap.set(1, '==');
  operatorMap.set(2, '!=');
  operatorMap.set(3, '<');
  operatorMap.set(4, '<=');
  operatorMap.set(5, '>');
  operatorMap.set(6, '>=');
  for (let i = 0; i < arr.length; i++) {
    const operator = returnOperatorVal(operatorMap, arr[i]);
    const temp = arr[i].split(operatorMap.get(operator));
    map.set(temp[0], temp[1]);
    mapOperator(temp[0], operator);
  }
  return {
    map,
    mapOperator
  };
}

function returnOperatorVal(operatorMap, str) {
  for (let [key, value] of operatorMap) {
    if (str.contains(value)) {
      return key;
    }
  }
  return 0;
}

function compare(s1, s2, operatorValue) {
  let result = 1;
  const n1 = parseInt(s1, 10);
  const n2 = parseInt(s2, 10);
  switch (operatorValue){
    case 1:
      result = s1 === s2 ? 1 : 0;
      break;
    case 2: 
      result = s1 === s2 ? 0 : 1;
      break;
    case 3: 
      result = n1 < n2 ? 1 : 0;
      break;
    case 4:
      result = n1 <= n2 ? 1 : 0;
      break;
    case 5: 
      result = n1 > n2 ? 1 : 0;
      break;
    case 6: 
      result = n1 >= n2 ? 1 : 0;
      break;
  }

  return result;
}