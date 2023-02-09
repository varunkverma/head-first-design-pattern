import Beverage from "../beverages/bevarge";

export default abstract class CondimentDecorator extends Beverage {
  beverage: Beverage | null = null;

  abstract getDescription(): string;
}
