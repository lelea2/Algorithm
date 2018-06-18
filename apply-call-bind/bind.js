/**
 * Experiment with bind, object for deduct method as example below
 */

var monica = {
  name: 'Monica Geller',
  total: 400,
  deductMontlyFee: function(fee) {
    this.total = this.total - fee;
    return this.name + ' remaining balance is '+ this.total;
  }
};

//Define another user object
var rachel = {name: 'Rachel Green', total: 1500};

//caculate deduct monthly fee for Rachel as below
//Pattern: obj.funcname.bind(newObj, args);
var rachelFeeDeductor = monica.deductMonthlyFee.bind(rachel, 200); //200 is deduct "fee" per month

//Test case:
rachelFeeDeductor(); //"Rachel Green remaining balance is 1300"
rachelFeeDeductor(); //"Rachel Green remaining balance is 1100"
