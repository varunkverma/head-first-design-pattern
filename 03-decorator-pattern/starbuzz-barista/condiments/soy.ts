import Beverage from "../beverages/bevarge";
import CondimentDecorator from "./condiment-decorator";

export default class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage!.getDescription() + ", Soy";
  }

  cost(): number {
    return this.beverage!.cost() + 0.25;
  }
}
