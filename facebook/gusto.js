const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Mocha = require('mocha');
const mocha = new Mocha({ui: 'bdd'});
// Hack to get mocha running in Coderpad
mocha.suite.emit('pre-require', this, 'solution', mocha);

chai.use(sinonChai);
const expect = chai.expect;

/**
 *
 * # Bracket Calculator
 *
 * ## Objective
 *
 * At Gusto, we calculate a lot of income tax. In order to calculate income tax,
 * we need to be able to understand the amount of income that falls under each income bracket.
 *
 * To do that, we will create a tax bracket calculator.
 *
 * Notes
 * -----
 *
 * - The brackets are represented as an array of numbers. Each number represents the size of
 *   the bracket in a whole number currency.
 * - Income is spread out among each bracket. If the amount of income exceeds the total of the brackets,
 *   the remainder will go into one more "catch-all" or "excess" bracket.
 * - You can assume the input is sanitized and correct (e.g. no negative numbers)
 *
 * ### Part 1
 *
 * Create a bracket calculator.
 *
 * - Given a bracket, compute an array of amounts each corresponding to the appropriate bracket.
 *
 * - input: Amount of income (e.g. 4000)
 * - output: An array of amounts, representing how the income is split among brackets
 *
 * For example, given brackets of [5000, 5000]:
 *
 * * calc(2000) => [2000] - since it falls under the first bracket (<= 5000)
 * * calc(4000) => [4000]
 * * calc(6000) => [5000, 1000]
 * * calc(12000) => [5000, 5000, 2000] - since 12000 is larger than would fit in all the brackets,
 *                                       the remainder is always last
 * * calc(17000) => [5000, 5000, 7000]
 * It should be generic and able to calculate against any given brackets.
 *
 * ### Part 2
 *
 * Since income is actually earned per paycheck, the earnings will fall into higher tax brackets
 * as you accumulate more earnings. This calculation happens multiple times per year, and the income
 * for a given paycheck lands in different brackets based on the previous cumulative total.
 *
 * Let's change the calculator to accept a previous income total. This total will help inform us
 * how the current amount is split into brackets.
 *
 * For example (again, given brackets of [5000, 5000]):
 *
 * - $2000 current income, $2000 previous income
 *   * calc(2000, 2000) => [2000]        - nothing changes, we still fall under the first bracket
 *
 * - $2000 current income, $4000 previous income
 *   * calc(2000, 4000) => [1000, 1000]  - the first bracket is filled by $4000 of the previous income,
 *                                         and $1000 of the current amount
 *
 * - $2000 current income, $10000 previous income
 *   * calc(2000, 10000) => [0, 0, 2000] - the first 2 brackets are filled by the previous income,
 *                                         our current income is all excess
 * calc(2000, 12000) => [5000, 5000, 4000], => [0, 0, 2000]
 * calc(2000, 9000)  => [5000, 5000, 1000], => [0, 1000, 1000]
 */

class BracketCalculator {
  constructor(brackets) {
    this.brackets = brackets;
  }

//   splitByBrackets(currentAmount, ytdAmount = 0) {
//      const resultBracket = [];
//      // O(n)
//      for (let i = 0; i < this.brackets.length; i++) {
//        if (currentAmount <= 0) {
//           break;
//        }
//        if (this.brackets[i] <= currentAmount) {
//           resultBracket[i] = this.brackets[i];
//        } else {
//           resultBracket[i] = currentAmount;
//        }
//        currentAmount = currentAmount - resultBracket[i];
//      }
//     if (currentAmount > 0) {
//         resultBracket.push(currentAmount); // excess bracket
//     }
//     return resultBracket;
//   }

  getRealBucketValue(curr, ytdAmount) {
    if (ytdAmount >= 0) {
     return (curr  - ytdAmount < 0) ? 0 : (curr - ytdAmount);
    } else {
      return curr;
    }
  }

  _splitByBrackets(currentAmount) {
     const resultBracket = [];
     // O(n)
     for (let i = 0; i < this.brackets.length; i++) {
       if (currentAmount <= 0) {
          break;
       }
       if (this.brackets[i] <= currentAmount) {
          resultBracket[i] = this.brackets[i];
       } else {
          resultBracket[i] = currentAmount;
       }
       currentAmount = currentAmount - resultBracket[i];
     }
    if (currentAmount > 0) {
        resultBracket.push(currentAmount); // excess bracket
    }
    return resultBracket;
  }


  splitByBrackets(currentAmount, ytdAmount = 0) {
     const resultBracket = [];
     const arr = this._splitByBrackets(currentAmount + ytdAmount);
     return arr.map((value, i) => {
       const newValue = this.getRealBucketValue(value, ytdAmount);
       ytdAmount = ytdAmount - value;
       return newValue;
     });
//      if (ytdAmount > 0) {
//         currentAmount = currentAmount + ytdAmount;
//      }
//      // O(n)
//      for (let i = 0; i < this.brackets.length; i++) {
//        if (currentAmount <= 0) {
//           break;
//        }
//        let curr = 0;
//        if (this.brackets[i] <= currentAmount) {
//           curr = this.brackets[i];
//        } else {
//           curr = currentAmount;
//        }

//        if (ytdAmount > 0) {
//          resultBracket[i] = this.getRealBucketValue(curr, ytdAmount);
//          ytdAmount = ytdAmount - curr;
//        } else {
//          resultBracket[i] = curr;
//        }
//        currentAmount = currentAmount - curr;
//     }
//     if (currentAmount > 0) {
//        let remain = currentAmount;
//        if (ytdAmount > 0) {
//          remain = this.getRealBucketValue(remain, ytdAmount);
//        }
//       resultBracket.push(remain); // excess bracket
//     }
//     return resultBracket;
  }
}

describe('BracketCalculator', function() {
  let brackets;
  let calculator;

  describe('part 1', function() {
    beforeEach(function() {
      brackets = [5000, 5000];
      calculator = new BracketCalculator(brackets);
    });

    it('can split when the amounts are 0', function() {
      expect(calculator.splitByBrackets(0)).to.deep.equal([]);
    });

    it('can split into 1 bracket', function() {
      expect(calculator.splitByBrackets(2000)).to.deep.equal([2000]);
    });

    it('can split into 1 bracket', function() {
      expect(calculator.splitByBrackets(4000)).to.deep.equal([4000]);
    });


    it('can split into 1 bracket', function() {
      expect(calculator.splitByBrackets(5000)).to.deep.equal([5000]);
    });

    it('can split into 1 bracket', function() {
      expect(calculator.splitByBrackets(10000)).to.deep.equal([5000, 5000]);
    });


    it('can split into 1 bracket', function() {
      expect(calculator.splitByBrackets(6000)).to.deep.equal([5000, 1000]);
    });

    it('can split into 1 bracket', function() {
      expect(calculator.splitByBrackets(12000)).to.deep.equal([5000, 5000, 2000]);
    });

    it('can split into 1 bracket', function() {
      expect(calculator.splitByBrackets(17000)).to.deep.equal([5000, 5000, 7000]);
    });
  });

  describe('part 2', function() {
    beforeEach(function() {
      brackets = [5000, 5000];
      calculator = new BracketCalculator(brackets);
    });

    it('takes the ytd into account', function() {
      expect(calculator.splitByBrackets(2000, 2000)).to.deep.equal([2000]);
    });

    it('takes the ytd into account', function() {
      expect(calculator.splitByBrackets(2000, 3000)).to.deep.equal([2000]);
    });

     it('takes the ytd into account', function() {
      expect(calculator.splitByBrackets(2000, 4000)).to.deep.equal([1000, 1000]);
    });

     it('takes the ytd into account', function() {
      expect(calculator.splitByBrackets(2000, 8000)).to.deep.equal([0, 2000]);
    });

     it('takes the ytd into account', function() {
      expect(calculator.splitByBrackets(2000, 10000)).to.deep.equal([0, 0, 2000]);
    });

      it('takes the ytd into account', function() {
        // total amount: 2000 + 12000 = 14000
        // if there is no prevIncome (ytd = 0) => [5000, 5000, 4000];
        // [5000 - 12000, 5000 - 7000, 4000 - 2000]
        // [0, 0 , 2000]
      expect(calculator.splitByBrackets(2000, 12000)).to.deep.equal([0, 0, 2000]);
    });

     it('takes the ytd into account', function() {
      expect(calculator.splitByBrackets(2000, 9000)).to.deep.equal([0, 1000, 1000]);
    });
  });
});

mocha.run(function() {});
