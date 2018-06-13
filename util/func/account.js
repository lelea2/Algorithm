class Account {

  constructor(name, type, openDate, balance) {
     this.name = name;
     this.type = type;
     this.openDate = openDate;
     this.balance = balance;
  }

  setBalance(balance) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getOpenDate() {
    return this.openDate;
  }
  
  isMatchAccount(name, type, openDate) {
    return (this.name === name && this.type === type && this.openDate === openDate);
  }
  
  getKey() {
    return `${this.name}_${this.type}_${this.openDate}`; 
  }
}

const a = createAccount("American Loan", "loan", 1000.34, 1493156420);
const b = createAccount("B", "loan", 1000.34, 1493156420);
const c = createAccount("C", "credit-card", 500.34, 1493153420);
const d = createAccount("D", "credit-card", 500.34, 1493153420);

const previous = [a,b,c, d];


const aNew = createAccount("A", "loan", 1000.34, 1493156420);
const bNew = createAccount("B", "loan", 900.34, 1493156420);
const cNew = createAccount("C", "credit-card", 1000.34, 1493153420);
const cDup = createAccount("C", "credit-card", 500.34, 1493156420);

const current = [aNew,bNew,cNew,cDup,d]

function createAccount(name, type, balance, openDate) {
  return new Account(name, type, openDate, balance)
}


const findByName = (arr, account) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isMatchAccount(account.getName(), account.getType(), account.getOpenDate())) {
      return arr[i];
    }
  }
  return null;
};


/*
 Compare 2 *sets* of accounts, you'll be given a previousAccounts and currentAccounts:
    * print out "<name>: <balance change>" for matches
    * print out "<name>: added/deleted" for those do not exist across sets
*/
const compareAccountSets = (oldSet, newSet) => {
  let changeset = {};

    // New set
  for (let i = 0; i < newSet.length; i++) {
    const oldMatch = findByName(oldSet, newSet[i]);
    if (oldMatch) {
       changeset[newSet[i].getName()] = newSet[i].getBalance() - oldMatch.getBalance();
       //   account: newSet[i],
       //   balance_change: newSet[i].getBalance() - oldMatch.getBalance()
       // };
    } else {
       changeset[newSet[i].getName()] ='added'
    }
  }
  // Oldset
  for (let i = 0; i < oldSet.length; i++) {
     const newMatch = findByName(newSet, oldSet[i]);
    if (newMatch) { // do not need to do anything
    } else {
      changeset[oldSet[i].getName()] = 'deleted';
    }
  }
  console.log(changeset);

}


compareAccountSets([a], [a])
compareAccountSets([a], [aNew])
compareAccountSets(previous, current)