import { FlyBehavior } from "./fly-behavior.interface";

export class FlyNoWay implements FlyBehavior {
  public fly(): void {
    console.log("I can't fly");
  }
}
