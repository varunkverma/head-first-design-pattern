import Beverage from "../beverages/bevarge";
import CondimentDecorator from "./condiment-decorator";

export default class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage!.getDescription() + ", Mocha";
  }

  cost(): number {
    return this.beverage!.cost() + 0.2;
  }
}
