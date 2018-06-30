class ShoppingCart {

  constructor(discount) {
    this.discount = new discount();
    this.amount = 0;
  }

  checkout() {
    return this.discount.apply(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }

}

class discountStrategy {

  apply(amount) {
    return amount;
  }

}

class guestDiscount extends discountStrategy {

  apply(amount) {
    return amount;
  }

}

class regularDiscount extends discountStrategy {

  apply(amount) {
    return amount * 0.9;
  }

}

class premiumDiscount extends discountStrategy {

  apply(amount) {
    return amount * 0.8;;
  }

}

const guest = new ShoppingCart(guestDiscount);
guest.setAmount(10);
console.log(guest.checkout()); // 10

const regular = new ShoppingCart(regularDiscount);
regular.setAmount(10);
console.log(regular.checkout()); // 9

const premium = new ShoppingCart(premiumDiscount);
premium.setAmount(10);
console.log(premium.checkout()); // 8