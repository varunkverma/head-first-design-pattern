import { FlyBehavior } from "../duck-behaviors/fly/fly-behavior.interface";
import { QuackBehavior } from "../duck-behaviors/quack/quack-behavior.interface";

export abstract class Duck {
  private flyBehavior!: FlyBehavior;
  private quackBehavior!: QuackBehavior;

  abstract display(): void;

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }

  setFlyBehaviour(fb: FlyBehavior) {
    this.flyBehavior = fb;
  }

  setQuackBehaviour(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  swim() {
    console.log("All ducks float, even decoys");
  }
}
