class MealBuilder {

  init() {
    this.meal = new Meal();
  }

  addMain(type) {
    this.meal.main = new MainItem(type);
  }

  addSide(type) {
    this.meal.side = new SideItem(type);
  }

  addDrink(type) {
    this.meal.drink = new DrinkItem(type);
  }

  addToy(type) {
    this.meal.toy = new ToyItem(type);
  }

  get() {
    return this.meal;
  }

}

class MealDirector {

  create(main, side, drink, toy) {
    const builder = new MealBuilder();
    builder.init();
    builder.addMain(main);
    builder.addSide(side);
    builder.addDrink(drink);
    builder.addToy(toy);
    return builder.get();
  }

}

const mealDirector = new MealDirector();

mealDirector.create('hamburger', 'fries', 'coke', 'car');