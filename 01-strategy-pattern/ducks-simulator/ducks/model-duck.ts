import { FlyNoWay } from "../duck-behaviors/fly/fly-no-way";
import { Quack } from "../duck-behaviors/quack/quack";
import { Duck } from "./duck";

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.setFlyBehaviour(new FlyNoWay());
    this.setQuackBehaviour(new Quack());
  }

  display(): void {
    console.log("I'm a model duck");
  }
}
