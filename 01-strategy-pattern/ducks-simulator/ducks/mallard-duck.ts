import { FlyWithWings } from "../duck-behaviors/fly/fly-with-wings";
import { Quack } from "../duck-behaviors/quack/quack";
import { Duck } from "./duck";

export class MallardDuck extends Duck {
  constructor() {
    super();
    this.setFlyBehaviour(new FlyWithWings());
    this.setQuackBehaviour(new Quack());
  }
  display(): void {
    console.log("Looks like a Mallard Duck");
  }
}
