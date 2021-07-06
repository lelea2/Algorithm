/* 
Your previous Markdown content is preserved below:

# Part 2
Customers sometimes make a series of payments to pay their invoice. In this part, you will have an unsorted list of payments made by the customers, specifying their name, time of payment, and payment amount. Each subject line should now accurately reflect how much money is still owed by the customer. For example, if Bob pays half of his invoice right when it comes out, his next reminder email will say that he owes 50 dollars, not 100. If a customer has fully paid their invoice, we do not want to send them any more emails. In addition to returning the sequence of emails sent, you will also need to return a list of delinquent customers, those who did not fully pay their invoice before the due date, and how much they owe.


```
customer_payments = [
    {"payment_time": -9, "name": "Alice", "amount": 100},
    {"payment_time": 1, "name": "Alice", "amount": 50},
    {"payment_time": 0, "name": "Bob", "amount": 100},
]

// {
   "Alice": [{
      "payment": -9, 
      "amount": 1000
   }, {
      "payment":    
   }]
}
invoicer.send_emails(customer_invoices, customer_payments)
```

Output:
```
-10: [Upcoming] Invoice for Alice for 200 dollars
-9: [Upcoming] Invoice for Bob for 100 dollars
0: [New] Invoice for Alice for 100 dollars
20: [Reminder] Invoice for Alice for 50 dollars
30: [Due] Invoice for Alice for 50 dollars
Delinquent customers:
Alice owes 50 dollars
```
 
 */

const sendSchedule = new Map();
sendSchedule.set(-10, 'Upcoming');
sendSchedule.set(0, 'New');
sendSchedule.set(20, 'Reminder');
sendSchedule.set(30, 'Due');

const customerInvoices =  [
    {"invoice_time": 0, "name": "Alice", "amount": 200},
    {"invoice_time": 1, "name": "Bob", "amount": 100},
];

const customerPayment = [
  {"payment_time": -9, "name": "Alice", "amount": 100},
    {"payment_time": 1, "name": "Alice", "amount": 50},
    {"payment_time": 0, "name": "Bob", "amount": 100},
];

class Invoicer {
  
  constructor(sendSchedules) {
     this.sendSchedules  = sendSchedules;
  }
  
  sendEmails(customerInvoices, customerPayment) {
    if (customerInvoices.length === 0) {
      return '';
    }
    
    const arrResult = [];
    const hashPayment = this.getCustomerPaymentHash(customerPayment);
    const currentAmount = {};
    // O(n^2)
    for (let [key, value] of this.sendSchedules) {
      for (let i = 0; i < customerInvoices.length; i++) {
        const invoice = customerInvoices[i];
        const timestamp = key + invoice.invoice_time;
        if (typeof currentAmount[invoice.name] === 'undefined') {
           currentAmount[invoice.name] = invoice.amount; // initial amount value;
        }
        
        const paymentLock = hashPayment[invoice.name];
        const paymentLockValid = paymentLock.filter(item => item.payment_time <= timestamp);
        const remainPayment = paymentLock.filter(item => item.payment_time > timestamp);
        if (paymentLockValid.length > 0) { // there is payment
           hashPayment[invoice.name] = remainPayment;
           paymentLockValid.forEach(item => {
              currentAmount[invoice.name] -= item.amount;
           });
        }        
        if (currentAmount[invoice.name] > 0) {
           const str = `${timestamp}: [${value}] Invoice for ${invoice.name} for ${currentAmount[invoice.name]} dollars`;
           arrResult.push(str);
        }
      }
    }
    const deliquentArr = [];
    Object.keys(currentAmount).map(key => {
        if (currentAmount[key] > 0) {
          deliquentArr.push(`${key} owes ${currentAmount[key]} dollars`);
        }
    });
    console.log(arrResult.join('\n'));
    if (deliquentArr.length > 0) {
       console.log('Delinquent customers:');
       console.log(deliquentArr.join('\n'));
    }
  }
  
  getCustomerPaymentHash(customerPayment) {
     const hash = {};
     for (let i = 0; i < customerPayment.length; i++) {
       const customer = customerPayment[i];
       if (hash[customer.name]) {
          hash[customer.name].push({
             payment_time: customer.payment_time,
             amount: customer.amount
          });
       } else {
          hash[customer.name] = [{
             payment_time: customer.payment_time,
             amount: customer.amount
          }];
       }
     }
    return hash;
  }
}

const invoicer = new Invoicer(sendSchedule);
invoicer.sendEmails(customerInvoices, customerPayment);