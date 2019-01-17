const ONE_THOUSAND = Math.pow(10, 3);
const TEN_THOUSAND = Math.pow(10, 4);
const dictionary = {
  0: "one",
  1: "one",
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

function amountToCheck(amount) {
  return numberToWord( Math.floor(amount) ) + " and " + amountToChange(amount);
}

function amountToChange(amount) {
  var change = Math.round( (amount - Math.floor(amount) ) * 100);

  return change + "/100";
}

function numberToWord(integer) {
  var prefix = '';
  var suffix = '';
  if (!integer){ return "zero"; }

  if(integer < 0){
    prefix = "negative";
    suffix = numberToWord(-1 * integer);
    return prefix + " " + suffix;
  }
  if(integer <= 90) {
    return dictionary[`${integer}`];
  }

  if(integer < 100) {
    prefix = numberToWord(integer - integer % 10);
    suffix = numberToWord(integer % 10);
    return prefix + "-"  + suffix;
  }
  if (integer < ONE_THOUSAND) {
    prefix = numberToWord(parseInt(Math.floor(integer / 100), 10) )  + " hundred";
    if (integer % 100){ suffix = " " + numberToWord(integer % 100); }
    return prefix + suffix;
  }
  if(integer < TEN_THOUSAND){
    prefix = numberToWord(parseInt(Math.floor(integer / ONE_THOUSAND), 10) )  + " thousand";
    if (integer % ONE_THOUSAND) {
      suffix = " " + numberToWord(integer % ONE_THOUSAND);
    }
    return prefix + suffix;
  } else {
    return '';
  }
}
