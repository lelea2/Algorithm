let primary_menu = [785,685,345,320,220,205,140,125];
let receipts = [1375, 485, 1775, 1105, 1825, 1940, 2825, 4030, 7500];
let counter = 0;

function find_lunch_items(money_left, menu) {
  counter++;
  if (money_left == 0) {
    return [];
  }
  for (let i = 0; i < menu.length; i++) {
    let diff = money_left - menu[i];
    if (diff >= 0) {
      let potential_list = find_lunch_items(diff, menu);
      potential_list.push(menu[i]);
      if (money_left == potential_list.reduce((total, amount) => total + amount)) {
        return potential_list;
      }
    }
  }
  return [];
}

for (let i=0; i < receipts.length; i++) {
  console.log( receipts[i], find_lunch_items(receipts[i], primary_menu) );
}

